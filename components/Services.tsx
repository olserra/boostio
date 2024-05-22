type CardProps = {
  title: string;
  description: string;
  imageUrl: string; // New property for image URL
};

const Card: React.FC<CardProps> = ({ title, description, imageUrl }) => (
  <div className="relative w-full p-2 rounded-xl border border-gray-500 bg-gradient-to-r from-gray-500 to-gray-500 shadow-lg mb-4 md:p-3 md:mb-0 lg:h-72 xl:min-h-[480px] overflow-hidden">
    <img
      src={imageUrl}
      alt="Illustration"
      className="w-full h-80 object-cover rounded-xl"
    />{" "}
    {/* Image element */}
    <div className="flex flex-col justify-between h-full text-gray-800 py-6">
      <div>
        <p className="text-lg lg:text-xl font-bold mb-2">{title}</p>
        <p className="text-sm md:text-base">{description}</p>
      </div>
    </div>
  </div>
);
export const Services: React.FC = () => (
  <div className="lg:py-8 px-4 md:px-12 mx-auto max-w-screen-2xl text-center lg:px-6">
    <div className="mx-auto max-w-screen-sm mt-12">
      <p className="pt-12 pb-2 lg:pb-4 lg:py-0 text-sm md:text-lg text-gray-500">
        BOOSTIO SHOWCASE
      </p>
      <p className="pb-12 text-base lg:text-4xl font-bold lg:pb-14 text-gray-800">
        Our Services
      </p>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-2 md:gap-4 lg:px-32">
      <Card
        title="Strategic Data Insights"
        description="Transform your raw data into actionable insights, enhancing strategic decision-making and competitive advantage."
        imageUrl="https://pixelplex.io/wp-content/uploads/2022/07/blockchain-explained-components-platforms-use-cases-main-1600.jpg"
      />
      <Card
        title="AI-Driven Innovation Workshops"
        description="Facilitate creativity and innovation sessions using AI tools to boost human ingenuity and strategic thinking."
        imageUrl="https://media.licdn.com/dms/image/D4D12AQGRbvAQrS59Ng/article-cover_image-shrink_720_1280/0/1699109067404?e=2147483647&v=beta&t=WKiZs1UFBDXq_4Uj_zEH-y1m4dr0ynaivigOtquNDkc"
      />
      <Card
        title="Advanced Sentiment Intelligence"
        description="Leverage AI to deeply understand audience sentiment, tailoring strategies and communications to enhance engagement."
        imageUrl="https://terragongroup.com/wp-content/uploads/2023/10/email-customer-rev.jpg"
      />
      <Card
        title="AI Strategic Agents"
        description="Develop AI agents that support strategic planning and operational efficiency, automating complex tasks and analysis."
        imageUrl="https://www.forbes.com/advisor/wp-content/uploads/2022/06/Image_-_Chatbot.jpeg.jpg"
      />
      <Card
        title="Dynamic Content Strategy"
        description="Create compelling, data-driven content that aligns with strategic goals, enhancing brand presence and audience connection."
        imageUrl="https://regancomm.com/wp-content/uploads/2022/10/l_feb-blogpost-03.jpg"
      />
      <Card
        title="Interactive Documentation Solutions"
        description="Deliver customized, interactive documentation to enhance user engagement and operational efficiency."
        imageUrl="https://cdn-blog.scalablepath.com/uploads/2020/10/technical-documentation-software-project.png"
      />
      <Card
        title="Personalized Learning Pathways"
        description="Design bespoke learning journeys that leverage AI to upskill teams, fostering innovation and strategic growth."
        imageUrl="https://miro.medium.com/v2/resize:fit:1024/0*DwVcmqU5wXjxcH9I.png"
      />
      <Card
        title="AI-Enhanced On-Demand Services"
        description="Access AI-powered services for content creation and analysis, including data visualization, strategic insights, and more."
        imageUrl="https://uploads-ssl.webflow.com/5e0c29eceae07ed55982d194/63c4b448a45ec713f511b12c_web3-light.png"
      />

    </div>
  </div>
);
