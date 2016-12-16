from channels.routing import route
from lovelive.consumers import ws_add, ws_echo, ws_disconnect

channel_routing = [
    route('websocket.connect', ws_add,
          path=r'^/lovelive/channel/(?P<room>\w+)$'),
    route('websocket.receive', ws_echo),
    route("websocket.disconnect", ws_disconnect),
]
