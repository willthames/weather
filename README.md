# Rainfall graph generator

## Introduction

Provides two weather data parsers, `bom.py` and `had.py` that parse weather data from the Australian [Bureau of Meteorology (BOM)](http://www.bom.gov.au/) and the UK [Hadley Centre](http://www.metoffice.gov.uk/hadobs/hadukp/index.html)

I'm not going to check in the data to this repository, but the links are here. 

* [South East England Precipitation data](http://www.metoffice.gov.uk/hadobs/hadukp/data/daily/HadSEEP_daily_qc.txt)
 (Source: [Hadley rainfall data](http://www.metoffice.gov.uk/hadobs/hadukp/data/download.html)) 
* [April 2012 Brisbane Airport data](http://www.bom.gov.au/climate/dwo/201204/text/IDCJDW4020.201204.csv)
 (Source: [BOM data for Brisbane Airport](http://www.bom.gov.au/climate/dwo/IDCJDW4020.latest.shtml)) 
 
`had.rainfall` takes a data file, year, month and returns a [pandas][] DataFrame containing daily rainfall totals 

`bom.rainfall` takes a data file and returns a [pandas][] DataFrame containing daily rainfall totals

`cumulative.py` is a script that creates a side-by-side [matplotlib][] graph of cumulative rainfall April 2012 near Brisbane and in the South East of England

## Requirements

* [pandas][]
* [numpy][]
* [matplotlib][]

[pandas]: http://pandas.pydata.org/
[numpy]: http://numpy.scipy.org/
[matplotlib]: http://matplotlib.sourceforge.net/
