const isMonitoredWebsite = async (url) => {
    // given a url, return true/false if website has limit
    if (url.indexOf("facebook.com") != -1 || url.indexOf("twitter.com") != -1) return true;
    return false;
}

const isOverLimit = async (url) => {
    // given a url, return true/false if over limit
    if (url.indexOf("twitter.com") != -1) return true;
    return false;
}

const getTime = async (url) => {
    // given a url, return the approximate
    // hours spent on there
    return 2;
}

const mindful_popup = (url) => {
    const main_div = document.createElement('div');
    main_div.className = "mindful-background";
    const popup = document.createElement('div');
    popup.className = "mindful-popup";
    main_div.appendChild(popup);
    const title = document.createElement('h1');
    title.textContent = "Take a deep breath."
    popup.appendChild(title);
    const img = document.createElement('img');
    img.src = chrome.runtime.getURL("images/meditate.png");
    img.className = "mindful-meditate";
    popup.appendChild(img);
    const subtitle1 = document.createElement('p');
    subtitle1.textContent = "you're about to enter " + url;
    popup.appendChild(subtitle1);
    const subtitle2 = document.createElement('p');
    subtitle2.textContent = "take a moment to find yourself...";
    popup.appendChild(subtitle2);
    return main_div;
}

const time_popup = (url, time) => {
    const main_div = document.createElement('div');
    main_div.className = "mindful-background";
    const popup = document.createElement('div');
    popup.className = "mindful-popup";
    main_div.appendChild(popup);
    const title = document.createElement('h1');
    title.textContent = "Looks like you've passed your daily limit..."
    popup.appendChild(title);
    const img = document.createElement('img');
    img.src = chrome.runtime.getURL("images/relax.png");
    img.className = "mindful-relax";
    popup.appendChild(img);
    const subtitle1 = document.createElement('h3');
    subtitle1.textContent = "you've spent " + time + " hours on " + url;
    popup.appendChild(subtitle1);
    const cont = document.createElement('a');
    cont.textContent = "continue anyway";
    cont.onclick = () => {main_div.remove();}
    cont.href = "#";
    popup.appendChild(cont);
    return main_div;
}

const show_popup = async () => {
    if(await isMonitoredWebsite(window.location.href)) {
        if(await isOverLimit(window.location.href)) {
            const t = await getTime(window.location.href);
            const popup_element = time_popup(window.location.href, t);
            document.body.prepend(popup_element);

        } else {
            const popup_element = mindful_popup(window.location.href);
            document.body.prepend(popup_element);
            setTimeout(() => {
                popup_element.remove();
            }, 10000);
        }
    }
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', show_popup)
} else {
  show_popup()
}
