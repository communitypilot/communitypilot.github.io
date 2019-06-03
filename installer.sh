#!/usr/bin/bash 

# Install continue.sh
# We can safely assume this file doesn't exist because if you're installing from the EON screen you've
# uninstalled the previous openpilot already which would delete this file
cd /data/data/com.termux/files
curl -XGET https://gist.githubusercontent.com/pjlao307/917b67c89196efb974463e603da36191/raw/f310f310b062ed16f1195605f5d11b6d86c7c4c3/continue.sh -O continue.sh
chmod +x continue.sh

# Clone the desired repo and compile it
rm -rf /data/openpilot
git clone https://github.com/commaai/openpilot.git /data/openpilot
cd /data/openpilot && make

# TODO: Make this more dynamic so when passing a flag to the install URL you can generate different repos to clone
# For example: 
#   https://install.communitypilot.dev/arne182 <= Install Arne's default openpilot repo
#   https://install.communitypilot.dev/kegman <= Install Kegman's default openpilot repo
#   https://install.communitypilot.dev/kegman/awesomerpilot <= Install Kegman's awesomerpilot branch of openpilot repo
