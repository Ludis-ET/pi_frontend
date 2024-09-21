import React from "react";

export const PermissionForm = ({ selectedDate, onClose, onSubmit }) => {
  const handleSubmit = (event) => {
    event.preventDefault();
    const reason = event.target.reason.value;
    onSubmit(reason);
  };

  return (
    <div className="mt-4 p-4 border border-gray-300 rounded-lg">
      <h3 className="text-lg font-semibold mb-2">
        Permission Request for {selectedDate.toDateString()}
      </h3>
      <form onSubmit={handleSubmit}>
        <textarea
          name="reason"
          className="w-full p-2 border rounded mb-2"
          placeholder="Please provide your reason..."
          required
        ></textarea>
        <button
          type="submit"
          className="w-full bg-blue-500 text-white p-2 rounded"
        >
          Submit
        </button>
        <button
          type="button"
          className="mt-2 w-full bg-red-500 text-white p-2 rounded"
          onClick={onClose}
        >
          Cancel
        </button>
      </form>
    </div>
  );
};
