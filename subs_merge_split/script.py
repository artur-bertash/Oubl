import os
import glob


OG_DIR = ""
MERGED = ""


def read_srt_blocks():
    with open(OG_DIR, "r", encoding="utf-8") as f:
        raw = f.read().strip()
        blocks = raw.split("\n\n")
    return blocks

def main():
    os.makedirs(os.path.dirname(MERGED), exist_ok=True)
    og_files = glob.glob(os.path.join(OG_DIR, "*.srt"))