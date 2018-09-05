#!/bin/bash
Vuepress build
git add -A && git commit -a -m "add upload" && git push