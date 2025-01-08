import { motion } from 'framer-motion'
import PropTypes from 'prop-types';

const Indicator = ({mindLevel}) => {

    // Normalize progress to ensure it's between 0 and 100
    const normalizedProgress = Math.min(Math.max(mindLevel, 0), 100);

    // Choose an emoji based on progress level
    const getEmoji = (level) => {
        if (level < 30) return "😌 လက်ခံပေးလို့ရ"; // Relaxed
        if (level < 70) return "🙂 နည်းနည်းမကောင်း"; // Neutral
        if (level < 90) return "🫡 တော်တော်ဆိုး"; // Slightly stressed
        return "🥳"; // Excited
    };

return (
    <div className="w-full flex flex-col ">
        <div
            className="mb-3"
        >
            {getEmoji(normalizedProgress)}
        </div>
        <div className="bg-slate-300 w-full h-3 px-1 rounded-full flex items-center">
            <motion.div
                className="bg-blue-600 h-2 rounded-full"
                style={{ width: `${normalizedProgress}%` }}
                initial={{ width: 0 }}
                animate={{ width: `${normalizedProgress}%` }}
                transition={{ duration: 1 }}
            ></motion.div>
        </div>
        
        <p className=' flex  items-center mt-2'>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M5 22q-.825 0-1.412-.587T3 20V6q0-.825.588-1.412T5 4h1V2h2v2h8V2h2v2h1q.825 0 1.413.588T21 6v14q0 .825-.587 1.413T19 22zm0-2h14V10H5z" /></svg>
            <span className='ms-2'>Jan 8 2025</span>    
        </p>

        </div>
    );
}


Indicator.propTypes = {
    mindLevel: PropTypes.number.isRequired,
};

export default Indicator