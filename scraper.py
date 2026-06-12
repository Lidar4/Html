import requests
from bs4 import BeautifulSoup
import json
import re

# বিশ্বের শীর্ষ ৫টি মোড ও প্রো অ্যাপ্লিকেশনের RSS ফিড সোর্স
urls = [
    "https://apkdone.com/feed/",
    "https://modapk.co/feed/",
    "https://getmodmods.com/feed/",
    "https://an1.com/feed/",
    "https://apkpure.com/feed"
]

master_apps = []

print("[+] বিশ্বের ৫টি মেগা সোর্স থেকে প্রো ও মোড অ্যাপস কালেক্ট করা হচ্ছে...")

for url in urls:
    try:
        response = requests.get(url, headers={'User-Agent': 'Mozilla/5.0'}, timeout=10)
        soup = BeautifulSoup(response.text, 'xml')
        items = soup.find_all('item')
        
        for item in items:
            title = item.title.text if item.title else "Unknown Pro App"
            link = item.link.text if item.link else "#"
            
            # শুধু প্রিমিয়াম, মোড, প্রো এবং এপিকে লেখা ফাইলগুলো ফিল্টার করা
            if any(word in title.lower() for word in ['mod', 'pro', 'premium', 'apk']):
                # ক্লিন অ্যাপের নাম বের করা
                clean_name = re.sub(r'\(.*?\)|\[.*?\]', '', title).strip()
                
                master_apps.append({
                    "name": clean_name,
                    "download_url": link
                })
    except Exception as e:
        print(f"[-] একটি সোর্স কানেক্ট হতে পারেনি, কিন্তু বাকিগুলো সচল আছে।")

# ডুপ্লিকেট নাম বাদ দেওয়া
unique_apps = []
seen_names = set()
for app in master_apps:
    if app['name'].lower() not in seen_names:
        seen_names.add(app['name'].lower())
        unique_apps.append(app)

# টার্মাক্স থেকে সরাসরি ডাটাবেজ ফাইলে সেভ করা
with open('apps.json', 'w', encoding='utf-8') as f:
    json.dump(unique_apps, f, ensure_ascii=False, indent=4)

print(f"[+] সফলভাবে {len(unique_apps)}টি লেটেস্ট প্রো অ্যাপ ডাটাবেজে যুক্ত হয়েছে!")
