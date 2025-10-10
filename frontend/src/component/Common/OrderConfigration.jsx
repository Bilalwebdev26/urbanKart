import { toast } from "react-hot-toast";

export const OrderSuccessToast = (message = "Order created successfully!") => {
  toast.custom((t) => (
    <div
      className={`${
        t.visible ? 'animate-enter' : 'animate-leave'
      } max-w-md w-full bg-white shadow-lg rounded-lg pointer-events-auto flex ring-1 ring-black ring-opacity-5`}
    >
      <div className="flex-1 w-0 p-4">
        <div className="flex items-start">
          <div className="flex-shrink-0 pt-0.5">
            <img
              className="h-10 w-10 rounded-full"
              src="https://cdn-icons-png.flaticon.com/512/845/845646.png"
              alt="Success"
            />
          </div>
          <div className="ml-3 flex-1">
            <p className="text-sm font-semibold text-green-700">
              🎉 Order Successful!
            </p>
            <p className="mt-1 text-sm text-gray-600">
              {message}
            </p>
          </div>
        </div>
      </div>
      <div className="flex border-l border-gray-200">
        <button
          onClick={() => toast.dismiss(t.id)}
          className="w-full border border-transparent rounded-none rounded-r-lg p-4 flex items-center justify-center text-sm font-medium text-green-600 hover:text-green-500 focus:outline-none focus:ring-2 focus:ring-green-500"
        >
          Close
        </button>
      </div>
    </div>
  ));
};
