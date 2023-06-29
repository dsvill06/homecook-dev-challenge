const kitchenStatuses = () => {
  return {
    0: { value: "created", label: "Created" },
    10: { value: "pending", label: "Pending" },
    20: { value: "confirmed", label: "Confirmed" },
    30: { value: "canceled", label: "Canceled" },
    40: { value: "completed", label: "Completed" },
  };
};

const statusColors = () => {
  return { 
    Pending: "bg-gray-500",
    Created: "bg-green-500",
    Confirmed: "bg-yellow-400",
    Canceled: "bg-red-600",
    Completed: "bg-primary-400"
   };
};

export { kitchenStatuses, statusColors };
