import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const TechShowcase = () => {
  const [activeTab, setActiveTab] = useState('javascript');

  const codeExamples = {
    javascript: `// Get latest Sui blocks
const response = await fetch('https://api.surflux.dev/v1/blocks', {
  headers: {
    'Authorization': 'Bearer YOUR_API_KEY',
    'Content-Type': 'application/json'
  }
});

const blocks = await response.json();
console.log('Latest blocks:', blocks);

// Query NFT data
const nftResponse = await surflux.query({
  method: 'sui_getNFTs',
  params: {
    owner: '0x1234567890abcdef...',
    collection: 'SuiFrens'
  }
});`,
    python: `import requests

# Get latest Sui transactions
url = "https://api.surflux.dev/v1/transactions"
headers = {
    "Authorization": "Bearer YOUR_API_KEY",
    "Content-Type": "application/json"
}

response = requests.get(url, headers=headers)
transactions = response.json()

print(f"Found {len(transactions)} transactions")

# Query specific object
object_data = surflux.get_object(
    object_id="0xabcdef1234567890..."
)`,
    curl: `# Get Sui network status
curl -X GET "https://api.surflux.dev/v1/status" \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -H "Content-Type: application/json"

# Query transaction by digest
curl -X POST "https://api.surflux.dev/v1/query" \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{
    "method": "sui_getTransactionBlock",
    "params": ["TRANSACTION_DIGEST"]
  }'`
  };

  const tabs = [
    { id: 'javascript', label: 'JavaScript', lang: 'js' },
    { id: 'python', label: 'Python', lang: 'python' },
    { id: 'curl', label: 'cURL', lang: 'bash' }
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Start building in{' '}
            <span className="bg-gradient-to-r from-surflux-aqua to-surflux-turquoise bg-clip-text text-transparent">
              seconds
            </span>
          </h2>
          <p className="text-xl text-foreground-muted max-w-3xl mx-auto">
            Powerful APIs with comprehensive examples to get you up and running instantly
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Tab Navigation */}
          <div className="flex flex-wrap justify-center mb-8">
            <div className="bg-white/60 backdrop-blur-sm rounded-xl p-1 border border-border">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`px-6 py-3 rounded-lg font-medium transition-all ${
                    activeTab === tab.id
                      ? 'bg-gradient-to-r from-surflux-aqua to-surflux-turquoise text-white shadow-md'
                      : 'text-foreground-muted hover:text-foreground'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          {/* Code Display */}
          <div className="code-window mb-12">
            <div className="flex items-center justify-between mb-4 pb-3 border-b border-gray-700">
              <div className="flex items-center gap-2">
                <div className="flex gap-2">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                </div>
                <span className="text-gray-400 text-sm ml-4">
                  surflux-example.{tabs.find(t => t.id === activeTab)?.lang}
                </span>
              </div>
              <span className="text-gray-400 text-sm">Live Example</span>
            </div>
            <pre className="text-sm leading-relaxed overflow-x-auto">
              <code className="text-green-400">
                {codeExamples[activeTab as keyof typeof codeExamples]}
              </code>
            </pre>
          </div>

          {/* CTA */}
          <div className="text-center">
            <Button 
              size="lg"
              className="btn-gradient flex items-center gap-2 mx-auto"
            >
              Try in Console
              <ArrowRight size={16} />
            </Button>
            <p className="text-sm text-foreground-light mt-4">
              No signup required • Free tier available
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechShowcase;