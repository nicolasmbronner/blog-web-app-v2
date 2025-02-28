const dateFormatter = {
    // Utilitary functions
    isToday: (dateString) => {
        const inputDate = new Date(dateString);
        const today = new Date();
      
        return inputDate.getDate() === today.getDate() && // Day of the month
            inputDate.getMonth() === today.getMonth() && // Jan = 0, Feb = 1 etc...
            inputDate.getFullYear() === today.getFullYear();
    },
  
    isCurrentYear: (dateString) => {
        const inputDate = new Date(dateString);
        const today = new Date();
  
        return inputDate.getFullYear() === today.getFullYear();
    },
  
    // Main functions
    formatForList: (dateString, isMobile = false) => {
        const inputDate = new Date(dateString);
  
        // Case 1: Today (any device)
        if (dateFormatter.isToday(dateString)) {
            const hours = inputDate.getHours();
            const minutes = inputDate.getMinutes().toString().padStart(2, '0');
            return `${hours}:${minutes}`;
        }
  
        // Case 2 & 3: This year, but not today
        else if (dateFormatter.isCurrentYear(dateString)) {
            if (isMobile) {
                // Mobile format : M/DD
                return `${inputDate.getMonth() + 1}/${inputDate.getDate().toString().padStart(2, '0')}`;
            } else {
                // Desktop format : Mon DD
                return `${inputDate.toLocaleString('en-US', { month: 'short' })} ${inputDate.getDate()}`;
            }
        }
  
        // Case 4 & 5: Anterior year
        else {
            if (isMobile) {
                // Mobile format : YYYY
                return inputDate.getFullYear().toString();
            } else {
                // Desktop format : YYYY • Mon
                const month = inputDate.toLocaleString('en-US', { month: 'short' });
                return `${inputDate.getFullYear()} • ${month}`;
            }
        }
    },
  
    formatForArticle: (dateString) => {
        const date = new Date(dateString);
        const options = {
            weekday: 'long',
            year: 'numeric',
            month: 'long',
            day: 'numeric' 
        };
    
        // @ts-ignore
        return date.toLocaleDateString('en-US', options);
    }
};

export default dateFormatter;