// CompetitiveBattleBot.jsx
const CompetitiveBattleBot = () => {
  const [selectedFeature, setSelectedFeature] = React.useState('');
  const [searchTerm, setSearchTerm] = React.useState('');
  const [question, setQuestion] = React.useState('');
  const [answer, setAnswer] = React.useState('');

  // Comprehensive feature comparison data
  const featureData = {
    'pricing': {
      title: 'Pricing',
      hubspot: {
        pros: [
          'Freemium model allows users to start with no cost',
          'Scalable pricing tiers as business grows',
          'Bundled suites offer better value for full platform users',
          'True platform approach reduces total tech stack costs',
          'ROI-focused design with built-in revenue acceleration tools'
        ],
        cons: [
          'Higher price point at enterprise level',
          'Additional costs for some advanced features',
          'Price jumps between tiers can be significant'
        ],
        details: 'HubSpot offers a freemium model with paid plans starting from $45/month for Starter, $800/month for Professional, and $3,200/month for Enterprise (Sales Hub pricing). When evaluating total cost of ownership, consider that HubSpot replaces 5-7 point solutions that would cost significantly more when combined.',
        battleCards: [
          'While Pipedrive appears cheaper upfront, most customers end up spending 30-50% more on additional tools',
          'HubSpot free CRM never expires and includes core features Pipedrive charges for',
          'The average HubSpot customer experiences 3.4x ROI within the first year according to Forrester Research',
          'Unlike Pipedrive, HubSpot bundled approach eliminates integration costs and data silos',
          'Pipedrive charges extra for many features included in standard HubSpot plans',
          'HubSpot growth-oriented pricing allows startups to begin for free and scale without painful migrations'
        ]
      },
      pipedrive: {
        pros: [
          'More affordable entry point for paid plans',
          'Straightforward per-user pricing model',
          'No long-term contracts required on most plans'
        ],
        cons: [
          'No permanent free tier (only trial)',
          'Fewer bundled features compared to HubSpot',
          'Add-ons can increase total cost significantly',
          'Required third-party tools create hidden costs',
          'Limited value as organization scales and needs expand'
        ],
        details: 'Pipedrive pricing starts at $14.90/user/month for Essential, $27.90/user/month for Advanced, $49.90/user/month for Professional, and $99/user/month for Enterprise. However, most businesses require additional tools for marketing automation, customer service, advanced reporting, and other functionality HubSpot includes natively.',
        battleCards: []
      }
    },
    'crm-core': {
      title: 'CRM Core Functionality',
      hubspot: {
        pros: [
          'Highly customizable contact and deal records',
          'Powerful workflow automation even in free tier',
          'Superior data quality tools and duplicate management'
        ],
        cons: [
          'Can be overwhelming for new users due to extensive options',
          'Advanced automation requires higher tier plans',
          'Steeper learning curve for full utilization'
        ],
        details: 'HubSpot offers a robust CRM with custom objects, properties, and extensive relationship mapping abilities. The platform has advanced segmentation and forecasting capabilities.',
        battleCards: []
      },
      pipedrive: {
        pros: [
          'Intuitive, visual pipeline management',
          'Easier learning curve for sales teams',
          'Strong activity tracking and reminder system'
        ],
        cons: [
          'More limited customization options',
          'Fewer native integrations than HubSpot',
          'Less robust reporting capabilities'
        ],
        details: 'Pipedrive is designed with a strong focus on pipeline management with visual deal tracking, customizable sales stages, and activity-based reminders.',
        battleCards: []
      }
    },
    // Additional feature data (keeping a few for brevity)
    'email': {
      title: 'Email Capabilities',
      hubspot: {
        pros: [
          'Full email marketing platform with templates and automation',
          'Email health analytics and deliverability tools',
          'Advanced personalization options'
        ],
        cons: [
          'Email marketing features require Marketing Hub',
          'Email template builder has some flexibility limitations',
          'Send limits on lower tier plans'
        ],
        details: 'HubSpot offers robust email capabilities including sequence sending, templates, tracking, and a full email marketing suite in Marketing Hub with A/B testing and analytics.',
        battleCards: []
      },
      pipedrive: {
        pros: [
          'Native email sync with two-way integration',
          'Email tracking and templates included in core product',
          'Simple, straightforward email scheduler'
        ],
        cons: [
          'Limited email marketing capabilities compared to HubSpot',
          'Fewer advanced personalization options',
          'No native email deliverability tools'
        ],
        details: 'Pipedrive offers email integration, templates, and tracking but lacks a full email marketing solution. For advanced email marketing, Pipedrive customers typically need to integrate with third-party tools.',
        battleCards: []
      }
    },
    'support': {
      title: 'Customer Support & Resources',
      hubspot: {
        pros: [
          'Extensive knowledge base and academy training',
          'Active user community and support forums',
          'Regular webinars and educational content'
        ],
        cons: [
          'Premium support requires higher tier plans',
          'Phone support limited to higher tiers',
          'Response times can vary during peak periods'
        ],
        details: 'HubSpot offers tiered support based on plan level, extensive documentation, HubSpot Academy certification courses, and an active user community.',
        battleCards: []
      },
      pipedrive: {
        pros: [
          'Responsive chat and email support on all plans',
          'Good knowledge base with tutorials',
          'Dedicated support for enterprise customers'
        ],
        cons: [
          'Smaller user community than HubSpot',
          'Fewer educational resources and certifications',
          'Less extensive documentation'
        ],
        details: 'Pipedrive provides 24/7 chat and email support on all plans, with phone support available at higher tiers. They offer a knowledge base and tutorials for self-service.',
        battleCards: []
      }
    }
  };

  // List of all features for the dropdown
  const allFeatures = Object.keys(featureData).map(key => ({
    id: key,
    title: featureData[key].title
  }));

  // Filter features based on search term
  const filteredFeatures = allFeatures.filter(feature => 
    feature.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Handle feature selection
  const handleFeatureSelect = (featureId) => {
    setSelectedFeature(featureId);
  };
  
  // FAQ data for common customer questions
  const faqData = {
    // Pricing questions
    "is hubspot expensive": "While HubSpot's per-user price may appear higher than Pipedrive initially, most customers experience lower total cost of ownership because HubSpot includes functionality that would require multiple add-ons or third-party tools with Pipedrive. HubSpot also offers a permanent free tier to get started with no upfront cost.",
    
    "how much does hubspot cost": "HubSpot offers a free tier with basic CRM features, with paid plans starting at $45/month for Starter, $800/month for Professional, and $3,200/month for Enterprise (Sales Hub pricing). The exact cost depends on which hubs you need (Sales, Marketing, Service, CMS, Operations) and how many users you have.",
    
    "is pipedrive cheaper": "Pipedrive has a lower entry-point price (starting at $14.90/user/month), but most businesses end up spending significantly more on additional integrations and tools to achieve the same functionality that comes standard with HubSpot. When evaluating total cost, consider all the tools you'll need to run your sales and marketing operations.",
    
    // Integration questions
    "does hubspot integrate with": "HubSpot offers over 1,000 native integrations through its marketplace, including popular tools like Gmail, Outlook, Zoom, Slack, and most major CRMs, ERPs, and billing systems. If there isn't a native integration, HubSpot provides a robust API for custom integrations.",
    
    // Just a few FAQ items for brevity
    "why choose hubspot over pipedrive": "HubSpot offers a more comprehensive platform that unifies marketing, sales, service, and content management, while Pipedrive focuses primarily on sales. HubSpot provides stronger automation, more detailed analytics, superior email marketing capabilities, and a much larger integration ecosystem, making it a better choice for growing businesses that want a unified platform versus multiple disconnected tools."
  };
  
  // Function to handle question submission
  const handleQuestionSubmit = () => {
    if (!question.trim()) return;
    
    // Convert question to lowercase for matching
    const lowerQuestion = question.toLowerCase();
    
    // Find the best matching answer
    let bestAnswer = null;
    let bestMatchScore = 0;
    
    Object.keys(faqData).forEach(key => {
      if (lowerQuestion.includes(key)) {
        // If exact match found, prioritize longer matches
        const matchScore = key.length;
        if (matchScore > bestMatchScore) {
          bestMatchScore = matchScore;
          bestAnswer = faqData[key];
        }
      }
    });
    
    if (bestAnswer) {
      setAnswer(bestAnswer);
    } else {
      // Default response if no match found
      setAnswer("I don't have specific information on that question. Consider checking the feature comparison below or reaching out to your HubSpot rep for more details.");
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-4 bg-gray-50 rounded-lg shadow">
      <h1 className="text-2xl font-bold mb-6 text-center">HubSpot vs Pipedrive Comparison Tool</h1>
      
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
            onKeyPress={(e) => {
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
              <p>{answer}</p>
            </div>
          </div>
        )}
      </div>
      
      {/* Search and Selection */}
      <div className="mb-6">
        <input
          type="text"
          placeholder="Search features..."
          className="w-full p-2 border rounded mb-2"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2">
          {filteredFeatures.map(feature => (
            <button
              key={feature.id}
              className={`p-2 rounded text-sm ${
                selectedFeature === feature.id 
                  ? 'bg-blue-600 text-white' 
                  : 'bg-white border hover:bg-gray-100'
              }`}
              onClick={() => handleFeatureSelect(feature.id)}
            >
              {feature.title}
            </button>
          ))}
        </div>
      </div>
      
      {/* Comparison Display */}
      {selectedFeature && (
        <div className="border rounded overflow-hidden">
          <div className="bg-gray-800 text-white p-3 text-lg font-bold">
            {featureData[selectedFeature].title} Comparison
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
              
              {featureData[selectedFeature].hubspot.battleCards && featureData[selectedFeature].hubspot.battleCards.length > 0 && (
                <div>
                  <h3 className="font-semibold text-blue-700 mb-2">Competitive Battle Cards</h3>
                  <div className="bg-blue-50 p-3 rounded border border-blue-200">
                    <ul className="list-disc pl-5 space-y-2">
                      {featureData[selectedFeature].hubspot.battleCards.map((point, idx) => (
                        <li key={idx} className="text-sm">{point}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              )}
            </div>
            
            {/* Pipedrive Column */}
            <div className="p-4">
              <div className="flex items-center mb-4">
                <div className="w-24 h-8 bg-green-600 rounded flex items-center justify-center text-white font-bold">
                  Pipedrive
                </div>
              </div>
              
              <div className="mb-4">
                <h3 className="font-semibold text-green-600 mb-2">Strengths</h3>
                <ul className="list-disc pl-5 space-y-1">
                  {featureData[selectedFeature].pipedrive.pros.map((pro, idx) => (
                    <li key={idx}>{pro}</li>
                  ))}
                </ul>
              </div>
              
              <div className="mb-4">
                <h3 className="font-semibold text-red-600 mb-2">Limitations</h3>
                <ul className="list-disc pl-5 space-y-1">
                  {featureData[selectedFeature].pipedrive.cons.map((con, idx) => (
                    <li key={idx}>{con}</li>
                  ))}
                </ul>
              </div>
              
              <div>
                <h3 className="font-semibold text-gray-700 mb-2">Details</h3>
                <p className="text-sm">{featureData[selectedFeature].pipedrive.details}</p>
              </div>
              
              {featureData[selectedFeature].pipedrive.battleCards && featureData[selectedFeature].pipedrive.battleCards.length > 0 && (
                <div>
                  <h3 className="font-semibold text-blue-700 mb-2">Competitive Battle Cards</h3>
                  <div className="bg-blue-50 p-3 rounded border border-blue-200">
                    <ul className="list-disc pl-5 space-y-2">
                      {featureData[selectedFeature].pipedrive.battleCards.map((point, idx) => (
                        <li key={idx} className="text-sm">{point}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CompetitiveBattleBot;