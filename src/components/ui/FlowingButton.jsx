const FlowingButton = () => {

  const handleButton = () => {
    window.open("https://wa.me/918848799145", "_blank");
  };

  return (
    <div>
        <button className="fixed bottom-6 right-6 z-50 flex items-center justify-center rounded-full px-4 py-2 bg-gray-500 hover:bg-red-600 transition duration-300 shadow-lg transform hover:scale-105">
          {/* Icon can be added here, e.g., <Icon name="cart" /> */}
            <span className="text-white text-lg font-semibold"
            onClick={handleButton}>Call for Purchase</span>
        </button>
    </div>
  )
}

export default FlowingButton