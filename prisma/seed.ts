import { Prisma, PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

const quotes = [
  "Yer a wizard Harry.  Rubeus Hagrid",
  "I hope you're pleased with yourselves. We could all have been killed — or worse, expelled. Now if you don't mind, I'm going to bed. Hermione Granger",
  "It does not do well to dwell on dreams and forget to live. Albus Dumbledore",
  "To the well-organized mind, death is but the next great adventure. Albus Dumbledore",
  "You're a little scary sometimes, you know that? Brilliant... but scary. Ron Weasley",
  "There will be no foolish wand-waving or silly incantations in this class. As such, I don't expect many of you to appreciate the subtle science and exact art that is potion-making. However, for those select few who possess the predisposition, I can teach you how to bewitch the mind and ensnare the senses. I can tell you how to bottle fame, brew glory, and even put a stopper in death. Then again, maybe some of you have come to Hogwarts in possession of abilities so formidable that you feel confident enough to not pay attention! Severus Snape",
  "It takes a great deal of bravery to stand up to our enemies, but just as much to stand up to our friends. Albus Dumbledore",
  "If there is one thing Voldemort cannot understand, it is love. He didn't realize that love as powerful as your mother's for you leaves its own mark. Not a scar, no visible sign… to have been loved so deeply, even though the person who loved us is gone, will give us some protection forever. It is in your very own skin. Albus Dumbledore",
  "As much money and life as you could want! The two things most human beings would choose above all – the trouble is, humans do have a knack of choosing precisely those things that are worst for them. Albus Dumbledore",
  "The truth. It is a beautiful and terrible thing, and should therefore be treated with great caution. Albus Dumbledore",
  "There are some things you can’t share without ending up liking each other, and knocking out a twelve-foot mountain troll is one of them.",
  "Ah, music. A magic beyond all we do here! Albus Dumbledore",
  "Fear of a name only increases fear of the thing itself. Hermione Granger",
  "It is our choices, Harry, that show what we truly are, far more than our abilities. Albus Dumbledore",
  "Dobby is free. Dobby",
  "Training for the ballet, Potter? Draco Malfoy",
  "I’ll be in my bedroom, making no noise and pretending I’m not there. Harry Potter",
  "Hearing voices no one else can hear isn’t a good sign, even in the wizarding world. Ron Weasley",
  "When in doubt, go to the library. Ron Weasley",
  "Fawkes is a phoenix, Harry. Phoenixes burst into flame when it is time for them to die and are reborn from the ashes. Albus Dumbledore",
  "Fame is a fickle friend, Harry. Celebrity is as celebrity does. Remember that. Gilderoy Lockhart",
  "Honestly, if you were any slower, you’d be going backward. Draco Malfoy",
  "I solemnly swear I am up to no good. Harry Potter",
  "'I’m not going to be murdered,’ Harry said out loud. ‘That’s the spirit, dear,’ said his mirror sleepily.",
  "Happiness can be found, even in the darkest of times, if one only remembers to turn on the light. Albus Dumbledore",
  "Don’t let the muggles get you down. Ron Weasley",
  "I want to commit the murder I was imprisoned for. Sirius Black",
  "Are you insane? Of course I want to leave the Dursleys! Have you got a house? When can I move in? Harry Potter",
  "Why, dear boy, we don’t send wizards to Azkaban just for blowing up their aunts. Cornelius Fudge",
  "You think the dead we loved truly ever leave us? You think that we don’t recall them more clearly in times of great trouble? Albus Dumbledore",
  "Mischief Managed! Harry Potter",
  "If you want to know what a man’s like, take a good look at how he treats his inferiors, not his equals. Sirius Black",
  "I am what I am, an' I'm not ashamed. 'Never be ashamed,' my ol' dad used ter say, 'there's some who'll hold it against you, but they're not worth botherin' with.' Rubeus Hagrid",
  "It matters not what someone is born, but what they grow to be. Albus Dumbledore",
  "Twitchy little ferret, aren’t you, Malfoy? Hermione Granger",
  "Your devotion is nothing more than cowardice. You would not be here if you had anywhere else to go. Voldemort",
  "Numbing the pain for a while will make it worse when you finally feel it. Albus Dumbledore",
  "Anyone can speak Troll. All you have to do is point and grunt. Fred Weasley",
  "Curiosity is not a sin…. But we should exercise caution with our curiosity… yes, indeed. Albus Dumbledore",
  "We are only as strong as we are united, as weak as we are divided. Albus Dumbledore",
  "Just because it’s taken you three years to notice, Ron, doesn’t mean no one else has spotted I’m a girl! Hermione Granger",
  "Differences of habit and language are nothing at all if our aims are identical and our hearts are open. Albus Dumbledore",
  "Accio Brain! Ron Weasley",
  "I think we've outgrown full-time education ... Time to test our talents in the real world, d'you reckon? Fred Weasley",
  "The mind is not a book, to be opened at will and examined at leisure. Thoughts are not etched on the inside of skulls, to be perused by an invader. The mind is a complex and many-layered thing. Severus Snape",
  "I think I'll just go down and have some pudding and wait for it all to turn up — it always does in the end. Luna Lovegood",
  "Just because you have the emotional range of a teaspoon doesn't mean we all have. Hermione Granger",
  "You can laugh, but people used to believe there were no such things as the Blibbering Humdinger or the Crumple-Horned Snorkack! Luna Lovegood",
  "I mean, it's sort of exciting, isn't it, breaking the rules? Hermione Granger",
  "We’ve all got both light and dark inside us. What matters is the part we choose to act on. That’s who we really are. Sirius Black",
  "Indifference and neglect often do much more damage than outright dislike. Albus Dumbledore",
  "Things we lose have a way of coming back to us in the end, if not always in the way we expect. Luna Lovegood",
  "Youth can not know how age thinks and feels. But old men are guilty if they forget what it was to be young. Albus Dumbledore",
  "Wit beyond measure is man’s greatest treasure. Luna Lovegood",
  "The thing about growing up with Fred and George is that you sort of start thinking anything's possible if you've got enough nerve. Ginny Weasley",
  "And now, Harry, let us step out into the night and pursue that flighty temptress, adventure. Albus Dumbledore",
  "Dumbledore says people find it far easier to forgive others for being wrong than being right. Hermione Granger",
  "Harry was left to ponder in silence the depths to which girls would sink to get revenge.",
  "You’re just as sane as I am.Luna Lovegood",
  "I am a wizard, not a baboon brandishing a stick. Seamus Finnigan",
  "Age is foolish and forgetful when it underestimates youth. Albus Dumbledore",
  "Once again, you show all the sensitivity of a blunt axe. Nearly Headless Nick",
  "It is the unknown we fear when we look upon death and darkness, nothing more. Albus Dumbledore",
  "It is the quality of one’s convictions that determines success, not the number of followers.Remus Lupin",
  "I’m going to keep going until I succeed—or I die. Don’t think I don’t know how this might end. I’ve known it for years. Harry Potter",
  "That wand’s more trouble than it’s worth. And quite honestly, I’ve had enough trouble for a lifetime. Harry Potter",
  "We’re all human, aren’t we? Every human life is worth the same, and worth saving. Kingsley Shacklebolt",
  "‘Does it hurt?’ The childish question had escaped Harry's lips before he could stop it. ‘Dying? Not at all,’ said Sirius. ‘Quicker and easier than falling asleep.’",
  "He can run faster than Severus Snape confronted with shampoo. Fred Weasley",
  "‘Ron, you know full well Harry and I were brought up by Muggles!’ said Hermione. ‘We didn’t hear stories like that when we were little, we heard ‘Snow White and the Seven Dwarfs’ and ‘Cinderella’ —’ ‘What’s that, an illness?’ asked Ron.",
  "Words are, in my not-so-humble opinion, our most inexhaustible source of magic. Capable of both inflicting injury, and remedying it. Albus Dumbledore",
  "Not my daughter, you b*tch! Molly Weasley",
  "And Percy was shaking his brother, and Ron was kneeling beside them, and Fred's eyes stared without seeing, the ghost of his last laugh still etched upon his face.",
  "It is a curious thing, Harry, but perhaps those who are best suited to power are those who have never sought it. Those who, like you, have leadership thrust upon them, and take up the mantle because they must, and find to their own surprise that they wear it well. Albus Dumbledore",
  "I've always wanted to use that spell. Minerva McGonagall",
  "Of course it is happening inside your head, Harry, but why on earth should that mean that it is not real? Albus Dumbledore",
  "”Do not pity the dead, Harry. Pity the living, and, above all, those who live without love.” ― Albus Dumbledore",
  "‘Why are they all staring?’ demanded Albus as he and Rose craned around to look at the other students. ‘Don’t let it worry you,’ said Ron. ‘It’s me. I’m extremely famous.’",
  "“Dumbledore watched her fly away, and as her silvery glow faded he turned back to Snape, and his eyes were full of tears. ‘After all this time?’ ‘Always,’ said Snape.”",
];
const createQuoteObject = (quote: string) => {
  // split the quote by the last . and return an object with the quote and author
  // if there is no . but there is a ? then split by the ?
  // if there is no . or ? but there is a ! then split by the !
  // if there is no . or ? or ! then leave the quote as is and the author as unknown
  let quoteArray: string[] = [];
  let quoteText = "";
  let quoteAuthor = "";
  if (quote.includes(".")) {
    quoteArray = quote.split(".");
    quoteText = quoteArray.slice(0, -1).join(".");
    quoteAuthor = quoteArray[quoteArray.length - 1];
  } else if (quote.includes("?")) {
    quoteArray = quote.split("?");
    quoteText = quoteArray.slice(0, -1).join("?");
    quoteAuthor = quoteArray[quoteArray.length - 1];
  } else if (quote.includes("!")) {
    quoteArray = quote.split("!");
    quoteText = quoteArray.slice(0, -1).join("!");
    quoteAuthor = quoteArray[quoteArray.length - 1];
  } else {
    quoteText = quote;
    quoteAuthor = "";
  }

  //   join the quote back together in case there are multiple sentences
  //   get the author
  const quoteObject = {
    quote: quoteText,
    person: quoteAuthor,
  };
  return quoteObject;
};
const arrayOfQuoteObjects = quotes.map((quote: string) =>
  createQuoteObject(quote)
);
console.log(arrayOfQuoteObjects);
const uploadQuotesToPrisma = async () => {
  try {
    await prisma.potter_quote.createMany({ data: arrayOfQuoteObjects });
  } catch (error) {
    console.error(error);
  }
};
uploadQuotesToPrisma();
