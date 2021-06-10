import os
import json
from google_trans_new import google_translator

folder = "webapp/i18n"
settingsFolder = "webapp"

def read_file():
    with open(os.path.join(settingsFolder, "manifest.json")) as settings:
        languageSettings = json.load(settings)
        targetLanguages = languageSettings['targetLanguages']

    filepath = os.path.join(folder, "i18n.properties")
    f = open(filepath, 'r')
    content = f.readlines()       
    f.close()
    return content, targetLanguages    


def write_file(content, targetlang):
    for lang in targetlang:
        filename = "i18n_"+lang+".properties"
        convContent = translate(content, lang)
        filepath = os.path.join(folder, filename)
        f = open(filepath, 'w',encoding='utf-8')
        f.writelines(convContent)        
        f.close()
    return ""

# Defining main function
def translate(content, lang):
    translator = google_translator()
    convtContent = []
    for str in content:
        if '=' in str:
            str = str.split('=')
            strCon = translator.translate(str[1], lang_tgt=lang)
            if type(strCon) == list:
                strCon = strCon[0]
            strCon = strCon+"\n"    
            conv = (str[0], strCon)
            sConvertedString = "=".join(conv)            
            convtContent.append(sConvertedString)
        else:
            convtContent.append(str)

    return convtContent
  
if __name__=="__main__":
    contents, targetLang = read_file()
    write_file(contents, targetLang)