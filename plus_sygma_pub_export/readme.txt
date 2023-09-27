This folder includes a set of scripts to export PLUS publications into SYGMA
The export_publications.py script generates a publication csv file filtered by certain critera. It pulls directly from the plus plus_api to get the information. For more documentation see that file.
The publication csv is then imported into SYGMA using a Selenium/Kantu script.
To use it Kantu needs to be installed: https://chrome.google.com/webstore/detail/kantu-browser-automation/gcbalfbdmfieckjlnblleoemohcganoc?hl=en
The Kantu scripts can be found in the kantu_scripts folder
