# WeziWeb Chatbot - Quick Start Guide

## ✅ What We Fixed

Your chatbot has been transformed from pushy salesperson to strategic lead collector:

### 🎯 **NEW LEAD COLLECTION SYSTEM**
- Automatically extracts visitor name, email, phone from conversations
- Sends lead data to **othman.taoufik2000@gmail.com** (your working email)
- Stores all leads locally for backup
- Natural, non-pushy conversation flow

### 🛠️ **EASY CUSTOMIZATION**
- **System Prompt Location**: `src/config/systemPromptConfig.js`
- Edit this file to change chatbot personality, company info, and conversation strategy
- No coding required - just modify the configuration

### 📊 **ADMIN PANEL**
- Click ⚙️ gear icon (bottom-left of website)
- Password: `weziweb2024`
- View all collected leads, export to CSV, send emails

## 🚀 **Immediate Actions**

### 1. **Customize Your Chatbot** (5 minutes)
Open `src/config/systemPromptConfig.js` and modify:
```javascript
companyInfo: {
  expert: "Othman Taoufik",           // Your name
  specialties: ["n8n Automation"],    // Your services
  experience: "5+ years...",          // Your experience
  // etc...
}
```

### 2. **Test Lead Collection** (2 minutes)
1. Open your website
2. Chat with bot: "Hi, I'm John Doe, my email is john@example.com"
3. Check admin panel for collected lead
4. Verify email notification (currently in demo mode)

### 3. **Access Admin Panel** (1 minute)
1. Click ⚙️ gear icon on website
2. Enter password: `weziweb2024`
3. View/export collected leads

## 📧 **Email Setup** (Optional)

**Currently**: Demo mode - leads saved locally
**To enable real emails**:
1. Sign up at EmailJS.com
2. Update credentials in `src/services/emailService.js`
3. Replace: `EMAILJS_SERVICE_ID`, `EMAILJS_TEMPLATE_ID`, `EMAILJS_PUBLIC_KEY`

## 🎯 **Key Files to Remember**

| File | Purpose |
|------|---------|
| `src/config/systemPromptConfig.js` | **EDIT THIS** - Chatbot personality & behavior |
| `src/services/emailService.js` | Email configuration (if needed) |
| `src/components/enhanced/LeadsAdmin.jsx` | Admin panel |

## 🔥 **What Makes This Better**

### ❌ **OLD CHATBOT**:
```
"WeziWeb can definitely help you automate your e-commerce business! 
Othman has extensive experience... Let's schedule a consultation!"
```

### ✅ **NEW CHATBOT**:
```
"That's interesting! E-commerce automation can really streamline 
operations. I've seen similar businesses reduce their workload by 70%. 
What's your name and email so I can send you a relevant case study?"
```

### 🎯 **RESULT**: 
- More natural conversations
- Higher lead capture rates  
- Better visitor experience
- Automatic lead management

## 💡 **Pro Tips**

1. **Monitor Daily**: Check admin panel for new leads
2. **Follow Up Fast**: Contact leads within 24 hours
3. **Customize Regularly**: Update system prompt based on common questions
4. **Export Weekly**: Download CSV backups of your leads

---

## 🛠️ **Need Changes?**

**Want different personality?** → Edit `systemPromptConfig.js`
**Want different email?** → Change `ADMIN_EMAIL` in `emailService.js` 
**Want different admin password?** → Edit `ADMIN_PASSWORD` in `LeadsAdmin.jsx`

**Your enhanced chatbot is ready to capture leads! 🎯**