'use client';
import Provider from './../../../provider/Provider';
import Channel from './Channel';

function ChannelPage({ params: { channelId }}:ChannelpageProps) {
  return (
    <Provider>
      <Channel channelId={channelId} />
    </Provider>
  )
}

export default ChannelPage
