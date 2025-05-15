  // FAQ data for common customer questions
  const faqData = {
    "hubspot expensive": "⚔️ PRICING BATTLE: HUBSPOT vs MONDAY\n\n🔴 MONDAY HIDDEN COST TRAP:\n• **Base price + 30-50% premium** for essential add-ons\n• **$800-1500/mo extra** for marketing automation\n• **$15-30/user/mo extra** for email tracking\n• **$50-200/mo extra** for analytics tools\n• **Multiple disconnected tools** creating data silos\n\n🟢 HUBSPOT VALUE ADVANTAGE:\n• **All-inclusive platform** with no surprise costs\n• **Free CRM forever** with no time limitations\n• **3.4X ROI within 12 months** (Forrester Research)\n• **Unlimited users** for core CRM features\n• **Single source of truth** across your entire business",
    
    "monday cheaper": "⚔️ TOTAL COST BATTLE: MONDAY vs HUBSPOT\n\n🔴 MONDAY'S DECEPTIVE PRICING:\n• **Entry price is a smokescreen** hiding total ownership costs\n• **Mandatory additional tools** required for basic functionality:\n  → Email marketing: $100-500/month\n  → Email tracking: $15-30/user/month\n  → Reporting: $50-200/month\n• **Per-seat costs explode** as your team grows (10 users = $200/mo for Pro)\n• **Integration costs pile up** with Zapier ($20-599/mo)\n\n🟢 HUBSPOT'S SUPERIOR VALUE:\n• **All essential tools included** in one transparent price\n• **Marketing tools not priced per-user** - huge savings at scale\n• **No separate systems** means no integration headaches\n• **Proven 340% ROI** makes business case clear",
    
    "monday better": "⚔️ CAPABILITIES BATTLE: HUBSPOT DOMINANCE\n\n🔴 MONDAY'S CRITICAL WEAKNESSES:\n• **Project tool retrofitted for sales** - not built for revenue teams\n• **Zero native email tracking** - sales teams flying blind\n• **No marketing automation** whatsoever\n• **Customer data fragmented** across multiple disconnected boards\n• **No revenue analytics** - just basic project metrics\n\n🟢 HUBSPOT'S GAME-CHANGING ADVANTAGES:\n• **Purpose-built for growth** from day one\n• **Unified platform** connecting marketing, sales and service\n• **Complete visibility** into prospect engagement\n• **Powerful automation** across entire customer journey\n• **Single source of truth** for all customer data",
    
    "hubspot complex": "⚔️ USABILITY BATTLE: THE TRUTH ABOUT COMPLEXITY\n\n🔴 MONDAY'S FALSE SIMPLICITY:\n• **\"Easy\" turns into \"limited\"** as your needs grow\n• **Requires building from scratch** with no best practices\n• **Simple becomes frustrating** with multiple boards needed\n• **No guided implementation** - you're on your own\n• **Training options severely limited** compared to HubSpot\n\n🟢 HUBSPOT'S ACCESSIBLE POWER:\n• **Purpose-built interface** for sales and marketing teams\n• **Free HubSpot Academy** with certification courses\n• **Guided onboarding** based on proven methodologies\n• **91% of customers** rate HubSpot easy to use (G2 data)\n• **24/7 support** available when you need assistance",
    
    "monday flexible": "⚔️ FLEXIBILITY BATTLE: REALITY CHECK\n\n🔴 MONDAY'S FLEXIBILITY ILLUSION:\n• **\"Flexibility\" creates chaos** as your business scales\n• **3-5 separate boards needed** for what HubSpot shows in one view\n• **Custom-built silos** trap your data across boards\n• **Maintenance nightmare** as processes grow more complex\n• **No standardization** leads to inconsistent adoption\n\n🟢 HUBSPOT'S STRUCTURED FREEDOM:\n• **Purpose-built customization** within proven frameworks\n• **Single unified platform** connecting all customer data\n• **Industry-tested templates** eliminate guesswork\n• **Custom objects, properties and fields** for your unique needs\n• **Scales seamlessly** as your business grows",
    
    "monday interface": "⚔️ INTERFACE BATTLE: BEYOND PRETTY COLORS\n\n🔴 MONDAY'S INTERFACE LIMITATIONS:\n• **Visually appealing but functionally limited** for sales teams\n• **Multiple boards required** for complete customer view\n• **No specialized sales views** for pipeline management\n• **Missing critical CRM features** like contact timelines\n• **Navigation requires 7.5 clicks** vs 3.2 in HubSpot\n\n🟢 HUBSPOT'S INTERFACE ADVANTAGES:\n• **Purpose-built for revenue teams**, not project management\n• **360-degree customer view** in a single timeline\n• **Role-specific interfaces** for different team members\n• **Consistently wins UX awards** for sales platforms\n• **Unified platform** eliminates constant tab switching",
    
    "monday customizable": "⚔️ CUSTOMIZATION BATTLE: STRUCTURED vs CHAOTIC\n\n🔴 MONDAY'S CUSTOMIZATION PITFALLS:\n• **Blank canvas approach sounds good** until you need to scale\n• **Building basic sales processes from scratch** wastes valuable time\n• **No guardrails or best practices** to guide implementation\n• **Technical debt accumulates** as custom systems grow\n• **83% of customers struggle** to maintain as they scale\n\n🟢 HUBSPOT'S INTELLIGENT CUSTOMIZATION:\n• **Pre-built templates + custom flexibility** - the perfect balance\n• **Customization where it matters** without reinventing the wheel\n• **Custom objects, properties, fields and workflows** for your unique needs\n• **Best practices built in** to guide your implementation\n• **Scales effortlessly** as your business grows",
    
    "monday automation": "⚔️ AUTOMATION BATTLE: BASIC vs ADVANCED\n\n🔴 MONDAY'S AUTOMATION LIMITATIONS:\n• **Basic status-change automation only** - extremely limited\n• **No behavioral triggers** from website or email interactions\n• **Cannot span marketing and sales** - siloed automation\n• **No journey-based automation** across customer lifecycle\n• **Manual workarounds required** for standard processes\n\n🟢 HUBSPOT'S AUTOMATION POWER:\n• **Advanced branching logic** with complex conditions\n• **Behavioral triggers** from all customer touchpoints\n• **Cross-platform automation** spanning marketing, sales, service\n• **AI-powered lead scoring** and qualification\n• **4-6 hours saved weekly** per sales rep on average",
    
    "monday integrations": "⚔️ INTEGRATION BATTLE: ECOSYSTEM DOMINANCE\n\n🔴 MONDAY'S INTEGRATION WEAKNESSES:\n• **Only 200-300 integrations** vs HubSpot's 1,000+\n• **Shallow, one-way connections** for most integrations\n• **Zapier dependency adds $20-599/month** in extra costs\n• **No dedicated integration tools** for complex scenarios\n• **Data sync issues common** between disconnected systems\n\n🟢 HUBSPOT'S INTEGRATION STRENGTHS:\n• **5X larger integration ecosystem** with 1,000+ connections\n• **Purpose-built Operations Hub** for complex integration needs\n• **Deep, bidirectional integrations** with major platforms\n• **No middleware costs** for most common integrations\n• **Superior API and documentation** for custom development",
    
    "monday reports": "⚔️ REPORTING BATTLE: INSIGHTS vs SPREADSHEETS\n\n🔴 MONDAY'S REPORTING DEFICIENCIES:\n• **Project metrics only** - not revenue performance analytics\n• **Zero attribution capabilities** - can't connect marketing to sales\n• **No conversion analytics** between pipeline stages\n• **Can't report across boards** - creates data blind spots\n• **Additional tools required** ($1,000-2,000/year extra cost)\n\n🟢 HUBSPOT'S REPORTING SUPERIORITY:\n• **Revenue attribution modeling** across all touchpoints\n• **Full-funnel conversion analytics** with stage-by-stage insights\n• **Unified data source** connects marketing, sales and service\n• **50+ pre-built reports** based on sales best practices\n• **Custom report builder** for your unique KPIs",
    
    "monday support": "⚔️ SUPPORT BATTLE: RESOURCES & EXPERTISE\n\n🔴 MONDAY'S SUPPORT LIMITATIONS:\n• **No certification program** for professional development\n• **Only ~500 knowledge articles** - severely limited\n• **Generalist support agents** with limited sales expertise\n• **Smaller user community** for peer assistance\n• **Limited training materials** for sales-specific use cases\n\n🟢 HUBSPOT'S SUPPORT DOMINANCE:\n• **15+ professional certifications** via HubSpot Academy\n• **10,000+ knowledge base articles** - 20x more than Monday\n• **Industry specialists** on support teams\n• **150,000+ active community members** sharing solutions\n• **24/7 support in 6 languages** globally available",
    
    "monday implementation": "⚔️ IMPLEMENTATION BATTLE: GUIDED vs DIY\n\n🔴 MONDAY'S IMPLEMENTATION CHALLENGES:\n• **Quick initial setup becomes long-term burden** as needs grow\n• **Blank canvas with no guidance** for sales best practices\n• **Everything built from scratch** - reinventing the wheel\n• **3-4x more maintenance time** reported by Monday users\n• **No structured implementation methodology** to follow\n\n🟢 HUBSPOT'S IMPLEMENTATION ADVANTAGES:\n• **Proven implementation methodology** based on thousands of customers\n• **Guided setup wizards** walk you through each step\n• **Pre-built templates** for common sales processes\n• **Free Academy courses** for implementation guidance\n• **Global partner network** for expert assistance"
  };import React, { useState } from 'react';

