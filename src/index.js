'use strict';
var Alexa = require('alexa-sdk');
var APP_ID = "amzn1.ask.skill.e278d5ca-fb59-4cd9-ad69-b565736d9958";

var languageStrings = {
    "en": {
        "translation": {
            "QUOTES": [
                "Even if I knew that tomorrow the world would go to pieces, I would still plant my apple tree.",
                "We are saved by faith alone, but the faith that saves is never alone.",
                "So when the devil throws your sins in your face and declares that you deserve death and hell, tell him this: I admit that I deserve death and hell, what of it? For I know One who suffered and made satisfaction on my behalf. His name is Jesus Christ, Son of God, and where He is there I shall be also!",
                "If you want to change the world, pick up your pen and write.",
                "My heart, which is so full to overflowing, has often been solaced and refreshed by music when sick and weary.",
                "The dog is the most faithful of animals and would be much esteemed were it not so common. Our Lord God has made His greatest gifts the commonest.",
                "I have so much to do that I shall spend the first three hours in prayer.",
                "This life therefore is not righteousness, but growth in righteousness, not health, but healing, not being but becoming, not rest but exercise. We are not yet what we shall be, but we are growing toward it, the process is not yet finished, but it is going on, this is not the end, but it is the road. All does not yet gleam in glory, but all is being purified.",
                "True humility does not know that it is humble. If it did, it would be proud from the contemplation of so fine a virtue.",
                "Everything that is done in this world is done by hope.",
                "You have as much laughter as you have faith.",
                "Be a sinner and sin﻿﻿ boldly,﻿ but believe and﻿﻿ rejoice in Christ even more boldly.",
                "I am afraid that the schools will prove the very gates of hell, unless they diligently labor in explaining the Holy Scriptures and engraving them in the heart of the youth.",
                "Beer is made by men, wine by God.",
                "There never yet have been, nor are there now, too many good books.",
                "Let the wife make her husband glad to come home and let him make her sorry to see him leave.",
                "God writes the gospel not in the Bible alone, but on trees and flowers and clouds and stars.",
                "Where the battle rages, there the loyalty of the soldier is proved.",
                "You are not only responsible for what you say, but also for what you do not say.",
                "I have held many things in my hands, and I have lost them all; but whatever I have placed in God's hands, that I still possess.",
                "I cannot choose but adhere to the word of God, which has possession of my conscience; nor can I possibly, nor will I even make any recantation, since it is neither safe nor honest to act contrary to conscience! Here I stand; I cannot do otherwise, so help me God! Amen.",
                "Whoever drinks beer, he is quick to sleep; whoever sleeps long, does not sin; whoever does not sin, enters Heaven! Thus, let us drink beer!",
                "Reason is a whore, the greatest enemy that faith has; it never comes to the aid of spiritual things, but more frequently than not struggles against the divine Word, treating with contempt all that emanates from God.",
                "There are two days in my calendar: This day and that Day.",
                "The Christian shoe maker does his duty not by putting little crosses on the shoes, but by making good shoes, because God is interested in good craftsmanship.",
                "The devil, the originator of sorrowful anxieties and restless troubles, flees before the sound of music almost as much as before the Word of God. Music is a gift and grace of God, not an invention of men. Thus it drives out the devil and makes people cheerful. Then one forgets all wrath, impurity, and other devices.",
                "A person who does not regard music as a marvelous creation of God, must be a clodhopper indeed and does not deserve to be called a human being; he should be permitted to hear nothing but the braying of asses and the grunting of hogs.",
                "A unjust law, is no law at all.",
                "All who call on God in true faith, earnestly from the heart, will certainly be heard, and will receive what they have asked and desired.",
                "I know not the way God leads me, but well do I know my Guide.",
                "All the cunning of the devil is exercised in trying to tear us away from the word.",
                "Peace if possible. Truth at all costs.",
                "There is no more lovely, friendly and charming relationship, communion, or company than a good marriage.",
                "The heart overflows with gladness, and leaps and dances for the joy it has found in God. In this experience the Holy Spirit is active, and has taught us in the flash of a moment the deep secret of joy. You will have as much joy and laughter in life as you have faith in God.",
                "God does not need your good works, but your neighbor does.",
                "In the midst of the affliction He counsels, strengthens confirms, nourishes, and favors us. More over, when we have repented, He instantly remits the sins as well as the punishments. In the same manner parents ought to handle their children.",
                "The best way to drive out the devil, if he will not yield to texts of Scripture, is to jeer and flout him, for he cannot bear scorn.",
                "It is better to think of church in the ale-house than to think of the ale-house in church.",
                "Every man must do two things alone; he must do his own believing and his own dying.",
                "Prayer is not overcoming God's reluctance. It is laying hold of His willingness.",
                "The sin underneath all our sins is to trust the lie of the serpent that we cannot trust the love and grace of Christ and must take matters into our own hands.",
                "A Christian is a perfectly free lord of all, subject to none. A Christian is a perfectly dutiful servant of all, subject of all, subject to all.",
                "This grace of God is a very great, strong, mighty and active thing. It does not lie asleep in the soul. Grace hears, leads, drives, draws, changes, works all in man, and lets itself be distinctly felt and experienced. It is hidden, but its works are evident.",
                "The fewer the words, the better the prayer.",
                "He who loves not wine, women and song remains a fool his whole life long.",
                "No great saint lived without errors.",
                "Next to the Word of God, music deserves the highest praise. The gift of language combined with the gift of song was given to man that he should proclaim the Word of God through Music.",
                "No one can believe how powerful prayer is and what it can effect, except those who have learned it by experience. Whenever I have prayed earnestly, I have been heard and have obtained more than I prayed for. God sometimes delays, but He always comes.",
                "As long as we live there is never enough singing.",
                "To be convinced in our hearts that we have forgiveness of sins and peace with God by grace alone is the hardest thing.",
                "Pray, and let God worry.",
                "The gospel cannot be truly preached without offense and tumult.",
                "When God's righteousness is mentioned in the gospel, it is God's action of declaring righteous the unrighteous sinner who has faith in Jesus Christ. The righteousness by which a person is justified is not his own but that of another, Christ.",
                "Whatever your heart clings to and confides in, that is really your God, your functional savior.",
                "Be thou comforted, little dog; thou, too, in Resurrection shall have a little golden tail.",
                "Many pass for saints on earth whose souls are in hell.",
                "The truth of the matter is rather as Christ says, He who is not with me is against me... He does not say, He who is not with me is not against me either, but merely neutral.",
                "Faith must trample under foot all reason, sense, and understanding.",
                "You cannot keep birds from flying over your head, but you can keep them from building a nest in your hair.",
                "The soul can do without everything except the word of God, without which none at all of its wants are provided for.",
                "Thus every matter, if it is to be done well, calls for the attention of the whole person.",
                "One learns more of Christ in being married and rearing children than in several lifetimes spent in study in a monastery.",
                "In his life, Christ is an example showing us how to live... in his death, he is a sacrifice satisfying our sins... in his resurrection, a conqueror... in his ascension, a king... in his intercession, a high priest.",
                "This is the reason why our Theology is certain: because it seizes us from ourselves and places us outside ourselves.",
                "Those speak foolishly who ascribe their anger or their impatience to such as offend them or to tribulation. Tribulation does not make people impatient, but proves that they are impatient. So everyone may learn from tribulation how his heart is constituted.",
                "Maternity is a glorious thing, since all mankind has been conceived, born, and nourished of women. All human laws should encourage the multiplication of families.",
                "By faith, we began... by hope, we continue... and by revelation, we shall obtain the whole.",
                "We are nothing with all our gifts, be they ever so great, except God assist us.",
                "If you want to interpret well and confidently, set Christ before you, for He is the man to whom it all applies, every bit of it.",
                "What you do in your house is worth as much as if you did it up in heaven for our Lord God. We should accustom ourselves to think of our position and work as sacred and well-pleasing to God, not on account of the position and work, but on account of the word and faith from which the obedience and work flow.",
                "I am of a different mind ten times in the course of a day. But I resist the devil, and often it is with a fart that I chase him away. When he tempts me with silly sins, I say, 'Devil, yesterday I broke wind, too. Have you written it down on your list?",
                "False preachers are worse than deflowerers of virgins.",
                "Bewilderment is the true comprehension. Not to know where you are going is the true knowledge.",
                "Philosophy is the Devil's Whore.",
                "This is the most dangerous trial of all, when there is no trial and every thing goes well; for then a man is tempted to forget God, to become too bold, and to misuse times of prosperity.",
                "God made man out of nothing, and as long as we are nothing, He can make something out of us.",
                "Strange... though I am saved from sin, I am not saved from sinning.",
                "Faith is a living, unshakable confidence in God's grace; it is so certain that someone would die a thousand times for it.",
                "Why do you rant and brag with such a spate of words, as if you wanted to overwhelm me with a sort of tempest and deluge of oratory... which nevertheless falls with the greater force on your own head, while my ark rides aloft in safety?",
                "All we who believe in Christ are kings and priests in Christ.",
                "To preach Christ is to feed the soul, to justify it, to set it free, and to save it, if it believes the preaching.",
                "Blood alone moves the wheels of history.",
                "Whoever wants to be a Christian should tear the eyes out of his reason.",
                "Good works do not make a good man, but a good man does good works; evil works do not make a wicked man, but a wicked man does evil works.",
                "I frankly confess that even if it were possible, I should not wish to have free choice given to me, or to have anything left in my own hands by which I might strive for salvation.",
                "Our Lord has written the promise of resurrection, not in books alone, but in every leaf in springtime.",
                "I compare it with a lie, which like to a snowball, the longer it is rolled the greater it becomes.",
                "To be a Christian without prayer is no more possible than to be alive without breathing.",
                "It is easy enough to do good once or twice, but to keep on doing good without getting disgusted with the ingratitude of those whom we have benefited... that is not so easy.",
                "Beautiful music is the art of the prophets that can calm the agitations of the soul; it is one of the most magnificent and delightful presents God has given us.",
                "He who believes God, recognizes Him as true and faithful, and himself as a liar; for he mistrusts his own thinking as false, and trusts the Word of God as being true, though it absolutely contradicts his own reasoning.",
                "Here I stand; I can do no other. God help me. Amen!",
                "Mankind has a free will; but it is free to milk cows and to build houses, nothing more.",
                "No one need think that the world can be ruled without blood. The civil sword shall and must be red and bloody.",
                "Superstition, idolatry, and hypocrisy have ample wages, but the truth goes begging.",
                "If I am not allowed to laugh in heaven, I don't want to go there.",
                "How soon not now, becomes never.",
                "Justice is a temporary thing that must at last come to an end; but the conscience is eternal and will never die.",
                "Some plague the people with too long sermons; for the faculty of listening is a tender thing, and soon becomes weary and satiated.",
                "The Bible is alive, it speaks to me; it has feet, it runs after me; it has hands, it lays hold of me.",
                "When Satan tells me I am a sinner, he comforts me immeasurably, since Christ died for sinners.",
                "Should some thought that isn’t worth a fart nevertheless overwhelm me, I have the advantage, that our Lord God gives me, of taking hold of his Word once again."                
            ],
            "SKILL_NAME" : "Luther Quotes",
            "GET_QUOTE_MESSAGE" : "Martin Luther said: ",
            "HELP_MESSAGE" : "You can say tell me a Luther quote, or, you can say exit... What can I help you with?",
            "HELP_REPROMPT" : "What can I help you with?",
            "STOP_MESSAGE" : "Goodbye!"
        }
    }
};

