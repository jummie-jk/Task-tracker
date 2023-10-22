import { useEffect , useState} from "react";

const taskTrackerQuotes = [
    "Task management is the key to productivity.",
    "Organize your work for better results.",
    "Track your tasks for a successful day.",
  
  ];


export default function Header() {
    const [quoteIndex, setQuoteIndex] = useState(0);
    const intervalDuration = 5000;
    const maxQuotes = taskTrackerQuotes.length;
  
    // Use the useEffect hook to change the quote at the specified interval
    useEffect(() => {
      const interval = setInterval(() => {
        setQuoteIndex((quoteIndex + 1) % maxQuotes);
      }, intervalDuration);
  
      return () => clearInterval(interval);
    }, [quoteIndex, maxQuotes]);
  
    return (
      <div className="header">
        <h1>Task Tracker</h1>
        <p className="quote">
          <span className="fade-in-out">{taskTrackerQuotes[quoteIndex]}</span>
        </p>
      </div>
    );
  }