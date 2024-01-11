import React from "react";

const Section = (prop) => {
  const convertTarget = () => {
    console.log(prop.targetText);
    if (prop.targetText=="NoText") {
      console.log(prop.targetText);
    
    } else if(prop.targetText!=""){
       prop.convertToTargetLang();
    } else {
       alert("Opps! \nPlease Enter Some Text...  ");
    }
   
  };

  const handleSourceLanguage = () => {
    let selectedValue = document.getElementById("languageSource").value;
    prop.setSouceLanuage(selectedValue);
  };
  const handleTargetLanguage = () => {
    let selectedValue = document.getElementById("languageTarget").value;
    prop.setTargetLanuage(selectedValue);
  };

  const sourcetextValue = (e) => {
    prop.sourceText(e.target.value);
  };

  return (
    <section className="m-3">
      <div className="flex justify-center gap-5 max-lg:flex-col">
        <div>
          <img src="https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/gigs/203270966/original/e44a2716f4b2841f5147e7ec656af7f93e54e3e4/translate-and-speaking-and.png" />
        </div>
        <div className="flex justify-center items-center flex-col gap-5">
          <div className="flex gap-6 items-center max-lg:flex-col">
            <div className="flex gap-5 justify-center items-center ">
              <select
                className="border-2 py-1.5 px-1.5 bg-transparent font-bold text-blue-500"
                id="languageSource"
                onChange={handleSourceLanguage}
              >
                <option value="en">Select language</option>
                <option value="en">English</option>
                <option value="hi">Hindi</option>
                <option value="bn">Bengali</option>
                <option value="gu">Gujarati</option>
                <option value="mr">Marathi</option>
                <option value="af">Afrikaans</option>
                <option value="sq">Albanian</option>
                <option value="am">Amharic</option>
                <option value="ar">Arabic</option>
                <option value="hy">Armenian</option>
                <option value="az">Azerbaijani</option>
                <option value="eu">Basque</option>
                <option value="be">Belarusian</option>
                <option value="bn">Bengali</option>
                <option value="bs">Bosnian</option>
                <option value="bg">Bulgarian</option>
                <option value="ca">Catalan</option>
                <option value="ceb">Cebuano</option>
                <option value="ny">Chichewa</option>
                <option value="zh-CN">Chinese (Simplified)</option>
                <option value="zh-TW">Chinese (Traditional)</option>
                <option value="co">Corsican</option>
                <option value="hr">Croatian</option>
                <option value="cs">Czech</option>
                <option value="da">Danish</option>
                <option value="nl">Dutch</option>
                <option value="en">English</option>
                <option value="eo">Esperanto</option>
                <option value="et">Estonian</option>
                <option value="tl">Filipino</option>
                <option value="fi">Finnish</option>
                <option value="fr">French</option>
                <option value="fy">Frisian</option>
                <option value="gl">Galician</option>
                <option value="ka">Georgian</option>
                <option value="de">German</option>
                <option value="el">Greek</option>
                <option value="gu">Gujarati</option>
                <option value="ht">Haitian Creole</option>
                <option value="ha">Hausa</option>
                <option value="haw">Hawaiian</option>
                <option value="iw">Hebrew</option>
                <option value="hi">Hindi</option>
                <option value="hmn">Hmong</option>
                <option value="hu">Hungarian</option>
                <option value="is">Icelandic</option>
                <option value="ig">Igbo</option>
                <option value="id">Indonesian</option>
                <option value="ga">Irish</option>
                <option value="it">Italian</option>
                <option value="ja">Japanese</option>
                <option value="jw">Javanese</option>
                <option value="kn">Kannada</option>
                <option value="kk">Kazakh</option>
                <option value="km">Khmer</option>
                <option value="rw">Kinyarwanda</option>
                <option value="ko">Korean</option>
                <option value="ku">Kurdish (Kurmanji)</option>
                <option value="ky">Kyrgyz</option>
                <option value="lo">Lao</option>
                <option value="la">Latin</option>
                <option value="lv">Latvian</option>
                <option value="lt">Lithuanian</option>
                <option value="lb">Luxembourgish</option>
                <option value="mk">Macedonian</option>
                <option value="mg">Malagasy</option>
                <option value="ms">Malay</option>
                <option value="ml">Malayalam</option>
                <option value="mt">Maltese</option>
                <option value="mi">Maori</option>
                <option value="mr">Marathi</option>
                <option value="mn">Mongolian</option>
                <option value="my">Myanmar (Burmese)</option>
                <option value="ne">Nepali</option>
                <option value="no">Norwegian</option>
                <option value="or">Odia (Oriya)</option>
                <option value="ps">Pashto</option>
                <option value="fa">Persian</option>
                <option value="pl">Polish</option>
                <option value="pt">Portuguese</option>
                <option value="pa">Punjabi</option>
                <option value="ro">Romanian</option>
                <option value="ru">Russian</option>
                <option value="sm">Samoan</option>
                <option value="gd">Scots Gaelic</option>
                <option value="sr">Serbian</option>
                <option value="st">Sesotho</option>
                <option value="sn">Shona</option>
                <option value="sd">Sindhi</option>
                <option value="si">Sinhala</option>
                <option value="sk">Slovak</option>
                <option value="sl">Slovenian</option>
                <option value="so">Somali</option>
                <option value="es">Spanish</option>
                <option value="su">Sundanese</option>
                <option value="sw">Swahili</option>
                <option value="sv">Swedish</option>
                <option value="tg">Tajik</option>
                <option value="ta">Tamil</option>
                <option value="tt">Tatar</option>
                <option value="te">Telugu</option>
                <option value="th">Thai</option>
                <option value="tr">Turkish</option>
                <option value="tk">Turkmen</option>
                <option value="uk">Ukrainian</option>
                <option value="ur">Urdu</option>
                <option value="ug">Uyghur</option>
                <option value="uz">Uzbek</option>
                <option value="vi">Vietnamese</option>
                <option value="cy">Welsh</option>
                <option value="xh">Xhosa</option>
                <option value="yi">Yiddish</option>
                <option value="yo">Yoruba</option>
                <option value="zu">Zulu</option>
                <option value="he">Hebrew</option>
                <option value="zh">Chinese (Simplified)</option>
              </select>
            </div>

            <div className="flex gap-5 items-center">
              <select
                className="border-2 py-1.5  px-1.5 bg-transparent font-bold text-blue-500"
                id="languageTarget"
                onChange={handleTargetLanguage}
              >
                <option value="en">Select language</option>
                <option value="en">English</option>
                <option value="hi">Hindi</option>
                <option value="bn">Bengali</option>
                <option value="gu">Gujarati</option>
                <option value="mr">Marathi</option>
                <option value="af">Afrikaans</option>
                <option value="sq">Albanian</option>
                <option value="am">Amharic</option>
                <option value="ar">Arabic</option>
                <option value="hy">Armenian</option>
                <option value="az">Azerbaijani</option>
                <option value="eu">Basque</option>
                <option value="be">Belarusian</option>
                <option value="bn">Bengali</option>
                <option value="bs">Bosnian</option>
                <option value="bg">Bulgarian</option>
                <option value="ca">Catalan</option>
                <option value="ceb">Cebuano</option>
                <option value="ny">Chichewa</option>
                <option value="zh-CN">Chinese (Simplified)</option>
                <option value="zh-TW">Chinese (Traditional)</option>
                <option value="co">Corsican</option>
                <option value="hr">Croatian</option>
                <option value="cs">Czech</option>
                <option value="da">Danish</option>
                <option value="nl">Dutch</option>
                <option value="en">English</option>
                <option value="eo">Esperanto</option>
                <option value="et">Estonian</option>
                <option value="tl">Filipino</option>
                <option value="fi">Finnish</option>
                <option value="fr">French</option>
                <option value="fy">Frisian</option>
                <option value="gl">Galician</option>
                <option value="ka">Georgian</option>
                <option value="de">German</option>
                <option value="el">Greek</option>
                <option value="gu">Gujarati</option>
                <option value="ht">Haitian Creole</option>
                <option value="ha">Hausa</option>
                <option value="haw">Hawaiian</option>
                <option value="iw">Hebrew</option>
                <option value="hi">Hindi</option>
                <option value="hmn">Hmong</option>
                <option value="hu">Hungarian</option>
                <option value="is">Icelandic</option>
                <option value="ig">Igbo</option>
                <option value="id">Indonesian</option>
                <option value="ga">Irish</option>
                <option value="it">Italian</option>
                <option value="ja">Japanese</option>
                <option value="jw">Javanese</option>
                <option value="kn">Kannada</option>
                <option value="kk">Kazakh</option>
                <option value="km">Khmer</option>
                <option value="rw">Kinyarwanda</option>
                <option value="ko">Korean</option>
                <option value="ku">Kurdish (Kurmanji)</option>
                <option value="ky">Kyrgyz</option>
                <option value="lo">Lao</option>
                <option value="la">Latin</option>
                <option value="lv">Latvian</option>
                <option value="lt">Lithuanian</option>
                <option value="lb">Luxembourgish</option>
                <option value="mk">Macedonian</option>
                <option value="mg">Malagasy</option>
                <option value="ms">Malay</option>
                <option value="ml">Malayalam</option>
                <option value="mt">Maltese</option>
                <option value="mi">Maori</option>
                <option value="mr">Marathi</option>
                <option value="mn">Mongolian</option>
                <option value="my">Myanmar (Burmese)</option>
                <option value="ne">Nepali</option>
                <option value="no">Norwegian</option>
                <option value="or">Odia (Oriya)</option>
                <option value="ps">Pashto</option>
                <option value="fa">Persian</option>
                <option value="pl">Polish</option>
                <option value="pt">Portuguese</option>
                <option value="pa">Punjabi</option>
                <option value="ro">Romanian</option>
                <option value="ru">Russian</option>
                <option value="sm">Samoan</option>
                <option value="gd">Scots Gaelic</option>
                <option value="sr">Serbian</option>
                <option value="st">Sesotho</option>
                <option value="sn">Shona</option>
                <option value="sd">Sindhi</option>
                <option value="si">Sinhala</option>
                <option value="sk">Slovak</option>
                <option value="sl">Slovenian</option>
                <option value="so">Somali</option>
                <option value="es">Spanish</option>
                <option value="su">Sundanese</option>
                <option value="sw">Swahili</option>
                <option value="sv">Swedish</option>
                <option value="tg">Tajik</option>
                <option value="ta">Tamil</option>
                <option value="tt">Tatar</option>
                <option value="te">Telugu</option>
                <option value="th">Thai</option>
                <option value="tr">Turkish</option>
                <option value="tk">Turkmen</option>
                <option value="uk">Ukrainian</option>
                <option value="ur">Urdu</option>
                <option value="ug">Uyghur</option>
                <option value="uz">Uzbek</option>
                <option value="vi">Vietnamese</option>
                <option value="cy">Welsh</option>
                <option value="xh">Xhosa</option>
                <option value="yi">Yiddish</option>
                <option value="yo">Yoruba</option>
                <option value="zu">Zulu</option>
                <option value="he">Hebrew</option>
                <option value="zh">Chinese (Simplified)</option>
              </select>
            </div>
          </div>

          <div>
            <textarea
              rows="5"
              className=" border-2 border-dotted rounded-md max-w-96 p-5 bg-transparent font-bold text-blue-500 text-xl backdrop-blur-sm"
              placeholder="Please enter text ..."
              onChange={(e) => sourcetextValue(e)}
            ></textarea>
          </div>
          <div className="flex flex-col m-6 gap-6">
            <button
              className="border-blue-500 border-2 hover:bg-blue-500  max-px-6 py-2 font-serif font-bold rounded-lg "
              type="button"
              onClick={convertTarget}
            >
              Convert
            </button>
            <textarea
              rows="5"
              className="border-2 border-dotted rounded-md max-w-96 p-5 bg-transparent font-bold text-yellow-300 text-xl backdrop-blur-lg"
              placeholder="Click on Convert Button ..."
              value={prop.targetText}
            ></textarea>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section;
