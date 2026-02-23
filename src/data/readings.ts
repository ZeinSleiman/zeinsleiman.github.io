export interface ReadingItem {
  title: string;
  subtitle?: string;
  author: string;
  status: "read" | "onhold" | "future";
  bookLink?: string;
  year?: number;
}

export const readings: ReadingItem[] = [
  { title: "Becoming a Technical Leader", subtitle: "An Organic Problem Solving Approach", author: "Gerald M. Weinberg", status: "read", year: 2018 },
  { title: "Business Adventures", subtitle: "Twelve Classics from the World of Wall Street", author: "John Brooks", status: "read", bookLink: "https://www.amazon.ca/Business-Adventures-Twelve-Classic-Street/dp/1497644895", year: 2016 },
  { title: "Creativity, INC.", subtitle: "Overcoming the Unseen Forces that Stand in the Way of True Inspiration", author: "Ed Catmul", status: "read", bookLink: "http://www.creativityincbook.com/", year: 2017 },
  { title: "Crush It!", subtitle: "Cash in on your Passion", author: "Gary Vaynerchuk", status: "read", year: 2017 },
  { title: "Freakonomics", subtitle: "A Rogue Economist Explores The Hidden Side Of Everything", author: "Steven D. Levitt, Stephen J. Dubner", status: "read", bookLink: "http://freakonomics.com/books/", year: 2015 },
  { title: "The Lean Startup", subtitle: "How Today's Entrepreneurs Use Continuous Innovation to Create Radically Successful Businesses", author: "Eric Ries", status: "read", bookLink: "http://theleanstartup.com/", year: 2017 },
  { title: "It's Not About the Coffee", subtitle: "Lessons on Putting People First From a Life at Starbucks", author: "Howard Behar, Janet Goldstein, Howard Schultz", status: "read", bookLink: "http://howardbehar.com/its-not-about-the-coffee", year: 2016 },
  { title: "Peopleware", subtitle: "Productive Projects and Teams", author: "Tom DeMarco & Timothy Lister", status: "read", year: 2018 },
  { title: "Remote", subtitle: "Office Not Required", author: "Jason Fried, David Heinemeier Hansson", status: "read", bookLink: "https://37signals.com/remote", year: 2017 },
  { title: "Rework", author: "Jason Fried, David Heinemeier Hansson", status: "read", bookLink: "https://37signals.com/rework", year: 2017 },
  { title: "Steve Jobs", author: "Walter Isaacson", status: "read", bookLink: "http://www.goodreads.com/book/show/11084145-steve-jobs", year: 2015 },
  { title: "The $100 Startup", subtitle: "Reinvent the Way You Make a Living, Do What You Love, and Create a New Future", author: "Chris Guillebeau", status: "read", bookLink: "http://100startup.com/", year: 2017 },
  { title: "The Cheat Code", subtitle: "Going Off Script to Get More, Go Faster, and Shortcut Your Way to Success", author: "Brian Wong", status: "read", bookLink: "http://thecheatcodebook.com/", year: 2017 },
  { title: "The Four Agreements", subtitle: "A Practical Guide to Personal Freedom", author: "Don Miguel Ruiz", status: "read", bookLink: "http://www.toltecspirit.com/", year: 2017 },
  { title: "The Passionate Programmer", subtitle: "Creating a Remarkable Career in Software Development", author: "Chad Fowler", status: "read", bookLink: "http://www.goodreads.com/book/show/6399113-the-passionate-programmer", year: 2017 },
  { title: "The Phoenix Project", subtitle: "A Novel about IT, DevOps, and Helping Your Business Win", author: "Gene Kim, Kevin Behr, and George Spafford", status: "read", bookLink: "http://www.goodreads.com/book/show/17255186-the-phoenix-project", year: 2016 },
  { title: "The Steve Jobs Way", subtitle: "iLeadership for a New Generation", author: "Jay Elliot", status: "read", bookLink: "http://www.goodreads.com/book/show/10589332-the-steve-jobs-way", year: 2015 },
  { title: "Think Simple", subtitle: "How Smart Leaders Defeat Complexity", author: "Ken Segall", status: "read", bookLink: "http://www.goodreads.com/book/show/27036527-think-simple", year: 2016 },
  { title: "Together is Better", subtitle: "A little book of inspiration", author: "Simon Sinek", status: "read", year: 2017 },
  { title: "Zero to One", subtitle: "Notes On Startups, Or How to Build the Future", author: "Peter Thiel", status: "read", bookLink: "http://www.goodreads.com/book/show/18050143-zero-to-one", year: 2017 },
];
