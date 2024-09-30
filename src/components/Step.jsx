export default function ImageTextComponent() {
    return (
      <div className="flex items-center container max-w-6xl mx-auto bg-gray-100">
        {/* Image on the left */}
        <div className="w-1/2">
          <img
            src="/iPhone13Pro.png"
            alt="Description of image"
            className="w-full h-auto object-cover"
          />
        </div>
  
        {/* Text on the right */}
        <div className="w-1/2 pl-6">
          <h2 className="text-2xl font-bold mb-4">3 Simple Steps to Enjoy DakieoPay</h2>
          <p className="text-gray-700">
            This is where your text goes. You can include any content you like, such as a description, some details, or even a call-to-action. Tailwind CSS allows you to style this text as needed.
          </p>
        </div>
      </div>
    );
  }
  