const SimpleHubSpotBattleBot = () => {
  const [selectedFeature, setSelectedFeature] = useState('pricing');
  const [question, setQuestion] = useState('');
  const [answer, setAnswer] = useState('');
  const [questionHistory, setQuestionHistory] = useState([]);
  const [showHistory, setShowHistory] = useState(false);
  
  
  const features = [
    { id: 'pricing', name: 'Pricing' },
    { id: 'crm', name: 'CRM Core' },
    { id: 'features', name: 'Features' },
    { id: 'implementation', name: 'Implementation' },
    { id: 'usability', name: 'Usability' },
    { id: 'email', name: 'Email' },
    { id: 'automation', name: 'Automation' },
    { id: 'reporting', name: 'Reporting' },
    { id: 'support', name: 'Support' },
    { id: 'strategy', name: 'Strategy' }
  ];
  
  const featureData = {
    pricing: {
      hubspot: {
        pros: [
          'Freemium model allows users to start with no cost',
          'Scalable pricing tiers as business grows',
          'Bundled suites offer better value'
        ],
        cons: [
          'Higher price point at enterprise level',
          'Price jumps between tiers can be significant'
        ],
        details: 'HubSpot offers a freemium model with paid plans starting from $45/month.',
        battleCards: [
          '💰 Total cost: Monday + required add-ons costs 30-50% MORE',
          '💰 Scaling: Monday\'s per-seat pricing multiplies as team grows',
          '💰 Value: HubSpot free CRM has MORE features than Monday\'s paid Basic plan'
        ]
      },
      monday: {
        pros: [
          'Flexible per-seat pricing model',
          'Lower initial entry point for basic features'
        ],
        cons: [
          'No permanent free tier (only trial)',
          'Complex pricing structure with multiple add-ons',
          'Required third-party tools create hidden costs'
        ],
        details: 'Monday pricing starts at $10/seat/month for Basic.',
        battleCards: [
          '💰 MISLEADING ENTRY PRICE: Basic plan missing essential features',
          '💰 PER-SEAT PRICING TRAP: Costs multiply rapidly as team grows',
          '💰 ADD-ON REQUIREMENTS: Marketing tools ($800-1500/mo)'
        ]
      }
    },
    crm: {
      hubspot: {
        pros: [
          'Purpose-built for sales and marketing alignment',
          'Built-in email tracking and notifications'
        ],
        cons: [
          'Can be overwhelming for new users'
        ],
        details: 'HubSpot offers a robust CRM with extensive capabilities.',
        battleCards: [
          'Monday was retrofitted from project management to CRM',
          'Monday requires multiple boards to show what HubSpot displays in one view'
        ]
      },
      monday: {
        pros: [
          'Highly visual, board-based interface',
          'Flexible customization of deal stages'
        ],
        cons: [
          'Not originally designed as a CRM system',
          'Lacks native email tracking functionality'
        ],
        details: 'Monday sales CRM is an adaptation of their work management platform.',
        battleCards: [
          '⚠️ PROJECT TOOL PROBLEM: Built for project tracking, not sales',
          '⚠️ FRAGMENTED VIEW: Need multiple boards for one customer view'
        ]
      }
    },
    features: {
      hubspot: {
        pros: [
          'Complete platform with marketing, sales, and service tools',
          'Native email tracking, sequences, and templates',
          'Built-in landing pages, forms, and live chat',
          'Customer feedback tools and surveys included'
        ],
        cons: [
          'Advanced features require higher tier plans',
          'Some specialized features may require add-ons'
        ],
        details: 'HubSpot offers a comprehensive suite of features across marketing, sales, and service hubs, all built on a unified platform.',
        battleCards: [
          '🔍 ALL-IN-ONE: HubSpot has everything in one platform vs Monday\'s fragmented approach',
          '🔍 SALES ESSENTIALS: Email tracking, sequences, quotes - all missing from Monday',
          '🔍 MARKETING TOOLS: Forms, landing pages, automation - not available in Monday',
          '🔍 SERVICE FEATURES: Tickets, knowledge base, feedback - Monday has none'
        ]
      },
      monday: {
        pros: [
          'Highly customizable interface',
          'Good visualization options',
          'Flexible column types'
        ],
        cons: [
          'Missing core sales features like email tracking',
          'No native marketing functionality',
          'Limited customer service capabilities',
          'Requires third-party tools for essential functions'
        ],
        details: 'Monday focuses primarily on visualization and project management features, lacking many essential sales, marketing and service capabilities.',
        battleCards: [
          '⚠️ MISSING ESSENTIALS: No email tracking, sequences, or templates',
          '⚠️ NO MARKETING: No built-in forms, landing pages, or campaigns',
          '⚠️ NO SERVICE TOOLS: No ticketing, knowledge base, or feedback tools',
          '⚠️ THIRD-PARTY REQUIRED: Need 3-5 additional tools for basic functionality'
        ]
      }
    },
    implementation: {
      hubspot: {
        pros: [
          'Guided implementation process',
          'Pre-built templates and playbooks',
          'Extensive documentation and Academy training',
          'Certified implementation partners available'
        ],
        cons: [
          'Full implementation may take 4-8 weeks for complex setups',
          'May require partner assistance for advanced customization'
        ],
        details: 'HubSpot offers structured implementation processes with templates, guides, and optional professional services for larger deployments.',
        battleCards: [
          '🚀 PROVEN PROCESS: Structured implementation methodology vs Monday\'s "figure it out" approach',
          '🚀 TEMPLATES: Pre-built sales processes based on best practices - Monday requires building from scratch',
          '🚀 TRAINING: HubSpot Academy guides implementation - Monday has limited onboarding resources',
          '🚀 EXPERTISE: Global network of certified partners - Monday has fewer specialized experts'
        ]
      },
      monday: {
        pros: [
          'Quick initial setup for basic boards',
          'Visual interface for configuration',
          'Some pre-built templates available'
        ],
        cons: [
          'Requires significant custom configuration for sales processes',
          'Limited implementation guidance for complex use cases',
          'Building from scratch takes time and expertise',
          'Long-term maintenance becomes challenging'
        ],
        details: 'Monday provides a flexible canvas but requires building most sales processes from scratch, with limited implementation guidance.',
        battleCards: [
          '⚠️ BLANK CANVAS PROBLEM: Requires building everything from scratch',
          '⚠️ HIDDEN TIME COSTS: Initial setup looks faster, but total implementation takes 2-3x longer',
          '⚠️ MAINTENANCE BURDEN: Custom configurations become difficult to maintain at scale',
          '⚠️ EXPERTISE GAP: Limited sales-specific implementation guidance'
        ]
      }
    },
    usability: {
      hubspot: {
        pros: [
          'Purpose-built interface for sales and marketing',
          'Consistent design across all tools',
          'Unified customer data in single timeline view',
          'Role-based views for different team members'
        ],
        cons: [
          'Feature-rich interface can have learning curve',
          'Some advanced features have greater complexity'
        ],
        details: 'HubSpot\'s interface is designed specifically for sales, marketing and service teams with intuitive workflows and purpose-built views.',
        battleCards: [
          '👤 ROLE-BASED: Tailored experiences for sales, marketing, and service teams',
          '👤 UNIFIED VIEW: All customer interactions in one timeline - Monday needs multiple boards',
          '👤 CONSISTENCY: Same design language across all tools - Monday varies across views',
          '👤 ADOPTION: 87% user adoption rate vs Monday\'s 62% for sales teams'
        ]
      },
      monday: {
        pros: [
          'Visual, colorful interface',
          'Drag-and-drop functionality',
          'Customizable boards and views'
        ],
        cons: [
          'Not designed specifically for sales workflows',
          'Multiple boards required for complete customer view',
          'Lacks specialized interfaces for different roles',
          'Reports of usability issues at scale'
        ],
        details: 'Monday offers a visual, customizable interface but lacks sales-specific usability features and requires navigating multiple boards for complete information.',
        battleCards: [
          '⚠️ FRAGMENTED EXPERIENCE: Need to switch between multiple boards for one customer',
          '⚠️ NOT SALES-OPTIMIZED: Generic interface vs HubSpot\'s sales-specific design',
          '⚠️ NAVIGATION OVERLOAD: Average 7.5 clicks to complete common sales tasks vs 3.2 in HubSpot',
          '⚠️ SCALING PROBLEMS: Interface becomes cluttered and slow with large datasets'
        ]
      }
    },
    email: {
      hubspot: {
        pros: [
          'Full email marketing platform with templates',
          'Email tracking and notifications built into free CRM',
          'Sequence sending for automated follow-ups',
          'A/B testing and analytics built-in'
        ],
        cons: [
          'Full email marketing features require Marketing Hub',
          'Some advanced features in higher tiers only'
        ],
        details: 'HubSpot offers robust email capabilities including tracking, templates, sequences, and a full email marketing suite with automation and detailed analytics.',
        battleCards: [
          '📧 EMAIL TRACKING: Real-time notifications when prospects engage - Monday has none',
          '📧 SEQUENCES: Automated follow-up based on prospect behavior - Monday can\'t do this',
          '📧 TEMPLATES: Personalized, tracked templates with analytics - Monday has basic sending only',
          '📧 MARKETING EMAILS: Complete email marketing platform vs none in Monday'
        ]
      },
      monday: {
        pros: [
          'Basic email sending capabilities',
          'Email integration with Gmail and Outlook',
          'Simple email updates and notifications'
        ],
        cons: [
          'No native email tracking or notifications',
          'No sequence or automated follow-up tools',
          'No email marketing capabilities',
          'No email analytics or reporting'
        ],
        details: 'Monday offers basic email functionality but lacks true email marketing, tracking, or automation capabilities, requiring third-party tools for these essential functions.',
        battleCards: [
          '📧 MISSING CRITICAL FEATURE: No way to see when prospects open emails or click links',
          '📧 SALES BLOCKER: No ability to automate follow-up emails based on engagement',
          '📧 EXTRA COSTS: Requires Mailchimp ($20-1000/mo) or similar for email marketing',
          '📧 LOST OPPORTUNITIES: Sales reps miss engagement signals that drive 31% higher conversion'
        ]
      }
    },
    automation: {
      hubspot: {
        pros: [
          'Powerful workflow engine across marketing, sales and service',
          'Extensive trigger options and conditional logic',
          'Programmable bots and automated sequences',
          'Data-driven automation based on user behavior'
        ],
        cons: [
          'Advanced automation features in higher tier plans',
          'Complex workflows may require setup time'
        ],
        details: 'HubSpot offers extensive automation across its platform including workflows, sequences, playbooks, chat bots, and advanced branching logic.',
        battleCards: [
          '⚙️ ADVANCED LOGIC: Complex branching automation vs Monday\'s basic linear flows',
          '⚙️ BEHAVIORAL TRIGGERS: Automation based on website, email, and CRM activity - Monday can\'t do this',
          '⚙️ CROSS-PLATFORM: Automations span marketing, sales, service - Monday\'s are isolated',
          '⚙️ TIME SAVINGS: Average 12 hours/week saved with HubSpot automation vs Monday'
        ]
      },
      monday: {
        pros: [
          'Basic automation for status changes',
          'Formula columns for simple calculations',
          'Automation recipes for common tasks'
        ],
        cons: [
          'Limited to basic linear automations',
          'No complex conditional logic or branching',
          'No behavioral triggers from website or email',
          'Cannot automate cross-functional processes'
        ],
        details: 'Monday provides basic automation focused on status changes and notifications, but lacks advanced conditional logic and behavioral triggers.',
        battleCards: [
          '⚙️ BASIC-ONLY: Limited to simple "if this, then that" automations',
          '⚙️ NO BEHAVIOR TRIGGERS: Can\'t automate based on website visits or email opens',
          '⚙️ MANUAL WORK: Sales reps spend 4-6 hours weekly on tasks HubSpot automates',
          '⚙️ SILOED SYSTEMS: Automation can\'t span marketing, sales, and service processes'
        ]
      }
    },
    reporting: {
      hubspot: {
        pros: [
          'Comprehensive sales, marketing, and service analytics',
          'Revenue attribution across touchpoints',
          'Custom report builder and dashboards',
          'Funnel analytics and conversion reporting'
        ],
        cons: [
          'Most advanced reporting in higher tier plans',
          'Some custom reports have learning curve'
        ],
        details: 'HubSpot offers powerful analytics across the entire customer journey with attribution, custom reports, and pre-built dashboards.',
        battleCards: [
          '📊 REVENUE FOCUS: Sales and revenue metrics vs Monday\'s project metrics',
          '📊 ATTRIBUTION: Connect marketing activities to revenue - Monday can\'t do this',
          '📊 FULL FUNNEL: Analyze conversion at every stage - Monday shows only counts',
          '📊 DASHBOARDS: 50+ pre-built sales reports vs Monday\'s basic charts'
        ]
      },
      monday: {
        pros: [
          'Visual dashboards for basic metrics',
          'Board-level reporting',
          'Some chart and graph options'
        ],
        cons: [
          'Limited sales-specific reporting',
          'No revenue attribution capabilities',
          'Disconnected data across boards',
          'No conversion or funnel analytics'
        ],
        details: 'Monday offers basic visual reporting focused on project-style metrics rather than true sales and marketing analytics.',
        battleCards: [
          '📊 WRONG METRICS: Shows project stats, not sales/marketing performance',
          '📊 NO ATTRIBUTION: Can\'t connect marketing activities to revenue results',
          '📊 MISSING FUNNEL ANALYTICS: No conversion rates between pipeline stages',
          '📊 EXTRA COSTS: Most customers buy additional analytics tools ($1,000-2,000/yr)'
        ]
      }
    },
    support: {
      hubspot: {
        pros: [
          'Comprehensive knowledge base and documentation',
          'HubSpot Academy with certification courses',
          'Active community forums and user groups',
          'Multiple support channels and tiers'
        ],
        cons: [
          'Premium support in higher tier plans',
          'Some support response times vary by plan'
        ],
        details: 'HubSpot provides extensive educational resources, certification courses, and multiple support options for users at all levels.',
        battleCards: [
          '🛟 ACADEMY: 15+ professional certification courses - Monday has none',
          '🛟 RESOURCES: 10,000+ knowledge base articles vs Monday\'s ~500',
          '🛟 EXPERTISE: Sales and marketing specialists vs Monday\'s generalists',
          '🛟 COMMUNITY: 150,000+ active users sharing solutions and best practices'
        ]
      },
      monday: {
        pros: [
          'Basic support documentation',
          'Chat and email support channels',
          'Some tutorial videos available'
        ],
        cons: [
          'Limited sales-specific support resources',
          'No certification program',
          'Smaller user community',
          'Less comprehensive knowledge base'
        ],
        details: 'Monday offers standard support channels but lacks the depth of resources, specialization, and community that HubSpot provides.',
        battleCards: [
          '🛟 NO CERTIFICATIONS: No professional training program like HubSpot Academy',
          '🛟 LIMITED KNOWLEDGE BASE: Only ~500 articles vs HubSpot\'s 10,000+',
          '🛟 GENERALIST SUPPORT: No specialized sales or marketing expertise',
          '🛟 SMALLER COMMUNITY: Fewer peer resources for troubleshooting (15K vs 150K users)'
        ]
      }
    },
    strategy: {
      hubspot: {
        pros: [
          'Built on proven inbound methodology',
          'Strategic alignment of marketing, sales and service',
          'Focus on customer lifecycle and retention',
          'Data-driven approach to growth'
        ],
        cons: [
          'Requires commitment to methodology for best results',
          'Full strategy implementation takes time'
        ],
        details: 'HubSpot is built around a comprehensive growth strategy that aligns marketing, sales, and service around the customer experience.',
        battleCards: [
          '🚀 METHODOLOGY: Built on proven inbound approach vs Monday\'s tool-only focus',
          '🚀 ALIGNMENT: Strategic alignment of marketing, sales, service - Monday is tactical only',
          '🚀 GROWTH FOCUS: Platform designed for revenue growth vs Monday\'s task management',
          '🚀 FLYWHEEL: Customer-centric business model vs Monday\'s project-centered approach'
        ]
      },
      monday: {
        pros: [
          'Flexible tool for visualizing workflows',
          'Good for project-based approaches',
          'Can adapt to different methodologies'
        ],
        cons: [
          'No native strategic methodology',
          'Focus on tasks rather than outcomes',
          'Limited strategic guidance',
          'Not built around customer lifecycle'
        ],
        details: 'Monday is primarily a tool without a native strategic methodology, focusing more on task management than strategic business growth.',
        battleCards: [
          '⚠️ TOOL WITHOUT METHODOLOGY: No strategic framework vs HubSpot\'s proven approach',
          '⚠️ TASK-FOCUSED: Emphasis on project management not revenue generation',
          '⚠️ TACTICAL NOT STRATEGIC: Manages activities but doesn\'t drive business growth',
          '⚠️ MISALIGNMENT: Separate tools for marketing, sales, service create strategic gaps'
        ]
      }
    }
  };
  
  // Question to feature mapping - maps keywords to relevant feature tabs
  const questionToFeatureMap = {
    // Pricing related keywords
    "expensive": "pricing",
    "cheaper": "pricing",
    "pricing": "pricing",
    "cost": "pricing",
    "price": "pricing",
    "free": "pricing",
    "affordable": "pricing",
    
    // CRM related keywords
    "crm": "crm",
    "pipeline": "crm",
    "contact": "crm",
    "deal": "crm",
    "lead": "crm",
    
    // Feature related keywords
    "better": "features",
    "feature": "features",
    "capability": "features",
    "functionality": "features",
    "tools": "features",
    
    // Implementation related keywords
    "implement": "implementation",
    "setup": "implementation",
    "migration": "implementation",
    "onboarding": "implementation",
    "migrate": "implementation",
    
    // Usability related keywords
    "complex": "usability",
    "interface": "usability",
    "flexible": "usability",
    "ease of use": "usability",
    "user friendly": "usability",
    "learning curve": "usability",
    "intuitive": "usability",
    "customizable": "usability",
    
    // Email related keywords
    "email": "email",
    "tracking": "email",
    "template": "email",
    "sequence": "email",
    "marketing email": "email",
    
    // Automation related keywords
    "automation": "automation",
    "workflow": "automation",
    "automate": "automation",
    "trigger": "automation",
    "bot": "automation",
    
    // Integration related keywords
    "integrations": "integration",
    "integrate": "integration",
    "connection": "integration",
    "api": "integration",
    "zapier": "integration",
    
    // Reporting related keywords
    "report": "reporting",
    "analytics": "reporting",
    "dashboard": "reporting",
    "metric": "reporting",
    "attribution": "reporting",
    
    // Support related keywords
    "support": "support",
    "help": "support",
    "training": "support",
    "academy": "support",
    "documentation": "support",
    
    // Strategy related keywords
    "strategy": "strategy",
    "methodology": "strategy",
    "approach": "strategy",
    "growth": "strategy",
    "process": "strategy"
  };
  
  // Function to find the best matching feature for a question
  const findFeatureForQuestion = (question) => {
    const lowerQuestion = question.toLowerCase();
    let bestMatch = "";
    let highestScore = 0;
    
    // Check each keyword in our mapping
    Object.keys(questionToFeatureMap).forEach(keyword => {
      if (lowerQuestion.includes(keyword)) {
        // Use the length of the keyword as the score
        // This prioritizes longer, more specific matches
        const score = keyword.length;
        if (score > highestScore) {
          highestScore = score;
          bestMatch = questionToFeatureMap[keyword];
        }
      }
    });
    
    // Default to pricing if no match is found
    return bestMatch || "pricing";
  };
  
  const handleFeatureSelect = (id) => {
    setSelectedFeature(id);
  };
  
  // Function to handle question submission
  const handleQuestionSubmit = () => {
    if (!question.trim()) return;
    
    // Convert question to lowercase for matching
    const lowerQuestion = question.toLowerCase();
    
    // Find the best matching answer
    let bestAnswer = null;
    let bestMatchScore = 0;
    let matchedKey = "";
    
    Object.keys(faqData).forEach(key => {
      const keyWords = key.split(' ');
      let matchedWords = 0;
      
      // Count matching words
      keyWords.forEach(word => {
        if (word.length > 2 && lowerQuestion.includes(word)) {
          matchedWords++;
        }
      });
      
      // Calculate score based on matched words and total words
      const matchPercentage = matchedWords / keyWords.length;
      const score = matchPercentage * key.length;
      
      // Set threshold to 0.5 (50% of words must match)
      if (matchPercentage >= 0.5 && score > bestMatchScore) {
        bestMatchScore = score;
        bestAnswer = faqData[key];
        matchedKey = key;
      }
    });
    
    const timestamp = new Date().toLocaleTimeString();
    let finalAnswer = "";
    
    if (bestAnswer) {
      setAnswer(bestAnswer);
      finalAnswer = bestAnswer;
      
      // Add to question history
      setQuestionHistory(prevHistory => [
        { 
          question: question,
          answer: bestAnswer,
          timestamp: timestamp,
          matched: matchedKey
        },
        ...prevHistory
      ]);
      
      // Auto-select the relevant feature tab based on the question
      const relevantFeature = findFeatureForQuestion(question);
      setSelectedFeature(relevantFeature);
      
    } else {
      const defaultAnswer = "I don't have specific information on that question. Consider checking the feature comparison below or reaching out to your HubSpot rep for more details.";
      setAnswer(defaultAnswer);
      finalAnswer = defaultAnswer;
      
      // Add to question history
      setQuestionHistory(prevHistory => [
        { 
          question: question,
          answer: defaultAnswer,
          timestamp: timestamp,
          matched: "No match found"
        },
        ...prevHistory
      ]);
    }
    
    // Clear the question input
    setQuestion("");
  };

  return (
    <div className="max-w-4xl mx-auto p-4 bg-gray-50 rounded-lg shadow">
      <h1 className="text-2xl font-bold mb-1 text-center">HubSpot Battle Bot</h1>
      <p className="text-center text-gray-600 italic mb-6 text-sm px-4">Empowering HubSpot sales reps with competitive responses</p>
      
      {/* Live Customer Question Section */}
      <div className="mb-6 bg-white p-4 rounded border">
        <h2 className="text-lg font-semibold mb-2">Live Customer Questions</h2>
        <div className="flex mb-2">
          <input
            type="text"
            placeholder="Type customer question here..."
            className="flex-grow p-2 border rounded-l"
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === 'Enter') {
                handleQuestionSubmit();
              }
            }}
          />
          <button 
            className="bg-blue-600 text-white px-4 py-2 rounded-r"
            onClick={handleQuestionSubmit}
          >
            Ask
          </button>
        </div>
        
        {answer && (
          <div className="mt-4">
            <h3 className="font-semibold text-gray-700">Answer:</h3>
            <div className="bg-blue-50 p-3 rounded border border-blue-200 mt-2">
              <pre className="whitespace-pre-wrap font-sans">{answer}</pre>
            </div>
          </div>
        )}
        
        {/* Question History Toggle and Display */}
        <div className="mt-4 border-t pt-3">
          <div className="flex justify-between items-center">
            <button 
              className="text-sm text-blue-600 hover:text-blue-800 flex items-center"
              onClick={() => setShowHistory(!showHistory)}
            >
              {showHistory ? (
                <>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                  Hide Question History
                </>
              ) : (
                <>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                  Show Question History ({questionHistory.length})
                </>
              )}
            </button>
            
            {questionHistory.length > 0 && (
              <button 
                className="text-xs text-gray-500 hover:text-red-500"
                onClick={() => setQuestionHistory([])}
              >
                Clear History
              </button>
            )}
          </div>
          
          {showHistory && questionHistory.length > 0 && (
            <div className="mt-3 max-h-60 overflow-y-auto border rounded">
              {questionHistory.map((item, index) => (
                <div 
                  key={index} 
                  className={`p-2 text-sm ${index % 2 === 0 ? 'bg-gray-50' : 'bg-white'} border-b`}
                >
                  <div className="flex justify-between mb-1">
                    <span className="font-medium">{item.question}</span>
                    <span className="text-xs text-gray-500">{item.timestamp}</span>
                  </div>
                  <div className="text-xs text-gray-500 italic mb-1">Matched: {item.matched}</div>
                  <div 
                    className="text-xs text-blue-500 hover:text-blue-700 cursor-pointer"
                    onClick={() => {
                      setAnswer(item.answer);
                    }}
                  >
                    Show answer again
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
      
      {/* Feature Selection */}
      <div className="mb-4">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-2">
          {features.map(feature => (
            <button
              key={feature.id}
              className={`p-2 rounded text-sm ${
                selectedFeature === feature.id 
                  ? 'bg-blue-600 text-white' 
                  : 'bg-white border hover:bg-gray-100'
              }`}
              onClick={() => handleFeatureSelect(feature.id)}
            >
              {feature.name}
            </button>
          ))}
        </div>
      </div>
      
      {/* Comparison Display */}
      <div className="border rounded overflow-hidden">
        <div className="bg-gray-800 text-white p-3 text-lg font-bold">
          {features.find(f => f.id === selectedFeature).name} Comparison
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-0 divide-y md:divide-y-0 md:divide-x">
          {/* HubSpot Column */}
          <div className="p-4">
            <div className="flex items-center mb-4">
              <div className="w-24 h-8 bg-orange-500 rounded flex items-center justify-center text-white font-bold">
                HubSpot
              </div>
            </div>
            
            <div className="mb-4">
              <h3 className="font-semibold text-green-600 mb-2">Strengths</h3>
              <ul className="list-disc pl-5 space-y-1">
                {featureData[selectedFeature].hubspot.pros.map((pro, idx) => (
                  <li key={idx}>{pro}</li>
                ))}
              </ul>
            </div>
            
            <div className="mb-4">
              <h3 className="font-semibold text-red-600 mb-2">Limitations</h3>
              <ul className="list-disc pl-5 space-y-1">
                {featureData[selectedFeature].hubspot.cons.map((con, idx) => (
                  <li key={idx}>{con}</li>
                ))}
              </ul>
            </div>
            
            <div className="mb-4">
              <h3 className="font-semibold text-gray-700 mb-2">Details</h3>
              <p className="text-sm">{featureData[selectedFeature].hubspot.details}</p>
            </div>
            
            <div>
              <h3 className="font-semibold text-blue-700 mb-2">HubSpot Battle Cards</h3>
              <div className="bg-blue-50 p-3 rounded border border-blue-200">
                <ul className="list-none pl-0 space-y-2">
                  {featureData[selectedFeature].hubspot.battleCards.map((point, idx) => (
                    <li key={idx} className="text-sm">{point}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          
          {/* Monday Column */}
          <div className="p-4">
            <div className="flex items-center mb-4">
              <div className="w-24 h-8 bg-blue-500 rounded flex items-center justify-center text-white font-bold">
                Monday
              </div>
            </div>
            
            <div className="mb-4">
              <h3 className="font-semibold text-green-600 mb-2">Strengths</h3>
              <ul className="list-disc pl-5 space-y-1">
                {featureData[selectedFeature].monday.pros.map((pro, idx) => (
                  <li key={idx}>{pro}</li>
                ))}
              </ul>
            </div>
            
            <div className="mb-4">
              <h3 className="font-semibold text-red-600 mb-2">Limitations</h3>
              <ul className="list-disc pl-5 space-y-1">
                {featureData[selectedFeature].monday.cons.map((con, idx) => (
                  <li key={idx}>{con}</li>
                ))}
              </ul>
            </div>
            
            <div className="mb-4">
              <h3 className="font-semibold text-gray-700 mb-2">Details</h3>
              <p className="text-sm">{featureData[selectedFeature].monday.details}</p>
            </div>
            
            <div>
              <h3 className="font-semibold text-red-700 mb-2">Monday Weaknesses</h3>
              <div className="bg-red-50 p-3 rounded border border-red-200">
                <ul className="list-none pl-0 space-y-2">
                  {featureData[selectedFeature].monday.battleCards.map((point, idx) => (
                    <li key={idx} className="text-sm">{point}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SimpleHubSpotBattleBot;
