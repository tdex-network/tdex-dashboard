#!/bin/sh

sed -i 's#__USE_PROXY__#'"$USE_PROXY"'#g' /usr/share/caddy/html/index.html
sed -i 's#__PROXY_URL__#'"'$PROXY_URL'"'#g' /usr/share/caddy/html/index.html
sed -i 's#__IS_PACKAGED__#'"'$IS_PACKAGED'"'#g' /usr/share/caddy/html/index.html
sed -i 's#__TRADER_HIDDEN_SERVICE__#'"'$TRADER_HIDDEN_SERVICE'"'#g' /usr/share/caddy/html/index.html

exec "$@"