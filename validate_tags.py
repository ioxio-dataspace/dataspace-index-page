import re
from pathlib import Path

ROOT = Path(__file__).parent
INDEX_HTML = ROOT / "public" / "index.html"
CONF_JS = ROOT / "src" / "conf.js"
PATTERN = r"\{\{.*?\..*?\}\}"


def main():
    index_entries = set(re.findall(PATTERN, INDEX_HTML.read_text()))
    conf_entries = set(re.findall(PATTERN, CONF_JS.read_text()))
    print("index.html", index_entries)
    print("conf.js", conf_entries)

    missing = [e for e in index_entries if e not in conf_entries]
    if missing:
        print(f"Please make sure {missing} are defined in conf.js file")
        exit(1)


if __name__ == "__main__":
    main()
