PLAIN ATLAS - READ ME FIRST

WHAT IS IN THIS FOLDER (you only ever touch the first one for daily work)
  src/countries/   YOUR WRITING. One file per country, for example mexico.md
  src/css/         THE LOOK (colors, fonts, spacing)
  src/js/          THE MAP'S BEHAVIOR (leave alone)
  src/_data/       THE LIST OF ALL 197 COUNTRIES (leave alone)
  everything else  THE MACHINERY THAT BUILDS THE SITE (leave alone)

HOW A COUNTRY GETS ITS PAGE
All 197 pages already exist. A country with no file in src/countries says
"No analysis has been published yet". The moment you add a file for it, the
page fills in and the country turns blue on the map.

The file name must match the country's address name, all lowercase:
  china.md   south-korea.md   united-states.md   cote-divoire.md
The exact names are in src/_data/countryList.json (the "slug" value).

HOW TO ADD A DAILY UPDATE
Open the country's file, find "## Update log", and add a new date heading ABOVE
the older ones. Old updates stay underneath. Then save/publish.

See TEMPLATE-copy-me.txt inside src/countries for a blank starting file.
