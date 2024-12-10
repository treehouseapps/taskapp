// utils/todoUtils.js
export const addTask = (array, text) => {
    if (!text.trim()) {
        return { array, isValid: false, message: "Task cannot be empty." }; // Empty input validation
    }

    // Check if the task already exists
    if (array.includes(text)) {
        return { array, isValid: false, message: "Task already exists." }; // Duplicate task validation
    }

    return { array: [...array, text], isValid: true, message: "" }; // Task added successfully
};


export const removeTask = (array, index) => {
    return array.filter((_, i) => i !== index);
};

export const editTask = (array, index, newText) => {
    return array.map((item, i) => (i === index ? newText : item));
};
