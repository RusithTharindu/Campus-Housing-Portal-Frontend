import React from "react";

const Article = () => {
  return (
    <div>
      {/* <div className="flex space-x-2 ml-[7%] pl-12 pt-8">
        <div className="hover:text-blue-500 text-sm">
          <button>dashboard</button>
        </div>
        <div className=" text-grey1"><h1>{">"}</h1></div>
        <div className="text-blue-500 text-sm hover:text-black">
          <button>All users</button>
        </div>
      </div> */}
      <div className="mx-auto border-solid shadow-2xl rounded-[15px] m-5 p-5 pt w-[70%] border-1 mb-[5%]">
        <div class="flex justify-between">
          <div>
            {" "}
            <h1 className="text-4xl font-bold mb-4 mt-5">
              The Article Title
            </h1>{" "}
          </div>
          <div>
            {" "}
            <p className="text-gray-500 mb-4 mt-9 text-sm">Nov 10, 2024</p>{" "}
          </div>
        </div>

        <div>
          {" "}
          <p className="font-semibold pb-2 text-base">Mr. Dean</p>{" "}
        </div>

        <p className="mb-4">
          Consistency is a fundamental aspect of achieving success in any
          endeavor. Whether it's mastering a skill, building a business, or
          maintaining healthy habits, the power of consistency cannot be
          overstated. It is the steady and persistent effort applied over time
          that leads to remarkable results.
        </p>
        <p className="mb-4">
          One of the key reasons consistency is so powerful is its ability to
          compound over time. Just like how small drops of water can eventually
          carve out a canyon, consistent actions, no matter how small, can lead
          to significant progress. By consistently showing up and putting in the
          work day after day, we gradually build momentum towards our goals.
          Each action builds upon the previous one, creating a snowball effect
          that propels us forward.
        </p>
        <p className="mb-4">
          Consistency also helps to develop discipline and resilience. It
          requires commitment and dedication to stick to a task or routine even
          when faced with challenges or setbacks. By cultivating the habit of
          consistency, we train ourselves to push through obstacles and stay
          focused on our objectives. This resilience becomes invaluable when
          navigating the inevitable ups and downs of the journey towards
          success.
        </p>
        <p className="mb-4">
          Moreover, consistency fosters trust and reliability, both in ourselves
          and in others. When we consistently deliver results and follow through
          on ou r commitments, we build a reputation for dependability. This
          reliability not only enhances our credibility but also strengthens our
          relationships with others. Whether it's in business or personal life,
          people are more likely to trust and respect those who demonstrate
          consistent behavior.
        </p>
        <p className="mb-4">
          In addition to its external benefits, consistency also has a profound
          impact on our internal state. When we align our actions with our goals
          and values on a consistent basis, we experience a sense of purpose and
          fulfillment. This alignment creates a harmonious flow in our lives,
          where our thoughts, words, and actions are in sync with each other.
        </p>
        <p className="mb-4">
          Consistency also helps to develop discipline and resilience. It
          requires commitment and dedication to stick to a task or routine even
          when faced with challenges or setbacks. By cultivating the habit of
          consistency, we train ourselves to push through obstacles and stay
          focused on our objectives.
        </p>
       
      </div>
    </div>
  );
};

export default Article;
