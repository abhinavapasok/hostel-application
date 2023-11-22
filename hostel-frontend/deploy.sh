#!/bin/sh


echo "Building app" 

npm run build

echo "Deplyoing..."


sudo rm -rf /var/www/51.20.190.70/*


sudo cp -r dist/* /var/www/51.20.190.70
sudo systemctl restart nginx

echo "Done" 