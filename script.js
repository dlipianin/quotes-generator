function generate() {
  let quotes = {
    "- Alber Camus":
      '"The only way to deal with an unfree world is to become so absolutely free that your very existence is an act of rebellion."',
    "- Lewis B. Smedes":
      '"To forgive is to set a prisoner free and discover that the prisoner was you."',
    "- Denis Diderot":
      '"Man will never be free until the last king is strangled with the entrails of the last priest."',
    "- Voltaire":
      '"It is difficult to free fools from the chains they revere."',
    "- Michelangelo":
      '"I saw the angel in the marble and carved until I set him free."',
    "- Johann Wolfgang von Goethe":
      '"None are more hopelessly enslaved than those who falsely believe they are free."',
    "- Douglas Horton": '"Smile, it\'s free therapy."',
    "- John Stuart Mill":
      '"A man who has nothing for which he is willing to fight, nothing which is more important than his own personal safety, is a miserable creature and has no chance of being free unless made and kept so by the exertions of better men than himself."',
    "- Richard Bach":
      "\"If you love someone, set them free. If they come back they're yours; if they don't they never were.\"",
    "- Nelson Mandela":
      '"For to be free is not merely to cast off one\'s chains, but to live in a way that respects and enhances the freedom of others."',
    "- Milton Friedman": '"There\'s no such thing as a free lunch."',
    "- Maya Angelou":
      '"The truth is, no one of us can be free until everybody is free."',
    "- James A. Garfield":
      '"The truth will set you free, but first it will make you miserable."',
    "- Nikos Kazantzakis": '"I hope for nothing. I fear nothing. I am free."',
    "- Ayn Rand":
      '"We are fast approaching the stage of the ultimate inversion: the stage where the government is free to do anything it pleases, while the citizens may act only by permission; which is the stage of the darkest periods of human history, the stage of rule by brute force."',
    "- Bob Dylan": '"No one is free, even the birds are chained to the sky."',
    "- Muhammad Ali":
      "\"I know where I'm going and I know the truth, and I don't have to be what you want me to be. I'm free to be what I want.\"",
    "- Aristotle": '"The law is reason, free from passion."',
    "- Ronald Reagan":
      '"Above all, we must realize that no arsenal, or no weapon in the arsenals of the world, is so formidable as the will and moral courage of free men and women. It is a weapon our adversaries in today\'s world do not have."',
    "- Eric Hoffer":
      '"We feel free when we escape - even if it be but from the frying pan to the fire."',
    "- Epictetus": '"No man is free who is not master of himself."',
    "- Pythagoras":
      '"Concern should drive us into action and not into a depression. No man is free who cannot control himself."',
    "- Arthur Schopenhauer":
      '"A man can be himself only so long as he is alone, and if he does not love solitude, he will not love freedom, for it is only when he is alone that he is really free."',
    "- Brendan Behan":
      '"The big difference between sex for money and sex for free is that sex for money usually costs a lot less."',
    "- Rosa Parks":
      '"I would like to be remembered as a person who wanted to be free... so other people would be also free."',
    "- Jawaharlal Nehru":
      '"Life is like a game of cards. The hand you are dealt is determinism; the way you play it is free will."',
    "- Frederick Douglass":
      '"To suppress free speech is a double wrong. It violates the rights of the hearer as well as those of the speaker."',
    "- Aristotle Onassis":
      '"We must free ourselves of the hope that the sea will ever rest. We must learn to sail in high winds."',
    "- Robert A. Heinlein":
      '"I am free because I know that I alone am morally responsible for everything I do. I am free, no matter what rules surround me. If I find them tolerable, I tolerate them; if I find them too obnoxious, I break them. I am free because I know that I alone am morally responsible for everything I do."',
    "- Rose Kennedy":
      '"Birds sing after a storm; why shouldn\'t people feel as free to delight in whatever sunlight remains to them?"',
  };

  let authors = Object.keys(quotes);

  let author = authors[Math.floor(Math.random() * authors.length)];

  let quote = quotes[author];

  document.getElementById("quote").innerHTML = quote;
  document.getElementById("author").innerHTML = author;
}
