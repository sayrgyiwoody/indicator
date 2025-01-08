import { useState } from "react";
import Indicator from "./components/Indicator";
import Profile from "./components/Profile";
import { motion } from "framer-motion";
import { TypingText } from "./components/TypingText";

function App() {

  const [mindLevel, setMindLevel] = useState(80);

  const textVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <div className=" min-h-screen space-y-4 flex flex-col items-center w-full bg-slate-50 pt-8 p-6">

      <motion.h4
        className="text-xl font-bold text-start"
        initial="hidden"
        animate="visible"
        variants={textVariants}
      >
        ရွှန်းရွှန်း ၏ အကျင့်မကောင်းမှု Level
      </motion.h4>
      <div className="p-5 flex space-x-3 w-full max-w-lg h-fit bg-white shadow rounded-lg">
        <Profile />
        <div className="w-full">
          <Indicator mindLevel={mindLevel} />
        </div>
      </div>
      <div className="p-5 flex space-x-3 w-full max-w-lg h-fit bg-white shadow rounded-lg">
        <p></p>
        <p className="text-start text-gray-700 ">
          <TypingText text="
          မှတ်ချက်။ ရွှန်းရွှန်းသည် အကျင့်မကောင်းသည် ဟုထင်ရသော်လည်း အသဲကွဲနေသူကို အသဲကွဲသီချင်းများ ၊ ရုပ်ရှင်များ ကြည့်ခိုင်းခြင်းဖြင့် ကူညီပေးတတ်သူလည်း ဖြစ်တယ်။" />
        </p>
      </div>
    </div>
  );
}

export default App
