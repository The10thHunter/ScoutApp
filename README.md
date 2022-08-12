# FRC Scout App
## Quick guide: 
FRC Scouting App, being made by a group of current FRC students. The app creates data through an HTML website which uses script.js, index.html, and the assets directory to record data and then export the string via QR Code. The scouts access it by placing the files into an Apache webserver. After you have all the strings from the scouts' QR codes, you place them in a "strings.txt" file and then place all the following files along side  it: parser.py, data.py, compiler.py. Then run the following command in order to output the data: 	python3 compiler.py

## Setup - HTML

Install Apache2 and configure the website according to your specifications. This guide from [Ubuntu](https://ubuntu.com/tutorials/install-and-configure-apache#1-overview) works well. We'd recommend placing the website on a constantly running computer, not a laptop. The website, while designed to run without the central server, is dependant on the server if a scout closes or reloads the tab. The website is designed to work in "competition circumstances" which means that we are assuming a scout will at some point have internet but won't have consistent access. 

## Setup - Python

At this point we are assuming you don't have a "strings.txt" file and you are setting up for the first time. Download the python scripts and place them in a folder in which you know the location. Use pip to install pandas by running ``python3 -m pip install pandas``. Make sure you are installing the packages in a virtualenv folder in the same directory. If necessary, see the python documentation for reference, [Creating a Virtualenv](https://docs.python.org/3/library/venv.html). Whenever you need to process the data, you can import the strings file and name it "strings.txt" making sure that ``.txt`` is not the part of the name but the file extension. At this point all you have to do is run ``python3 compiler.py`` and then add in your ``column,value`` filter. If you'd like the global calculation, enter in ``Team #,all``.
