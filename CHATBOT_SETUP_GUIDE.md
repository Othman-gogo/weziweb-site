# WeziWeb Enhanced Chatbot Setup Guide

## 🎯 What's Been Implemented

Your chatbot has been transformed into a powerful lead generation tool with the following features:

### ✅ Lead Collection System

- **Smart Data Extraction**: Automatically detects and extracts name, email, phone, and company information from conversations
- **Strategic Conversation Flow**: Guides visitors through qualification while providing value
- **Non-pushy Approach**: Balances helpfulness with lead collection naturally

### ✅ Email Integration

- **Automatic Notifications**: Sends lead data to `othman.taoufik20000@gmail.com` when complete
- **Local Backup**: Stores all leads locally in case email fails
- **Rich Lead Data**: Includes full conversation history and extracted business challenges

### ✅ Admin Panel

- **Password Protected**: Access with password `weziweb2024`
- **Lead Management**: View, export, and manage all collected leads
- **Analytics**: Track collection rates and lead quality
- **CSV Export**: Download lead data for CRM import

### ✅ Configurable System Prompt

- **Easy Customization**: Edit `src/config/systemPromptConfig.js` to modify chatbot behavior
- **Multiple Settings**: Personality, lead strategy, company info, and response styles

## 🔧 Quick Setup Steps

### 1. **System Prompt Customization**

Edit `src/config/systemPromptConfig.js` to customize:

- Company information
- Chatbot personality
- Lead collection strategy
- Allowed/forbidden topics
- Sample responses

### 2. **Email Configuration** (Optional)

To enable real email sending:

1. Sign up at [EmailJS.com](https://www.emailjs.com/)
2. Create a service (Gmail/Outlook recommended)
3. Create email templates with these variables:

   - `{{lead_name}}`, `{{lead_email}}`, `{{lead_phone}}`
   - `{{business_challenge}}`, `{{conversation_summary}}`
   - `{{timestamp}}`

4. Update `src/services/emailService.js`:
   ```javascript
   const EMAILJS_SERVICE_ID = 'your_actual_service_id';
   const EMAILJS_TEMPLATE_ID = 'your_actual_template_id';
   const EMAILJS_PUBLIC_KEY = 'your_actual_public_key';
   ```

### 3. **Access Admin Panel**

1. Look for the ⚙️ gear icon in bottom-left corner
2. Click to open admin panel
3. Enter password: `weziweb2024`
4. View and manage collected leads

## 📊 How Lead Collection Works

### Automatic Detection

The chatbot automatically extracts:

- **Email**: Any valid email address format
- **Phone**: Various formats (US/International)
- **Name**: Patterns like "I'm John", "My name is Sarah"
- **Company**: Patterns like "I work at ABC Corp"
- **Challenges**: Messages mentioning problems/automation needs

### Smart Flow

1. **Welcome**: Friendly greeting asking about business
2. **Engage**: Identify pain points and challenges
3. **Collect**: Naturally request contact information while providing value
4. **Qualify**: Understand business size, budget, urgency
5. **Present**: Match needs to WeziWeb services
6. **Guide**: Encourage consultation booking

### Email Triggers

Emails are sent automatically when:

- Name AND email are collected
- Lead hasn't been emailed before
- Contains full conversation history

## 🎨 Customization Options

### Change Chatbot Personality

Edit `src/config/systemPromptConfig.js`:

```javascript
personality: {
  tone: "friendly, professional, and helpful", // Modify this
  approach: "consultative and educational",    // And this
  style: "conversational and value-driven"     // And this
}
```

### Modify Lead Collection Strategy

```javascript
leadStrategy: {
  primaryGoal: "Your primary goal here",
  secondaryGoal: "Your secondary goal here",
  leadCollectionPhrases: [
    "Your custom phrase 1",
    "Your custom phrase 2"
  ]
}
```

### Update Company Information

```javascript
companyInfo: {
  expert: "Your Name",
  specialties: ["Your", "Specialties"],
  experience: "Your experience details",
  // etc...
}
```

## 📧 Email Template Example

For EmailJS, create a template with this structure:

**Subject:** New Lead from WeziWeb: {{lead_name}}

**Body:**

```
🎯 New Lead Captured!

📋 CONTACT INFO:
Name: {{lead_name}}
Email: {{lead_email}}
Phone: {{lead_phone}}
Company: {{lead_company}}

💬 BUSINESS CHALLENGE:
{{business_challenge}}

🗣️ FULL CONVERSATION:
{{conversation_summary}}

⏰ Captured: {{timestamp}}
```

## 🛠️ Advanced Features

### Lead Data Storage

- **localStorage**: All leads stored locally as backup
- **Session persistence**: Conversation continues across page reloads
- **Analytics tracking**: Detailed interaction tracking

### Admin Functions

- **Export CSV**: Download all leads for CRM import
- **Direct Contact**: Click email/phone to contact leads directly
- **Clear Data**: Remove all collected leads
- **Real-time Updates**: Refresh to see new leads

### Analytics Tracking

The system tracks:

- Chat opened/closed events
- Message interactions
- Lead collection milestones
- Contact information gathered
- Service inquiries

## 🔒 Security & Privacy

### Data Protection

- **Local Storage**: Lead data stored securely in browser
- **Password Protection**: Admin panel requires authentication
- **No External Dependencies**: Works without external services

### Privacy Compliance

- Consider adding privacy notice to chatbot
- Inform visitors about data collection
- Provide opt-out mechanisms if required

## 🚀 Going Live

### Testing Checklist

- [ ] Test lead collection with sample conversations
- [ ] Verify email notifications (if configured)
- [ ] Check admin panel access and functionality
- [ ] Test CSV export feature
- [ ] Validate chatbot responses and personality

### Production Setup

1. **Configure EmailJS** (for real email notifications)
2. **Update system prompt** with your specific details
3. **Test end-to-end** lead collection flow
4. **Monitor admin panel** regularly for new leads
5. **Follow up promptly** with collected leads

## 📞 Support

### File Locations

- **System Prompt**: `src/config/systemPromptConfig.js`
- **Lead Collection**: `src/services/chatbotService.js`
- **Email Service**: `src/services/emailService.js`
- **Admin Panel**: `src/components/enhanced/LeadsAdmin.jsx`
- **Main App**: `src/App.jsx`

### Troubleshooting

- **No emails?** Check EmailJS configuration in `emailService.js`
- **Chatbot not responding?** Verify Gemini AI API key in `chatbotService.js`
- **Can't access admin?** Use password `weziweb2024`
- **Leads not saving?** Check browser localStorage permissions

---

**Your chatbot is now a powerful lead generation machine! 🎯**

The system will automatically collect visitor information, send you notifications, and store everything for easy management. Customize the personality and strategy to match your business needs perfectly.
