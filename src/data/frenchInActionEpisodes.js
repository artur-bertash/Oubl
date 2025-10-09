const episodes =  [
    {
        "id": 0,
        "img": "https://www.learner.org/wp-content/uploads/2019/01/French-Orientation1-Fig1-436x254.jpg",
        "title": "Orientation",
        "desc": "An introduction to French in Action: its creation, its components, and its functioning. How to work with the video programs and how to integrate them with the audio and print components. This is the only program in English; the others are entirely in French."
    },
    {
        "id": 1,
        "img": "https://www.learner.org/wp-content/uploads/2019/01/French-Planning1-Fig1-436x254.jpg",
        "title": "Planning and Anticipating I",
        "desc": "Greeting and leave-taking; talking about health; expressing surprise; planning and anticipating; expressing decisiveness and indecisiveness. Subject pronouns; masculine and feminine adjectives and nouns; definite and indefinite articles; immediate future; agreement in gender and number; aller; être; present indicative of -er verbs."
    },
    {
        "id": 2,
        "img": "https://www.learner.org/wp-content/uploads/2019/01/French-Planning2-Fig1-436x254.jpg",
        "title": "Planning and Anticipating II",
        "desc": "Greeting and leave-taking; talking about health; expressing surprise; planning and anticipating; expressing decisiveness and indecisiveness. Subject pronouns; masculine and feminine adjectives and nouns; definite and indefinite articles; immediate future; agreement in gender and number; aller; être; present indicative of -er verbs."
    },
    {
        "id": 3,
        "img": "https://www.learner.org/wp-content/uploads/2019/01/French-Planning3-Fig1-436x254.jpg",
        "title": "Planning and Anticipating III",
        "desc": "Greeting and leave-taking; talking about health; expressing surprise; planning and anticipating; expressing decisiveness and indecisiveness. Subject pronouns; masculine and feminine adjectives and nouns; definite and indefinite articles; immediate future; agreement in gender and number; aller; être; present indicative of -er verbs."
    },
    {
        "id": 4,
        "img": "https://www.learner.org/wp-content/uploads/2019/01/French-Names1-Fig1-436x254.jpg",
        "title": "Names and Origins",
        "desc": "Numbers; expressing age; giving commands; necessity; negation. Numbers 1-29; avoir; avoir in expressions of age; ne ... pas; imperatives of -er verbs; il faut and infinitives."
    },
    {
        "id": 5,
        "img": "https://www.learner.org/wp-content/uploads/2019/01/French-Physical1-Fig1-436x254.jpg",
        "title": "Physical Characteristics I",
        "desc": "Reality and appearance; describing oneself; talking about sports. Numbers 30-100; faire; aimer and faire with sports; questions with intonation, inversion, and est-ce que."
    },
    {
        "id": 6,
        "img": "https://www.learner.org/wp-content/uploads/2019/01/French-Physical2-Fig1-436x254.jpg",
        "title": "Physical Characteristics II",
        "desc": "Reality and appearance; describing oneself; talking about sports. Numbers 30-100; faire; aimer and faire with sports; questions with intonation, inversion, and est-ce que."
    },
    {
        "id": 7,
        "img": "https://www.learner.org/wp-content/uploads/2019/01/French-Kinship1-Fig1-436x254.jpg",
        "title": "Kinship",
        "desc": "Talking about family relationships; asking the identity of people and things. Numbers 100-999,000,000; dates; partitive; possessive adjectives."
    },
    {
        "id": 8,
        "img": "https://www.learner.org/wp-content/uploads/2019/02/French-describing1-Fig1-436x254.jpg",
        "title": "Describing Others I",
        "desc": "Describing others; talking about games; expressing agreement and disagreement; talking about time; talking about the weather. Present tense with il y a ... que and ça fait ... que; possessive and demonstrative adjectives; stressed pronouns; venir; savoir versus connaître."
    },
    {
        "id": 9,
        "img": "https://www.learner.org/wp-content/uploads/2019/02/French-describing2-Fig1-436x254.jpg",
        "title": "Describing Others II",
        "desc": "Describing others; talking about games; expressing agreement and disagreement; talking about time; talking about the weather. Present tense with il y a ... que and ça fait ... que; possessive and demonstrative adjectives; stressed pronouns; venir; savoir versus connaêtre."
    },
    {
        "id": 10,
        "img": "https://www.learner.org/wp-content/uploads/2019/02/French-Encounters1-Fig1-436x254.jpg",
        "title": "Encounters I",
        "desc": "Starting a conversation; talking about seasons and time of day; exclamations; talking about studies; referring to lack and abundance; expressing approval and disapproval; reacting to compliments; expressing politeness. Immediate past with venir de; direct object pronouns; reflexive verbs; imperative and pronouns; demonstrative adjectives and pronouns; interrogative adjectives and pronouns; parler versus dire; imperfect; imperfect of être and avoir."
    },
    {
        "id": 11,
        "img": "https://www.learner.org/wp-content/uploads/2019/02/French-Encounters2-Fig1-436x254.jpg",
        "title": "Encounters II",
        "desc": "Starting a conversation; talking about seasons and time of day; exclamations; talking about studies; referring to lack and abundance; expressing approval and disapproval; reacting to compliments; expressing politeness. Immediate past with venir de; direct object pronouns; reflexive verbs; imperative and pronouns; demonstrative adjectives and pronouns; interrogative adjectives and pronouns; parler versus dire; imperfect; imperfect of être and avoir."
    },
    {
        "id": 12,
        "img": "https://www.learner.org/wp-content/uploads/2019/02/French-Encounters3-Fig1-436x254.jpg",
        "title": "Encounters III",
        "desc": "Starting a conversation; talking about seasons and time of day; exclamations; talking about studies; referring to lack and abundance; expressing approval and disapproval; reacting to compliments; expressing politeness. Immediate past with venir de; direct object pronouns; reflexive verbs; imperative and pronouns; demonstrative adjectives and pronouns; interrogative adjectives and pronouns; parler versus dire; imperfect; imperfect of être and avoir."
    },
    {
        "id": 13,
        "img": "https://www.learner.org/wp-content/uploads/2019/02/French-Encounters4-Fig1-436x254.jpg",
        "title": "Encounters IV",
        "desc": "Starting a conversation; talking about seasons and time of day; exclamations; talking about studies; referring to lack and abundance; expressing approval and disapproval; reacting to compliments; expressing politeness. Immediate past with venir de; direct object pronouns; reflexive verbs; imperative and pronouns; demonstrative adjectives and pronouns; interrogative adjectives and pronouns; parler versus dire; imperfect; imperfect of être and avoir."
    },
    {
        "id": 14,
        "img": "https://www.learner.org/wp-content/uploads/2019/02/French-Occupations1-Fig1-436x254.jpg",
        "title": "Occupations I",
        "desc": "Talking about work; degrees of assent; days and months of the year; buying and spending; approximating; talking about years and centuries. Aller versus venir; prepositions; contractions of definite article with de and à; adverbial pronouns y and en; vouloir, pouvoir; c'est versus il/elle est; ne ... plus, ne ... jamais; pronoun on; indirect object pronouns; formation of adverbs."
    },
    {
        "id": 15,
        "img": "https://www.learner.org/wp-content/uploads/2019/02/French-Occupations2-Fig1-436x254.jpg",
        "title": "Occupations II",
        "desc": "Talking about work; degrees of assent; days and months of the year; buying and spending; approximating; talking about years and centuries. Aller versus venir; prepositions; contractions of definite article with de and à; adverbial pronouns y and en; vouloir, pouvoir; c'est versus il/elle est; ne ... plus, ne ... jamais; pronoun on; indirect object pronouns; formation of adverbs."
    },
    {
        "id": 16,
        "img": "https://www.learner.org/wp-content/uploads/2019/02/French-Occupations3-Fig1-436x254.jpg",
        "title": "Occupations III",
        "desc": "Talking about work; degrees of assent; days and months of the year; buying and spending; approximating; talking about years and centuries. Aller versus venir; prepositions; contractions of definite article with de and à; adverbial pronouns y and en; vouloir, pouvoir; c'est versus il/elle est; ne ... plus, ne ... jamais; pronoun on; indirect object pronouns; formation of adverbs."
    },
    {
        "id": 17,
        "img": "https://www.learner.org/wp-content/uploads/2019/02/French-Occupations4-Fig1-436x254.jpg",
        "title": "Occupations IV",
        "desc": "Talking about work; degrees of assent; days and months of the year; buying and spending; approximating; talking about years and centuries. Aller versus venir; prepositions; contractions of definite article with de and à; adverbial pronouns y and en; vouloir, pouvoir; c'est versus il/elle est; ne ... plus, ne ... jamais; pronoun on; indirect object pronouns; formation of adverbs."
    },
    {
        "id": 18,
        "img": "https://www.learner.org/wp-content/uploads/2019/02/French-Education1-Fig1-436x254.jpg",
        "title": "Education I",
        "desc": "Identification and description; talking about occupations; talking back; excusing oneself; expressing incredulity. Passé composé; plaire; negation with jamais, rien, personne; mettre, boire; passé composé and direct object pronouns; savoir and infinitives; agreement of past participle with avoir."
    },
    {
        "id": 19,
        "img": "https://www.learner.org/wp-content/uploads/2019/02/French-Education2-Fig1-436x254.jpg",
        "title": "Education II",
        "desc": "Identification and description; talking about occupations; talking back; excusing oneself; expressing incredulity. Passé composé; plaire; negation with jamais, rien, personne; mettre, boire; passé composé and direct object pronouns; savoir and infinitives; agreement of past participle with avoir."
    },
    {
        "id": 20,
        "img": "https://www.learner.org/wp-content/uploads/2019/02/French-Education3-Fig1-436x254.jpg",
        "title": "Education III",
        "desc": "Identification and description; talking about occupations; talking back; excusing oneself; expressing incredulity. Passé composé; plaire; negation with jamais, rien, personne; mettre, boire; passé composé and direct object pronouns; savoir and infinitives; agreement of past participle with avoir."
    },
    {
        "id": 21,
        "img": "https://www.learner.org/wp-content/uploads/2019/02/French-GettingAround1-Fig1-436x254.jpg",
        "title": "Getting Around I",
        "desc": "Using the telephone; receiving invitations; expressing optimism and pessimism. Passé composé of reflexive verbs; passé composé with être; agreement of past participles; future."
    },
    {
        "id": 22,
        "img": "https://www.learner.org/wp-content/uploads/2019/02/French-GettingAround2-Fig1-436x254.jpg",
        "title": "Getting Around II",
        "desc": "Using the telephone; receiving invitations; expressing optimism and pessimism. Passé composé of reflexive verbs; passé composé with être; agreement of past participles; future."
    },
    {
        "id": 23,
        "img": "https://www.learner.org/wp-content/uploads/2019/02/French-FoodDrink1-Fig1-436x254.jpg",
        "title": "Food and Drink I",
        "desc": "Talking about food and drink; ordering in a restaurant; thanking hosts. Future of irregular verbs; relative pronouns quiand que; imperative with direct and indirect object pronouns; position of en with object pronouns; ne ... que;expressions of quantity; vowel change e/è."
    },
    {
        "id": 24,
        "img": "https://www.learner.org/wp-content/uploads/2019/02/French-FoodDrink2-Fig1-436x254.jpg",
        "title": "Food and Drink II",
        "desc": "Talking about food and drink; ordering in a restaurant; thanking hosts. Future of irregular verbs; relative pronouns quiand que; imperative with direct and indirect object pronouns; position of en with object pronouns; ne ... que;expressions of quantity; vowel change e/è."
    },
    {
        "id": 25,
        "img": "https://www.learner.org/wp-content/uploads/2019/02/French-FoodDrink3-Fig1-436x254.jpg",
        "title": "Food and Drink III",
        "desc": "Talking about food and drink; ordering in a restaurant; thanking hosts. Future of irregular verbs; relative pronouns quiand que; imperative with direct and indirect object pronouns; position of en with object pronouns; ne ... que;expressions of quantity; vowel change e/è."
    },
    {
        "id": 26,
        "img": "https://www.learner.org/wp-content/uploads/2019/02/French-Transportation1-Fig1-1-436x254.jpg",
        "title": "Transportation and Travel I",
        "desc": "Expressing fear; insisting; talking about means of transportation; talking about cars; expressing admiration; making suggestions. Pluperfect; conditional; conditional and imperfect; past conditional; compound tenses and past participles; agreement of past participles; expressions of time."
    },
    {
        "id": 27,
        "img": "https://www.learner.org/wp-content/uploads/2019/02/French-Transportation2-Fig1-1-436x254.jpg",
        "title": "Transportation and Travel II",
        "desc": "Expressing fear; insisting; talking about means of transportation; talking about cars; expressing admiration; making suggestions. Pluperfect; conditional; conditional and imperfect; past conditional; compound tenses and past participles; agreement of past participles; expressions of time."
    },
    {
        "id": 28,
        "img": "https://www.learner.org/wp-content/uploads/2019/02/French-Transportation3-Fig1-1-436x254.jpg",
        "title": "Transportation and Travel III",
        "desc": "Expressing fear; insisting; talking about means of transportation; talking about cars; expressing admiration; making suggestions. Pluperfect; conditional; conditional and imperfect; past conditional; compound tenses and past participles; agreement of past participles; expressions of time."
    },
    {
        "id": 29,
        "img": "https://www.learner.org/wp-content/uploads/2019/02/French-Transportation4-Fig1-1-436x254.jpg",
        "title": "Transportation and Travel IV",
        "desc": "Expressing fear; insisting; talking about means of transportation; talking about cars; expressing admiration; making suggestions. Pluperfect; conditional; conditional and imperfect; past conditional; compound tenses and past participles; agreement of past participles; expressions of time."
    },
    {
        "id": 30,
        "img": "https://www.learner.org/wp-content/uploads/2019/02/French-Transportation5-Fig1-1-436x254.jpg",
        "title": "Transportation and Travel V",
        "desc": "Expressing fear; insisting; talking about means of transportation; talking about cars; expressing admiration; making suggestions. Pluperfect; conditional; conditional and imperfect; past conditional; compound tenses and past participles; agreement of past participles; expressions of time."
    },
    {
        "id": 31,
        "img": "https://www.learner.org/wp-content/uploads/2019/02/French-Habitat1-Fig1-436x254.jpg",
        "title": "Habitat I",
        "desc": "Asking one's way; talking about housing; protesting; expressing satisfaction and dissatisfaction. Imperfect and passé composé; irregular imperatives; causative faire; faire versus rendre; en and present participle; ni ... ni."
    },
    {
        "id": 32,
        "img": "https://www.learner.org/wp-content/uploads/2019/02/French-Habitat2-Fig1-436x254.jpg",
        "title": "Habitat II",
        "desc": "Asking one's way; talking about housing; protesting; expressing satisfaction and dissatisfaction. Imperfect and passé composé; irregular imperatives; causative faire; faire versus rendre; en and present participle; ni ... ni."
    },
    {
        "id": 33,
        "img": "https://www.learner.org/wp-content/uploads/2019/02/French-Habitat3-Fig1-436x254.jpg",
        "title": "Habitat III",
        "desc": "Asking one's way; talking about housing; protesting; expressing satisfaction and dissatisfaction. Imperfect and passé composé; irregular imperatives; causative faire; faire versus rendre; en and present participle; ni ... ni."
    },
    {
        "id": 34,
        "img": "https://www.learner.org/wp-content/uploads/2019/02/French-Habitat4-Fig1-436x254.jpg",
        "title": "Habitat IV",
        "desc": "Asking one's way; talking about housing; protesting; expressing satisfaction and dissatisfaction. Imperfect and passé composé; irregular imperatives; causative faire; faire versus rendre; en and present participle; ni ... ni."
    },
    {
        "id": 35,
        "img": "https://www.learner.org/wp-content/uploads/2019/02/French-Transportation1-Fig1-436x254.jpg",
        "title": "Entertainment I",
        "desc": "Talking about entertainment; calming others down; expressing restriction; expressing reservations; expressing doubt; expressing enthusiasm. Indefinite expressions; subjunctive; subjunctive of irregular verbs; subjunctive with falloir and expressions of doubt; position of souvent, toujours, jamais; verbs in -yer; personne and rien as subjects and objects."
    },
    {
        "id": 36,
        "img": "https://www.learner.org/wp-content/uploads/2019/02/French-Transportation2-Fig1-436x254.jpg",
        "title": "Entertainment II",
        "desc": "Talking about entertainment; calming others down; expressing restriction; expressing reservations; expressing doubt; expressing enthusiasm. Indefinite expressions; subjunctive; subjunctive of irregular verbs; subjunctive with falloir and expressions of doubt; position of souvent, toujours, jamais; verbs in -yer; personne and rien as subjects and objects."
    },
    {
        "id": 37,
        "img": "https://www.learner.org/wp-content/uploads/2019/02/French-Transportation3-Fig1-436x254.jpg",
        "title": "Entertainment III",
        "desc": "Talking about entertainment; calming others down; expressing restriction; expressing reservations; expressing doubt; expressing enthusiasm. Indefinite expressions; subjunctive; subjunctive of irregular verbs; subjunctive with falloir and expressions of doubt; position of souvent, toujours, jamais; verbs in -yer; personne and rien as subjects and objects."
    },
    {
        "id": 38,
        "img": "https://www.learner.org/wp-content/uploads/2019/02/French-Transportation4-Fig1-436x254.jpg",
        "title": "Entertainment IV",
        "desc": "Talking about entertainment; calming others down; expressing restriction; expressing reservations; expressing doubt; expressing enthusiasm. Indefinite expressions; subjunctive; subjunctive of irregular verbs; subjunctive with falloir and expressions of doubt; position of souvent, toujours, jamais; verbs in -yer; personne and rien as subjects and objects."
    },
    {
        "id": 39,
        "img": "https://www.learner.org/wp-content/uploads/2019/02/French-Transportation5-Fig1-436x254.jpg",
        "title": "Entertainment V",
        "desc": "Talking about entertainment; calming others down; expressing restriction; expressing reservations; expressing doubt; expressing enthusiasm. Indefinite expressions; subjunctive; subjunctive of irregular verbs; subjunctive with falloir and expressions of doubt; position of souvent, toujours, jamais; verbs in -yer; personne and rien as subjects and objects."
    },
    {
        "id": 40,
        "img": "https://www.learner.org/wp-content/uploads/2019/02/French-GettingSpending1-Fig1-436x254.jpg",
        "title": "Getting and Spending I",
        "desc": "Talking about money; buying and selling; announcing good and bad news; expressing indifference; talking about good and bad luck; expressing preference. Subjunctive in conditional sentences with conjunctions in relative clauses; personne and rien with compound tenses; position of déjà and encore; plus rien, jamais rien; comparatives and superlatives; superlative and subjunctive; relative pronouns ce qui, ce que; demonstrative pronouns."
    },
    {
        "id": 41,
        "img": "https://www.learner.org/wp-content/uploads/2019/02/French-GettingSpending2-Fig1-436x254.jpg",
        "title": "Getting and Spending II",
        "desc": "Talking about money; buying and selling; announcing good and bad news; expressing indifference; talking about good and bad luck; expressing preference. Subjunctive in conditional sentences with conjunctions in relative clauses; personne and rien with compound tenses; position of déjà and encore; plus rien, jamais rien; comparatives and superlatives; superlative and subjunctive; relative pronouns ce qui, ce que; demonstrative pronouns."
    },
    {
        "id": 42,
        "img": "https://www.learner.org/wp-content/uploads/2019/02/French-GettingSpending3-Fig1-436x254.jpg",
        "title": "Getting and Spending III",
        "desc": "Talking about money; buying and selling; announcing good and bad news; expressing indifference; talking about good and bad luck; expressing preference. Subjunctive in conditional sentences with conjunctions in relative clauses; personne and rien with compound tenses; position of déjà and encore; plus rien, jamais rien; comparatives and superlatives; superlative and subjunctive; relative pronouns ce qui, ce que; demonstrative pronouns."
    },
    {
        "id": 43,
        "img": "https://www.learner.org/wp-content/uploads/2019/02/French-GettingSpending4-Fig1-436x254.jpg",
        "title": "Getting and Spending IV",
        "desc": "Talking about money; buying and selling; announcing good and bad news; expressing indifference; talking about good and bad luck; expressing preference. Subjunctive in conditional sentences with conjunctions in relative clauses; personne and rien with compound tenses; position of déjà and encore; plus rien, jamais rien; comparatives and superlatives; superlative and subjunctive; relative pronouns ce qui, ce que; demonstrative pronouns."
    },
    {
        "id": 44,
        "img": "https://www.learner.org/wp-content/uploads/2019/02/French-GettingSpending5-Fig1-436x254.jpg",
        "title": "Getting and Spending V",
        "desc": "Talking about money; buying and selling; announcing good and bad news; expressing indifference; talking about good and bad luck; expressing preference. Subjunctive in conditional sentences with conjunctions in relative clauses; personne and rien with compound tenses; position of déjà and encore; plus rien, jamais rien; comparatives and superlatives; superlative and subjunctive; relative pronouns ce qui, ce que; demonstrative pronouns."
    },
    {
        "id": 45,
        "img": "https://www.learner.org/wp-content/uploads/2019/02/French-Geography1-Fig1-436x254.jpg",
        "title": "Geography and Tourism I",
        "desc": "Talking about countries and regions; exaggerating; confirming; insisting; expressing perplexity. Conditional in intentional expressions; dont; pronoun tout; possessive pronouns; irregular subjunctives; subjunctive in subordinate clauses; future in the past; penser de versus penser á; articles and prepositions with geographical names."
    },
    {
        "id": 46,
        "img": "https://www.learner.org/wp-content/uploads/2019/02/French-Geography2-Fig1-436x254.jpg",
        "title": "Geography and Tourism II",
        "desc": "Talking about countries and regions; exaggerating; confirming; insisting; expressing perplexity. Conditional in intentional expressions; dont; pronoun tout; possessive pronouns; irregular subjunctives; subjunctive in subordinate clauses; future in the past; penser de versus penser á; articles and prepositions with geographical names."
    },
    {
        "id": 47,
        "img": "https://www.learner.org/wp-content/uploads/2019/02/French-Geography3-Fig1-436x254.jpg",
        "title": "Geography and Tourism III",
        "desc": "Talking about countries and regions; exaggerating; confirming; insisting; expressing perplexity. Conditional in intentional expressions; dont; pronoun tout; possessive pronouns; irregular subjunctives; subjunctive in subordinate clauses; future in the past; penser de versus penser á; articles and prepositions with geographical names."
    },
    {
        "id": 48,
        "img": "https://www.learner.org/wp-content/uploads/2019/02/French-Geography4-Fig1-436x254.jpg",
        "title": "Geography and Tourism IV",
        "desc": "Talking about countries and regions; exaggerating; confirming; insisting; expressing perplexity. Conditional in intentional expressions; dont; pronoun tout; possessive pronouns; irregular subjunctives; subjunctive in subordinate clauses; future in the past; penser de versus penser á; articles and prepositions with geographical names."
    },
    {
        "id": 49,
        "img": "https://www.learner.org/wp-content/uploads/2019/02/French-Geography5-Fig1-436x254.jpg",
        "title": "Geography and Tourism V",
        "desc": "Talking about countries and regions; exaggerating; confirming; insisting; expressing perplexity. Conditional in intentional expressions; dont; pronoun tout; possessive pronouns; irregular subjunctives; subjunctive in subordinate clauses; future in the past; penser de versus penser á; articles and prepositions with geographical names."
    },
    {
        "id": 50,
        "img": "https://www.learner.org/wp-content/uploads/2019/02/French-GettingAway1-Fig1-436x254.jpg",
        "title": "Getting Away I",
        "desc": "Referring to destination; levels of speech. Negative infinitive; imperatives and pronouns."
    },
    {
        "id": 51,
        "img": "https://www.learner.org/wp-content/uploads/2019/02/French-GettingAway2-Fig1-436x254.jpg",
        "title": "Getting Away II",
        "desc": "Referring to destination; levels of speech. Negative infinitive; imperatives and pronouns."
    }
]

export default episodes;