module.exports.config = {
  name: "goiadmin",
    version: "1.0.0",
    permission: 0,
    credits: "nayan",
    description: "mention",
    prefix: true,
    category: "user",
    usages: "tag",
    cooldowns: 5,
};
module.exports.handleEvent = function({ api, event }) {
  if (event.senderID !== "61552725332330") {
    var aid = ["61552725332330"];
    for (const id of aid) {
    if ( Object.keys(event.mentions) == id) {
      var msg = ["Mantion_দিস না _রাহাত বস এর  মন ভালো নেই আস্কে-!💔🥀", "- আমার সাথে কেউ সেক্স করে না থুক্কু টেক্স করে নাহ🫂💔", "mantion দিস না রাহাত বস ফারিয়া মেডাম এর সাথে  বেস্ত🙈 😒","এত মেনশন না দিয়ে বক্স আসো হট করে দিবো🤷‍ঝাং 😘🥒"," Mantion_দিলে চুম্মাইয়া ঠুটের কালার change কইরা,লামু 💋😾😾🔨","এতো মিনশন নাহ দিয়া ইনবক্স চলে জা 😒 😏","Mantion_ না দিয়ে আমাকে তোমার চিপায় নিয়া নাও🥵🫦","মেনশন দিসনা বাল পাকনা রাহাত প্রচুর বিচি😴😒 ","এত Mantion_ দিস কেন তোর নানির সাথে হাংগা দিবি নাকি🙄😑"];
      return api.sendMessage({body: msg[Math.floor(Math.random()*msg.length)]}, event.threadID, event.messageID);
    }
    }}
};
module.exports.run = async function({}) {
}
