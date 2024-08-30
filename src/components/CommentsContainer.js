import React from "react";

const commentsData = [
  {
    name: "SimranGangwani",
    text: "Amazing video with incredible content, truly a must-watch for everyone!✨",
    replies: [],
  },
  {
    name: "GitaSingh",
    text: "Hey there everyone!👋🏻 I have edited this video.",
    replies: [
      {
        name: "LakshmiBiswas27",
        text: "Outstanding editing and fantastic content, you really nailed it perfectly! 🔥👏",
        replies: [],
      },
      {
        name: "NareshMandal",
        text: "Incredible editing skills combined with top-notch content, absolutely stunning! 😍",
        replies: [
          {
            name: "PunamKumarrrr",
            text: "Yes, the content and editing both are amazing!",
            replies: [
              {
                name: "DineshRaut178",
                text: "Remarkable video with perfect editing, content was spot-on and engaging! ",
                replies: [
                  {
                    name: "theSureshKumar",
                    text: "High-quality content with flawless editing, keep up the amazing work! 🌟",
                    replies: [
                      {
                        name: "SunitaKhatun46",
                        text: "Nice job on the video, the editing and content are stellar! ",
                        replies: [],
                      },
                    ],
                  },
                  {
                    name: "LalitaMitra",
                    text: "Great balance of content and editing, this video is excellent!",
                    replies: [],
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    name: "nexogames4819",
    text: "Engaging content and smooth editing, this video was a joy to watch! 🎉😄",
    replies: [],
  },
  {
    name: "seyuh5613",
    text: "Loved this video, the content is perfectly aligned! 🥰",
    replies: [],
  },
  {
    name: "sayoriKhan8810",
    text: "Don’t miss this! 🔥",
    replies: [],
  },
  {
    name: "smriti5051",
    text: "Really enjoyed the content, and the editing made it even better!",
    replies: [],
  },
];

const Comment = ({ data }) => {
  const { name, text, replies } = data;
  return (
    <div className="flex p-2 my-2 dark:text-[#f1f1f1]">
      <img
        className="h-10 mr-1 rounded-full"
        alt="user"
        src="https://i.pinimg.com/564x/20/05/e2/2005e27a39fa5f6d97b2e0a95233b2be.jpg"
      />
      <div className="px-3">
        <p className="font-bold text-[13px]">@{name}</p>
        <p className="text-sm">{text}</p>
      </div>
    </div>
  );
};

const CommentsList = ({ comments }) => {
  return comments.map((comment, index) => (
    <div key={index}>
      <Comment data={comment} />
      <div className="replies pl-5 ml-5 border  border-l-slate-200 dark:border-l-zinc-800 border-t-0 border-r-0 border-b-0">
        <CommentsList comments={comment.replies} />
      </div>
    </div>
  ));
};

const CommentsContainer = ({ videoData }) => {
  return (
    <div className="my-6">
      <h1 className="text-xl font-bold dark:text-[#f1f1f1]">
        {videoData[0]?.statistics?.commentCount} Comments
      </h1>
      <CommentsList comments={commentsData} />
    </div>
  );
};

export default CommentsContainer;
