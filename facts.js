var facts = [
  "When comparing median salaries, women working in STEM earn about 74% of what men working in STEM earn. from Thomas Insights",
  "The median pay for Black STEM workers is 78% of the median pay for White STEM workers. from Thomas Insights", 
"Women of color make up a minority of graduates with STEM degrees, with  Asian women representing 5.3%, Latinas representing 4.3%, Black women representing 2.9%, and American Indian/Alaskan Native women representing 0.1%. from Thomas Insights",
"Since 1990, the percentage of women working in computer fields has decreased from 32% to 25%. from Thomas Insights",
"According to a joint study conducted by the University of Maryland and Columbia Business School, companies that achieve gender diversity at their management levels can see an increase in value of up to $42 million. from Thomas Insights",
"Hispanics comprise 16% of the U.S. workforce but only 7% of all STEM workers. from Pew Research Center", 
"The majority of STEM workers in the U.S. are white (69%), followed by Asians (13%), blacks (9%) and Hispanics (7%). from Pew Research Center",
"Women make up only 26 percent of data and AI positions in the workforce. from World Economic Forum"
]

function newFact() {
  var randomNumber = Math.floor(Math.random() * (facts.length));
  document.getElementById("text-area").innerHTML = facts[randomNumber];
}