exports.handler = function(event, context, callback) {
    var alexa = Alexa.handler(event, context);
    alexa.APP_ID = APP_ID;
    // To enable string internationalization (i18n) features, set a resources object.
    alexa.resources = languageStrings;
    alexa.registerHandlers(handlers);
    alexa.execute();
};

var handlers = {
    'LaunchRequest': function () {
        this.emit('GetQuote');
    },
    'GetNewQuoteIntent': function () {
        this.emit('GetQuote');
    },
    'GetQuote': function () {
        // Get a random space fact from the space facts list
        // Use this.t() to get corresponding language data
        var quoteArr = this.t('QUOTES');
        var quoteIndex = Math.floor(Math.random() * quoteArr.length);
        var randomQuote = quoteArr[quoteIndex];

        // Create speech output
        var speechOutput = this.t("GET_QUOTE_MESSAGE") + randomQuote;
        this.emit(':tellWithCard', speechOutput, this.t("SKILL_NAME"), randomQuote)
    },
    'AMAZON.HelpIntent': function () {
        var speechOutput = this.t("HELP_MESSAGE");
        var reprompt = this.t("HELP_MESSAGE");
        this.emit(':ask', speechOutput, reprompt);
    },
    'AMAZON.CancelIntent': function () {
        this.emit(':tell', this.t("STOP_MESSAGE"));
    },
    'AMAZON.StopIntent': function () {
        this.emit(':tell', this.t("STOP_MESSAGE"));
    }
};
