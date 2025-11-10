import React, { useEffect, useRef, useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'

/*
  A simple, touch-friendly, infinite carousel for mobile.
  - items: array of data to render
  - renderItem: (item, index) => JSX for each card
  - visibleCount: how many items to show at once (mobile defaults to 1)
  - gap: tailwind gap class between slides (e.g., 'gap-4')
*/
const Carousel = ({ items = [], renderItem, visibleCount = 1 }) => {
  const [index, setIndex] = useState(0)
  const touchStartX = useRef(0)
  const touchDeltaX = useRef(0)

  // Duplicate items for infinite effect
  const extended = [...items, ...items, ...items]
  const base = items.length
  const start = base // center block

  useEffect(() => {
    setIndex(start)
  }, [base])

  const handlePrev = () => setIndex((prev) => prev - 1)
  const handleNext = () => setIndex((prev) => prev + 1)

  // Normalize index into the middle block to keep it from growing unbounded
  useEffect(() => {
    if (index <= start - base) setIndex((idx) => idx + base)
    if (index >= start + base) setIndex((idx) => idx - base)
  }, [index, base, start])

  const onTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX
  }
  const onTouchMove = (e) => {
    touchDeltaX.current = e.touches[0].clientX - touchStartX.current
  }
  const onTouchEnd = () => {
    const threshold = 50
    if (touchDeltaX.current > threshold) handlePrev()
    else if (touchDeltaX.current < -threshold) handleNext()
    touchDeltaX.current = 0
  }

  if (!items.length) return null

  return (
    <div className="relative w-full">
      {/* Track */}
      <div
        className="overflow-hidden"
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
        onTouchEnd={onTouchEnd}
      >
        <div
          className="flex transition-transform duration-300 ease-out gap-4 px-2"
          style={{ transform: `translateX(-${(index - start) * 100}%)`, width: '100%' }}
        >
          {extended.map((item, i) => (
            <div key={i} className="min-w-full">
              {renderItem(item, i % base)}
            </div>
          ))}
        </div>
      </div>

      {/* Controls */}
      <button
        type="button"
        onClick={handlePrev}
        className="absolute left-2 top-1/2 -translate-y-1/2 p-2 bg-white/90 rounded-full shadow md:hidden"
        aria-label="Previous"
      >
        <ChevronLeft className="w-5 h-5" />
      </button>
      <button
        type="button"
        onClick={handleNext}
        className="absolute right-2 top-1/2 -translate-y-1/2 p-2 bg-white/90 rounded-full shadow md:hidden"
        aria-label="Next"
      >
        <ChevronRight className="w-5 h-5" />
      </button>
    </div>
  )
}

export default Carousel
