// Social Feed & Badges - Community features
import { Heart, Fire, Trophy, Medal } from "./icons";
import { Avatar, AvatarFallback } from "../ui/avatar";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";

export const SocialScreen = () => {
  const feedItems = [
    {
      user: "Sarah M",
      avatar: "SM",
      time: "2h ago",
      activity: "completed Upper Body Strength",
      stats: { duration: "45 min", calories: 320 },
      likes: 24,
    },
    {
      user: "Mike R",
      avatar: "MR",
      time: "4h ago",
      activity: "achieved 30-day streak! 🔥",
      badge: "🔥",
      likes: 56,
    },
    {
      user: "Emma L",
      avatar: "EL",
      time: "6h ago",
      activity: "set new PR on Deadlift: 145kg",
      stats: { pr: "+5kg" },
      likes: 32,
    },
  ];

  const badges = [
    { emoji: "🏆", name: "First Workout", desc: "Complete your first workout", earned: true },
    { emoji: "🔥", name: "Week Warrior", desc: "7-day streak", earned: true },
    { emoji: "💪", name: "Strength Master", desc: "Lift 1000kg total volume", earned: true },
    { emoji: "⚡", name: "Speed Demon", desc: "Complete 10 HIIT workouts", earned: true },
    { emoji: "🎯", name: "Goal Crusher", desc: "Reach your monthly goal", earned: true },
    { emoji: "🌟", name: "Consistency King", desc: "30-day streak", earned: false },
    { emoji: "🚀", name: "Level Up", desc: "Complete 100 workouts", earned: false },
    { emoji: "🏅", name: "Champion", desc: "Top 10% this month", earned: false },
  ];

  return (
    <div className="min-h-screen bg-background p-8">
      <div className="max-w-6xl mx-auto">
        <h2 className="mb-8">Social & Achievements</h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Social Feed */}
          <div>
            <h4 className="mb-4 text-muted-foreground">Activity Feed</h4>
            <div className="w-[375px] h-[812px] bg-background rounded-[48px] p-4 border-4 border-[#2A2A2A] shadow-2xl">
              <div className="w-full h-full rounded-[36px] overflow-y-auto">
                {/* Header */}
                <div className="p-6">
                  <h2 className="mb-6">Community</h2>

                  {/* Your Activity Summary */}
                  <div className="bg-gradient-to-r from-[#B8FF37]/20 to-[#00E5FF]/20 rounded-2xl p-5 border border-[#B8FF37] mb-6">
                    <div className="flex items-center gap-3 mb-3">
                      <Avatar className="w-12 h-12 border-2 border-[#B8FF37]">
                        <AvatarFallback className="bg-[#B8FF37] text-[#121212]">
                          AK
                        </AvatarFallback>
                      </Avatar>
                      <div className="flex-1">
                        <div>Your week so far</div>
                        <div className="text-muted-foreground">Keep crushing it!</div>
                      </div>
                    </div>
                    <div className="grid grid-cols-3 gap-3">
                      <div className="bg-background/50 rounded-xl p-2 text-center">
                        <div className="text-[#B8FF37]">5</div>
                        <div className="text-muted-foreground">Workouts</div>
                      </div>
                      <div className="bg-background/50 rounded-xl p-2 text-center">
                        <div className="text-[#00E5FF]">225</div>
                        <div className="text-muted-foreground">Minutes</div>
                      </div>
                      <div className="bg-background/50 rounded-xl p-2 text-center">
                        <div className="text-[#FF0055]">12</div>
                        <div className="text-muted-foreground">Day Streak</div>
                      </div>
                    </div>
                  </div>

                  {/* Feed */}
                  <h4 className="mb-3">Friend Activity</h4>
                  <div className="space-y-3">
                    {feedItems.map((item, i) => (
                      <div key={i} className="bg-surface rounded-2xl p-4 border border-border">
                        {/* User Info */}
                        <div className="flex items-start gap-3 mb-3">
                          <Avatar className="w-10 h-10 border-2 border-[#00E5FF]">
                            <AvatarFallback className="bg-[#00E5FF] text-[#121212]">
                              {item.avatar}
                            </AvatarFallback>
                          </Avatar>
                          <div className="flex-1">
                            <div className="flex items-center justify-between mb-1">
                              <span>{item.user}</span>
                              <span className="text-muted-foreground">{item.time}</span>
                            </div>
                            <div className="text-muted-foreground">{item.activity}</div>
                          </div>
                        </div>

                        {/* Stats or Badge */}
                        {item.stats && (
                          <div className="bg-background rounded-xl p-3 mb-3">
                            <div className="flex gap-4 justify-center">
                              {item.stats.duration && (
                                <div className="text-center">
                                  <div className="text-[#B8FF37]">{item.stats.duration}</div>
                                  <div className="text-muted-foreground">Duration</div>
                                </div>
                              )}
                              {item.stats.calories && (
                                <div className="text-center">
                                  <div className="text-[#FF0055]">{item.stats.calories}</div>
                                  <div className="text-muted-foreground">Calories</div>
                                </div>
                              )}
                              {item.stats.pr && (
                                <div className="text-center">
                                  <div className="text-[#B8FF37]">{item.stats.pr}</div>
                                  <div className="text-muted-foreground">Improvement</div>
                                </div>
                              )}
                            </div>
                          </div>
                        )}

                        {item.badge && (
                          <div className="bg-background rounded-xl p-4 mb-3 text-center">
                            <div style={{ fontSize: '48px' }}>{item.badge}</div>
                          </div>
                        )}

                        {/* Actions */}
                        <div className="flex items-center gap-4">
                          <button className="flex items-center gap-2 text-[#FF0055]">
                            <Heart className="w-5 h-5" />
                            <span>{item.likes}</span>
                          </button>
                          <button className="text-muted-foreground">Comment</button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Badges */}
          <div>
            <h4 className="mb-4 text-muted-foreground">Achievement Badges</h4>
            <div className="w-[375px] h-[812px] bg-background rounded-[48px] p-4 border-4 border-[#2A2A2A] shadow-2xl">
              <div className="w-full h-full rounded-[36px] overflow-y-auto">
                <div className="p-6">
                  <h2 className="mb-2">Badges</h2>
                  <p className="text-muted-foreground mb-6">
                    {badges.filter(b => b.earned).length} of {badges.length} earned
                  </p>

                  {/* Progress */}
                  <div className="bg-surface rounded-2xl p-5 border border-border mb-6">
                    <div className="flex items-center gap-3 mb-3">
                      <Trophy className="w-6 h-6 text-[#B8FF37]" />
                      <div className="flex-1">
                        <div>Achievement Progress</div>
                        <div className="text-muted-foreground">
                          {Math.round((badges.filter(b => b.earned).length / badges.length) * 100)}% Complete
                        </div>
                      </div>
                    </div>
                    <div className="h-2 bg-[#2A2A2A] rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-gradient-to-r from-[#B8FF37] to-[#00E5FF] rounded-full"
                        style={{ width: `${(badges.filter(b => b.earned).length / badges.length) * 100}%` }}
                      />
                    </div>
                  </div>

                  {/* Earned Badges */}
                  <h4 className="mb-3">Earned</h4>
                  <div className="grid grid-cols-3 gap-3 mb-6">
                    {badges.filter(b => b.earned).map((badge, i) => (
                      <div
                        key={i}
                        className="bg-surface rounded-2xl p-4 border border-[#B8FF37] text-center"
                      >
                        <div style={{ fontSize: '40px' }} className="mb-2">
                          {badge.emoji}
                        </div>
                        <div className="mb-1">{badge.name}</div>
                        <div className="text-muted-foreground" style={{ fontSize: '11px' }}>
                          {badge.desc}
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Locked Badges */}
                  <h4 className="mb-3">Locked</h4>
                  <div className="grid grid-cols-3 gap-3">
                    {badges.filter(b => !b.earned).map((badge, i) => (
                      <div
                        key={i}
                        className="bg-surface rounded-2xl p-4 border border-border text-center opacity-50"
                      >
                        <div style={{ fontSize: '40px' }} className="mb-2 grayscale">
                          {badge.emoji}
                        </div>
                        <div className="mb-1">{badge.name}</div>
                        <div className="text-muted-foreground" style={{ fontSize: '11px' }}>
                          {badge.desc}
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Challenge of the Week */}
                  <div className="mt-6">
                    <h4 className="mb-3">Challenge of the Week</h4>
                    <div className="bg-gradient-to-br from-[#FF0055]/20 to-[#B8FF37]/20 rounded-2xl p-5 border border-[#FF0055]">
                      <div className="flex items-center gap-3 mb-3">
                        <Fire className="w-6 h-6 text-[#FF0055]" />
                        <div>
                          <div>Calorie Crusher</div>
                          <div className="text-muted-foreground">Burn 2,000 calories this week</div>
                        </div>
                      </div>
                      <div className="mb-3">
                        <div className="h-2 bg-[#2A2A2A] rounded-full overflow-hidden">
                          <div 
                            className="h-full bg-[#FF0055] rounded-full"
                            style={{ width: '71%' }}
                          />
                        </div>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-[#FF0055]">1,420 / 2,000</span>
                        <Badge className="bg-[#FF0055] text-white">2 days left</Badge>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Design Notes */}
        <div className="mt-8 bg-surface p-6 rounded-2xl border border-border">
          <h3 className="mb-4">Social Features</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-muted-foreground">
            <div>
              <h4 className="text-foreground mb-2">Activity Feed</h4>
              <ul className="space-y-1">
                <li>• Personal activity summary</li>
                <li>• Friend workout updates</li>
                <li>• Achievement celebrations</li>
                <li>• Like and comment interactions</li>
                <li>• Time-based activity stream</li>
              </ul>
            </div>
            <div>
              <h4 className="text-foreground mb-2">Badges & Challenges</h4>
              <ul className="space-y-1">
                <li>• Earned vs locked badge states</li>
                <li>• Achievement progress tracking</li>
                <li>• Weekly challenges</li>
                <li>• Visual badge showcase</li>
                <li>• Gamification elements</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
