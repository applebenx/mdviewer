/* eslint-disable @typescript-eslint/explicit-function-return-type */

import { Panel, PanelGroup, PanelResizeHandle } from 'react-resizable-panels'

export function MainView() {
  return (
    <div className="mainview">
      <PanelGroup direction="horizontal">
        <Panel defaultSize={20} minSize={20}>
          left
        </Panel>
        <PanelResizeHandle />
        <Panel minSize={30}>middle</Panel>
        <PanelResizeHandle />
        <Panel defaultSize={20} minSize={20}>
          right
        </Panel>
      </PanelGroup>
    </div>
  )
}
