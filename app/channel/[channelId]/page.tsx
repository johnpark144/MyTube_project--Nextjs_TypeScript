'use client';
import Provider from './../../../provider/Provider';
import Channel from './Channel';

function ChannelPage({ params: { channelId } }: ChannelpageProps) {
  console.log('channelId--------------->', channelId);
  return (
    <Provider>
      <Channel channelId={channelId} />
    </Provider>
  );
}

export default ChannelPage;
