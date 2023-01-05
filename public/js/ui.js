/*
Component: j-Approve
Version: 1
Updated: 2022-11-27T15:23:01.000Z
Author: Peter Širka


Component: j-Box
Version: 1
Updated: 2022-12-02T12:21:46.000Z
Author: Peter Širka


Component: j-Clipboard
Version: 1
Updated: 2022-04-01T08:36:04.000Z
Author: Peter Širka


Component: j-ColorPicker
Version: 1
Updated: 2022-11-28T12:35:01.000Z
Author: Denis Granec


Component: j-Columns
Version: 1
Updated: 2021-02-08T13:27:17.000Z
Author: Peter Širka


Component: j-DataGrid
Version: 2
Updated: 2022-11-28T15:59:00.001Z
Author: Peter Širka


Component: j-DatePicker
Version: 1
Updated: 2022-11-28T09:41:23.000Z
Author: Peter Širka


Component: j-Directory
Version: 1
Updated: 2022-11-28T10:39:00.000Z
Author: Peter Širka


Component: j-DropdownList
Version: 1
Updated: 2022-11-28T11:00:03.000Z
Author: Peter Širka


Component: j-Edit
Version: 1
Updated: 2022-07-26T09:07:00.000Z
Author: Peter Širka


Component: j-Empty
Version: 1
Updated: 2022-11-28T11:20:05.000Z
Author: Peter Širka


Component: j-ErrorHandler
Version: 1
Updated: 2022-11-08T14:18:00.000Z
Author: Peter Širka


Component: j-Exec
Version: 1
Updated: 2022-06-24T09:25:00.000Z
Author: Peter Širka


Component: j-FileUploader
Version: 1
Updated: 2021-08-06T20:42:00.000Z
Author: Peter Širka


Component: j-Flow
Version: 1
Updated: 2022-11-28T12:56:00.000Z
Author: Peter Širka


Component: j-Icons
Version: 1
Updated: 2022-11-28T14:01:05.000Z
Author: Peter Širka


Component: j-Importer
Version: 1
Updated: 2022-09-08T13:36:00.000Z
Author: Peter Širka


Component: j-Input
Version: 1
Updated: 2022-12-02T22:35:21.000Z
Author: Peter Širka


Component: Intranet CSS
Version: 5
Updated: 2022-11-28T15:49:00.000Z
Author: Peter Širka


Component: j-Layout
Version: 1
Updated: 2022-10-22T10:38:50.000Z
Author: Peter Širka


Component: j-Loading
Version: 1
Updated: 2022-09-06T09:42:00.000Z
Author: Peter Širka


Component: j-Locale
Version: 1
Updated: 2022-08-16T11:04:00.000Z
Author: Peter Širka


Component: j-Menu
Version: 1
Updated: 2022-11-28T09:38:00.000Z
Author: Peter Širka


Component: j-Message
Version: 1
Updated: 2022-11-28T09:35:01.000Z
Author: Peter Širka


Component: j-MiniForm
Version: 2
Updated: 2022-12-02T12:22:19.000Z
Author: Peter Širka


Component: j-Movable
Version: 1
Updated: 2022-04-06T09:48:58.000Z
Author: Peter Širka


Component: j-Notify
Version: 1
Updated: 2022-11-28T08:40:00.000Z
Author: Peter Širka


Component: j-ObjectTree
Version: 1
Updated: 2022-11-28T08:30:00.000Z
Author: Martin Smola


Component: j-Part
Version: 1
Updated: 2022-09-07T21:53:00.000Z
Author: Peter Širka


Component: j-Properties
Version: 1
Updated: 2022-11-28T07:07:03.000Z
Author: Peter Širka


Component: j-RadioButtonExpert
Version: 1
Updated: 2021-07-12T21:43:00.001Z
Author: Denis Granec


Component: j-Search
Version: 1
Updated: 2022-02-04T14:31:02.000Z
Author: Peter Širka


Component: j-SearchInput
Version: 1
Updated: 2022-11-26T14:51:03.000Z
Author: Peter Širka


Component: Tangular-Color
Version: 1
Updated: {dateupdated}
Author: Peter Širka


Component: Tangular-JsonFormat
Version: 1
Updated: 2022-04-29T11:29:00.000Z
Author: Peter Širka


Component: j-Validate
Version: 1
Updated: 2022-08-23T15:28:01.000Z
Author: Peter Širka


Component: j-ViewBox
Version: 1
Updated: 2022-06-07T10:08:00.000Z
Author: Peter Širka


Component: j-Windows
Version: 1
Updated: 2022-11-28T14:42:00.000Z
Author: Peter Širka
*/

CSS(`.ui-approve-noscroll, .ui-approve-noscroll body { overflow: hidden; }
.ui-approve { background-color: rgba(255,255,255,0.9); position: fixed; left: 0; right: 0; bottom: 0; top: 0; z-index: 100; width: 100%; display: table; height: 100%; transition: 0.5s all; opacity: 0; }
.ui-approve > div { display: table-cell; vertical-align: middle; text-align: center; color: #FFF; padding: 15px; }
.ui-approve-body { color: #000; padding: 0; position: relative; display: inline-block; max-width: 300px; text-align: left; transform: scale(0.8); transition: 0.15s all; border: 0; background-color: #FFF; box-shadow: 0 0 30px rgba(0,0,0,0.1);}
.ui-approve-content { padding: 50px 30px; text-align: center; }
.ui-approve-content > i { font-size: 50px; display: block; margin-bottom: 10px; }
.ui-approve-buttons { height: 40px; }
.ui-approve button { font-size: 12px; float: left; cursor: pointer; outline: 0; background-color: #E0E0E0; border: 0; border-radius: 0; color: gray; padding: 0; width: 50%; height: 40px; font-weight: normal; margin: 0; overflow: hidden; white-space: nowrap; text-overflow: ellipsis; }
.ui-approve button i { margin-right: 5px; }
.ui-approve button:hover { opacity: 0.9; }
.ui-approve-close { position: absolute; color: #C0C0C0; font-size: 11px; right: 8px; top: 5px; cursor: pointer; }
.ui-approve-close:hover { color: #A0A0A0; }
.ui-approve-visible { opacity: 1; }
.ui-approve-visible .ui-approve-body { -webkit-transform: scale(1); transform: scale(1); }
.ui-approve-click { transform: scale(1.07) !important; }

.ui-dark .ui-approve { background-color: rgba(0,0,0,0.9) }
.ui-dark .ui-approve-body { background-color: #202020; }
.ui-dark .ui-approve-content { border-bottom-color: #303030; color: #FFF; }
.ui-dark .ui-approve button { background-color: #505050; color: #C0C0C0; }
.ui-dark .ui-approve-close { color: #505050; }
.ui-dark .ui-approve-close:hover { color: #888; }

.ui-approve button[data-index='0'] { color: #FFF; font-weight: bold; font-weight: bold; background-color: #EC2C28; }

@media(max-width: 340px) {
	.ui-approve button { display: block; margin: 8px 0 0; display: block; width: 100%; height: 34px; font-size: 13px; }
}

.ui-box-noscroll, .ui-box-noscroll body { overflow: hidden; }
.ui-box-container { width: 100%; position: fixed; left: 0; top: 0; bottom: 0; right: 0; z-index: 5; overflow: hidden; transform-style: preserve-3d; }
.ui-box-bg { background-color: rgba(230,233,237,0.8);  }
.ui-box-nobg .ui-box { border: 1px solid #E9E9E9; }
.ui-box-transparent { pointer-events: none; }
.ui-box { background-color: #FFF; border-radius: 3px; box-shadow: 0 10px 30px rgba(0,0,0,0.1); transform: scale(0); transition: all 0.15s; opacity: 0; text-align: left; position: relative; margin: 0 auto; pointer-events: all; }
.ui-box-animate { transform: scale(1); opacity: 1; }
.ui-box-title { padding: 0 10px 0 var(--gap); line-height: 57px; font-size: 16px; user-select: none; color: #000; background-color: #FFF; border-bottom: 1px solid #E0E0E0; height: 58px; border-radius: 3px 3px 0 0; }
.ui-box-title .ui-box-button-close { float: right; cursor: pointer; font-size: 18px; margin: 1px 0 0; background: none; border: 0; outline: 0; height: auto; color: red; text-align: right !important; width: 20px; padding: 0; }
.ui-box-title .ui-box-button-close i { font-weight: bold; }
.ui-box-title .ui-box-button-close:hover { transform: scale(1.1); }
.ui-box-title > nav { float: right; margin-right: 18px; font-size: 14px; }
.ui-box-title > span { font-weight: bold; }
.ui-box-title > nav button { border: 0; margin: 15px 0 0; background-color: #F0F0F0; height: 28px; padding: 0 10px; color: #000; cursor: pointer; font-family: Arial; line-height: 23px; vertical-align: middle; outline: 0; font-size: 12px; text-decoration: none; transition: all 0.3s; float: left; border-left: 1px solid #E0E0E0; }
.ui-box-title > nav button i { width: 12px; text-align: center; margin-right: 5px; }
.ui-box-title > nav button:hover { opacity: 0.8; }
.ui-box-title > nav button:active { background-color: #D0D0D0; }
.ui-box-title > nav button:disabled { background-color: #F5F5F5 !important; border-color: #E0E0E0 !important; color: silver !important; cursor: not-allowed; box-shadow: none; }
.ui-box-title > nav button:disabled i { color: silver !important; }
.ui-box-title > nav button:first-child { border-top-left-radius: var(--radius); border-bottom-left-radius: var(--radius); border-left: 0; }
.ui-box-title > nav button:last-child { border-top-right-radius: var(--radius); border-bottom-right-radius: var(--radius); }
.ui-box-title i { margin-right: 7px; }
.ui-box > nav { padding: 0 15px 0; border-top: 1px solid #E0E0E0; background-color: #FFF; border-radius: 0 0 3px 3px; line-height: 65px; height: 65px; display: block; float: none; width: 100%; }
.ui-box > nav button { border: 0; margin: 15px 0 0; background-color: #F0F0F0; height: 34px; padding: 0 20px; color: #000; cursor: pointer; font-family: Arial; line-height: 34px; vertical-align: middle; outline: 0; font-size: 14px; text-decoration: none; transition: all 0.3s; float: left; width: 50%; }
.ui-box > nav button i { width: 15px; text-align: center; margin-right: 5px; }
.ui-box > nav button:hover { opacity: 0.8; }
.ui-box > nav button:active { background-color: #D0D0D0; }
.ui-box > nav button:disabled { background-color: #F5F5F5 !important; border-color: #E0E0E0 !important; color: silver !important; cursor: not-allowed; box-shadow: none; }
.ui-box > nav button:disabled i { color: silver !important; }
.ui-box > nav button:first-child { border-top-left-radius: var(--radius); border-bottom-left-radius: var(--radius); }
.ui-box > nav button:last-child { border-top-right-radius: var(--radius); border-bottom-right-radius: var(--radius); }
.ui-box > nav button[name='submit'] { font-weight: bold; background-color: var(--color); color: #FFF; }
.ui-box-style-2 .ui-box { border-bottom-right-radius: 0; border-bottom-left-radius: 0; }
.ui-box-style-3 .ui-box { border-top-right-radius: 0; border-top-left-radius: 0; }
.ui-box-align-left { margin: 0 auto 0 0; }
.ui-box-align-right { margin: 0 0 0 auto; }

.ui-dark .ui-box { background-color: #202020; }
.ui-dark .ui-box-container { background-color: rgba(50,50,50,0.9); }
.ui-dark .ui-box-title { background-color: #202020; border-bottom-color: #303030; color: #FFF; }
.ui-dark .ui-box-title > nav { background-color: #202020; border-top-color: #303030; }
.ui-dark .ui-box-title > nav button { border-color: #404040; background-color: #505050; color: #E0E0E0; }
.ui-dark .ui-box-title > nav button:active { background-color: #404040; }
.ui-dark .ui-box-title > nav button:disabled i { color: #606060 !important; }
.ui-dark .ui-box-title > nav button:disabled { background-color: #303030 !important; color: #606060 !important; border-color: #202020 !important; }
.ui-dark .ui-box > nav { background-color: #202020; border-top-color: #303030; }
.ui-dark .ui-box > nav button { border-color: #202020; background-color: #505050; color: #F0F0F0; }
.ui-dark .ui-box > nav button[name='submit'] { background-color: var(--color); }
.ui-dark .ui-box > nav button:active { background-color: #404040; }
.ui-dark .ui-box > nav button:disabled i { color: #606060 !important; }
.ui-dark .ui-box > nav button:disabled { background-color: #303030 !important; color: #606060 !important; border-color: #202020 !important; }

@media(max-width: 767px) {
	.ui-box-container { background: none; padding: 0 !important; }
	.ui-box { border-radius: 0; max-width: none !important; width: 100% !important; }
}

.ui-clipboard { position: absolute; left: -100px; top: -100px; height: 1px; width: 1px; }

.ui-colorpicker-container { position: absolute; z-index: 109; }
.ui-colorpicker { border: 1px solid #E0E0E0; font-size: 14px; color: #000; width: 254px; background-color: #FFF; box-shadow: 0 5px 10px rgba(0,0,0,0.08); border-radius: var(--radius); overflow: hidden; margin: 0; padding: 7px 0 3px; }
.ui-colorpicker-body { text-align: center; }
.ui-colorpicker-body div:nth-child(1) { margin-bottom: 0; }
.ui-colorpicker-body div:nth-child(2) { margin-bottom: 8px; padding-bottom: 2px; border-bottom: 1px solid #E0E0E0; }
.ui-colorpicker-cell { cursor: pointer; width: 20px; height: 16px; display: inline-block; vertical-align: top; }
.ui-colorpicker-cell span { display: block; height: 16px; margin: 0 2px; border-radius: 2px; border: 1px solid rgba(0,0,0,0.1); font-size: 9px; line-height: 15px; color: red; }
.ui-colorpicker-body span:hover { border-color: rgba(0,0,0,0.3); }

.ui-dark .ui-colorpicker { background-color: #252525; border-color: #404040; }
.ui-dark .ui-colorpicker-cell span { border-color: rgba(255,255,255,0.1); }
.ui-dark .ui-colorpicker-cell span:hover { border-color: rgba(255,255,255,0.5); }
.ui-dark .ui-colorpicker-body div:nth-child(2) { border-bottom-color: #404040; }

.ui-columns > section { float: left; border-left: 1px solid #E0E0E0; }
.ui-columns > section:first-child { border-left: 0; }
.ui-columns-noborder > section { border-left: 0 !important; }

.ui-dark .ui-columns > section { border-left-color: #404040; }

.dg { color: #000; position: relative; visibility: hidden; background-color: #FFF; }
.dg-body { outline: 0 !important; background-color: #FFF; }
.dg .ui-scrollbar-y { margin-top: 54px; }
.dg .dg-header-scrollbar > .ui-scrollbar-area { overflow-y: hidden; }
.dg .dg-body-scrollbar > .ui-scrollbar-area { overflow-x: hidden; }
.dg-container { overflow: hidden; border-top: 1px solid #E0E0E0; border-left: 1px solid #E0E0E0; border-right: 1px solid #E0E0E0; position: relative; }
.jc-19 .dg-container { border-bottom: 1px solid #E0E0E0; }
.dg-mobile .dg-container { border-right: 1px solid #E0E0E0; border-bottom: 1px solid #E0E0E0; }
.dg-header { position: relative; border-bottom: 1px solid #E0E0E0; }
.dg-hrow { height: 53px; }
.dg-hcol { float: left; border-left: 1px solid #E0E0E0; height: 54px; font-weight: bold; position: relative; }
.dg-sort { float: right; font-size: 11px; width: 20px; text-align: center; padding: 9px 0 0 0; color: var(--color); }
.dg-monospace { font-family: Menlo,Consolas,monospace; font-size: 11px; }
.dg-btn-columns { cursor: pointer; color: #D0D0D0; font-size: 20px; position: absolute; right: 0; height: 55px; background-color: #D0D0D0; width: 13px; text-align: left; z-index: 3; }
.dg-btn-columns span { display: block; padding-top: 4px; font-size: 6px; color: gray; text-align: center; }
.dg-btn-columns i { position: absolute; margin-left: -5px; top: 26px; }
.dg-btn-columns:hover { background-color: #D9D9D9; color: #D9D9D9; }
.dg-sorting { cursor: pointer; }
.dg-sorting .ti-sort { color: gray; }
.dg-hcol:first-child { border-left: 0; }
.dg-resize { position: absolute; width: 10px; cursor: col-resize; height: 30px; border-right: 1px solid #D0D0D0; z-index: 2; }
.dg-label { padding: 8px 8px 0; height: 30px; font-size: 12px; user-select: none; text-overflow: ellipsis; white-space: nowrap; overflow: hidden; }
.dg-sorting .dg-label.center { padding-left: 25px; padding-right: 0; }
.dg-sorting .dg-label { margin-right: 24px; }
.dg-filter { padding: 0 8px; border-top: 1px solid #E0E0E0; height: 23px; }
.dg-filter input, .dg-filter label { width: 100%; outline: 0; font-size: 10px; background-color: transparent; border: 0; margin: 0; padding: 0; line-height: 23px; height: 23px; }
.dg-filter label { color: #A0A0A0; cursor: pointer; display: block; text-overflow: ellipsis; overflow: hidden; white-space: nowrap; }
.dg-filter.center input { text-align: center; }
.dg-filter.right input { text-align: right; }
.dg-filter-empty { border-top: 1px solid #E0E0E0; height: 23px; cursor: not-allowed !important; background: repeating-linear-gradient(45deg,#FFF,#FFF 10px,#F9F9F9 10px,#F9F9F9 20px); }
.dg-hcol .dg-label { padding-top: 7px; }
.dg-filter-selected { background-color: #FBF0CA !important; }
.dg-filter-selected label { color: #000; }
.dg-filter i { position: absolute; right: 8px; margin-top: 6px; font-size: 10px; color: red; display: none; cursor: pointer; }
.dg-filter-selected i { display: block; }
.dg-filter-selected input { padding-right: 12px; }
.dg-clickable .dg-row { cursor: pointer; }
.dg-row { height: 28px; font-size: 12px; border-bottom: 1px solid #E0E0E0; -webkit-transform: translateZ(0); }
.dg-row-changed { background-color: rgba(208,31,33,0.07); }
.dg-row.dg-selected { background-color: rgba(249,232,196,0.5) !important; }
.dg-col { float: left; border-left: 1px solid #E0E0E0; height: 27px; overflow: hidden; min-width: 30px; }
.dg-col:first-child { border-left: 0; }
.dg-col-changed { background-image: url(data:image/gif;base64,R0lGODdhBgAGAIAAAP8mAAAAACH5BAEAAAEALAAAAAAGAAYAAAIKhI8QGGvt4JKhAAA7); background-repeat: no-repeat; background-position: 0 0; }
.dg-value { padding: 6px 8px 0; text-overflow: ellipsis; overflow: hidden; white-space: nowrap; height: 28px; }
.dg-number { padding: 6px 5px 0; font-size: 11px; text-align: right; height: 28px; color: #A0A0A0; }
.dg-col--1 { width: 40px; }
.dg-col--1 .dg-label { text-overflow: clip; }
.dg-row-empty { height: 28px; font-size: 12px; border-bottom: 1px solid #F0F0F0; background-color: #FFF !important; cursor: default; }
.dg-footer { border: 1px solid #E0E0E0; border-top: 0; height: 32px; }
.dg-pagination { float: left; }
.dg-pagination button { background-color: #FFF; border: 0; border-left: 1px solid #E0E0E0; height: 31px; width: 34px; color: #000; font-size: 12px; text-align: center; outline: 0; }
.dg-pagination button:hover { background-color: #F0F0F0; }
.dg-pagination button:disabled { background-color: #F9F9F9; color: #A0A0A0; }
.dg-pagination button:first-child { border-left: 0; }
.dg-pagination button[name='page-prev'] { border-right: 1px solid #E0E0E0; width: 34px; }
.dg-pagination button[name='page-last'] { border-right: 1px solid #E0E0E0; }
.dg-pagination input { width: 40px; text-align: center; border: 0; outline: 0; font-size: 12px; padding: 0; margin: 0; background: transparent; }
.dg-pagination > div { position: relative; display: inline-block; }
.dg-pagination-items { float: right; font-size: 12px; margin: 7px 10px 0 0; font-weight: bold; }
.dg-pagination-pages { float: left; font-size: 12px; margin: 7px 0 0 10px; }
.dg-visible { visibility: visible; }
.dg-columns { position: absolute; right: 0; top: 35px; width: 182px; background-color: #FFF; z-index: 1; box-shadow: 0 5px 20px rgba(0,0,0,0.1); border-radius: var(--color); font-size: 12px; line-height: 16px; z-index: 6; color: #000; border: 1px solid #E0E0E0; user-select: none; }
.dg-columns-checkbox > span { border-radius: var(--radius); border: 1px solid #D0D0D0; margin: 2px 5px 0 0; font-size: 8px; color: #FFF; width: 12px; height: 12px; line-height: 12px; float: left; text-align: center; }
.dg-columns-checkbox > span i { visibility: hidden; }
.dg-columns-checkbox-checked > span { background-color: #000; border-color: #000; }
.dg-columns-checkbox-checked > span i { visibility: visible; }
.dg-columns > div { border-bottom: 1px solid #D0D0D0; overflow: hidden; }
.dg-columns-body { max-height: 180px; overflow-scrolling: touch; overflow-y: auto; padding: 8px 50px 10px 3px; width: 210px; overflow-x: hidden; }
.dg-columns label { display: block; cursor: pointer; overflow-x: hidden; text-overflow: ellipsis; white-space: nowrap; }
.dg-columns label input { vertical-align: middle; }
.dg-columns label span { vertical-align: middle; margin-left: 5px; }
.dg-columns-button { margin: 10px 10px 0; display: block; width: 160px; background-color: #000; border-radius: var(--radius); color: #FFF; border: 0; font-size: 11px; height: 24px; }
.dg-columns-button:hover { background-color: #404040; }
.dg-columns-button i { margin-right: 6px; }
.dt-columns-reset { display: block; font-size: 11px; padding: 3px 0 8px 10px; cursor: pointer; color: #888888; }
.dt-columns-reset:hover { text-decoration: underline; }
.dg-hcol .dg-checkbox { margin-top: 0; }
.dg-checkbox { width: 15px; height: 15px; border: 1px solid #D0D0D0; vertical-align: middle; font-size: 11px; text-align: center; padding: 1px 0 0 1px; background-color: #FFF; border-radius: var(--radius); margin: 5px auto 0; }
.dg-checkbox i { display: none; }
.dg-checked { background-color: var(--color); border-color: var(--color); color: #FFF; }
.dg-checked i { display: block; }
.dg-required:before { content: '*'; font-size: 14px; color: red; font-weight: bold; margin-right: 3px; vertical-align: top; }
.dg input:-ms-input-placeholder { color: #A0A0A0 !important; }
.dg input::placeholder { color: #A0A0A0; opacity: 1; }
.dg input::-ms-input-placeholder { color: #A0A0A0 !important; }
.dg-col button { margin: 4px 0 0; border: 0; background-color: #FFF; font-size: 10px; color: #404040; height: 19px; border: 1px solid #E0E0E0; border-left: 0; padding: 0 3px; outline: 0; line-height: 10px; min-width: 20px; }
.dg-col button:hover { background-color: var(--color); color: #FFF; }
.dg-col button[name='remove'] { background-color: #ffe5dd; color: red; }
.dg-col button[name='remove']:hover { background-color: red; color: #FFF; }
.dg-col button:first-child { border-top-left-radius: 3px; border-bottom-left-radius: 3px; border-left: 1px solid #E0E0E0; }
.dg-col button:last-child { border-top-right-radius: 3px; border-bottom-right-radius: 3px; }
.dg-col button:disabled { background-color: #F0F0F0 !important; color: silver !important; cursor: not-allowed; }
.dg-editable .dg-checkbox { position: relative; display: inline-block; margin-left: 5px; margin-right: 5px; }
.dg-editable > div > .dg-checkbox { border-color: var(--color); }
.dg-bool { height: 28px; }
.dg-bool .dg-checked { background-color: #D0D0D0; border-color: #D0D0D0; color: gray; }
.dg-editable { background-color: rgba(255,241,164,0.1); }
.dg-editable input { width: 100%; height: 28px; background-color: transparent; border: 0; outline: 0; padding: 0 4px; }
.dg-noscroll .ui-scrollbar-area { overflow-y: hidden; }
.dg-noscroll .ui-scrollbar-y span { visibility: hidden; }
.dg-noborder .dg-container { border: 0; }
.dg-noborder .dg-footer { border: 0; border-top: 1px solid #E0E0E0; }
.dg-header-scrollbar { overflow-y: hidden; }
.dg-header-scrollbar-container { height: 58px; overflow: hidden; }
.dg-resize-line { position: absolute; width: 1px; background-color: #E0E0E0; z-index: 6; }
.dg-colorize { padding: 2px 3px; border-radius: var(--radius); color: #FFF; }
.dg-fluid { border-right: 1px solid #E0E0E0; }
.dg-noborder.dg-fluid { border-right: 0; }
.dg-link { color: inherit; }
.dg-link i { margin-right: 5px; }
.dg-controls { position: absolute; right: 20px; background-color: #FFF; border: 1px solid #D0D0D0; height: 34px; color: #000; z-index: 1; margin-right: 5px; border-radius: var(--radius); box-shadow: 1px 0 15px rgba(0,0,0,0.1); transition: all 0.1s; transform: scale(0); }
.dg-controls button { border: 0; min-width: 34px; height: 32px; background-color: #F0F0F0; border-left: 1px solid #E0E0E0; background-color: transparent; font-size: 12px; float: left; color: #000; padding: 0 10px; }
.dg-controls button i { font-size: 14px; }
.dg-controls button span { padding: 0 5px; }
.dg-controls button:hover { background-color: #F0F0F0; }
.dg-controls button:first-child { border-left: 0; }
.dg-controls button:disabled { color: #A0A0A0; cursor: not-allowed; background-color: transparent !important; }
.dg-controls button:disabled i { color: #A0A0A0 !important; }
.dg-controls-visible { transform: scale(1); }
.dg-row:hover, .dg-row-hover { background-color:rgba(130,130,130,0.07); }

.ui-dark .dg, .ui-dark .dg-body { background-color: #232323; }
.ui-dark .dg-footer { border-color: #404040; }
.ui-dark .dg-container { border-top-color: #353535; border-left-color: #353535; border-right-color: #353535; }
.jc-19.ui-dark .dg-container { border-bottom-color: #353535; }
.ui-dark .dg-mobile .dg-container { border-right-color: #404040; border-bottom-color: #404040; }
.ui-dark .dg-header { border-bottom-color: #353535; }
.ui-dark .dg-noborder .dg-footer { border-color: #404040; }
.ui-dark .dg-filter-selected { background-color: #3c3a32 !important; color: #FFF; }
.ui-dark .dg-filter-selected label { color: #FFF; }
.ui-dark .dg { color: #E0E0E0; }
.ui-dark .dg-sorting .ti-sort { color: #A0A0A0; }
.ui-dark .dg-filter { border-top-color: #353535; }
.ui-dark .dg-resize { border-right-color: #353535; }
.ui-dark .dg-filter-empty { border-top-color: #353535; height: 23px; background: repeating-linear-gradient(45deg,#252525,#252525 10px,#202020 10px,#202020 20px); }
.ui-dark .dg-number { background-color: #282828; }
.ui-dark .dg-col { border-left-color: #353535; }
.ui-dark .dg-hcol { border-left-color: #353535; }
.ui-dark .dg-hrow { color: #F0F0F0; }
.ui-dark .dg-row-empty { background-color: #202020 !important; border-bottom-color: #353535; }
.ui-dark .dg-row { border-bottom-color: #353535; }
.ui-dark .dg-selected { background-color: rgba(200,200,200,0.06) !important; }
.ui-dark .dg-columns { background-color: #232323; color: #FFF; border-color: #505050; }
.ui-dark .dg-columns-checkbox > span { border-color: #505050; color: #202020; }
.ui-dark .dg-columns-checkbox-checked > span { background-color: #505050; border-color: #505050; color: #D0D0D0; }
.ui-dark .dg-columns > div { border-bottom-color: #505050; }
/*.ui-dark .dg-body > div > div:nth-child(even) > .dg-row  { background-color: rgba(0,0,0,0.1); }*/
.ui-dark .dg-row-changed:hover { background-color: rgba(208,31,33,0.2) !important; }
.ui-dark .dg-row-changed { background-color: rgba(208,31,33,0.12) !important; }
.ui-dark .dg-row-changed.dg-row:nth-child(even) { background-color: rgba(208,31,33,0.12); }
.ui-dark .dg-btn-columns:hover { color: #FFF; }
.ui-dark .dg-col button { background-color: #303030; color: #A0A0A0; border-color: #404040; }
.ui-dark .dg-col button:hover { background-color: #404040; color: #FFF; }
.ui-dark .dg-col button:first-child { border-left-color: #404040; }
.ui-dark .dg-col button[name='remove'] { background-color: #282828; color: red; }
.ui-dark .dg-col button:disabled { background-color: #252525 !important; color: #505050 !important; }
.ui-dark .dg-checkbox { background-color: #303030; border-color: #3A3A3A; }
.ui-dark .dg-checked { background-color: var(--color); border-color: var(--color); color: #FFF; }
.ui-dark .dg-btn-columns { color: #323232; background-color: #323232; }
.ui-dark .dg-btn-columns span { color: #606060; }
.ui-dark .dg-btn-columns:hover { background-color: #353535; color: #353535; }
.ui-dark .dg-pagination button { background-color: #303030; border-left-color: #404040; color: #FFF; }
.ui-dark .dg-pagination button:hover { background-color: #353535; }
.ui-dark .dg-pagination button:disabled { background-color: #202020; color: gray; }
.ui-dark .dg-pagination button[name='page-prev'] { border-right-color: #404040; }
.ui-dark .dg-pagination button[name='page-last'] { border-right-color: #404040; }
.ui-dark .dg-bool .dg-checked { background-color: #505050; border-color: #505050; color: gray; }
.ui-dark .dg-editable { background-color: rgba(255,241,164,0.05); }
.ui-dark .dg-resize-line { background-color: #404040; }
.ui-dark .dg-fluid { border-right-color: #404040; }
.ui-dark .dg-controls { background-color: #333; border-color: #404040; box-shadow: 1px 0 15px rgba(0,0,0,0.3); }
.ui-dark .dg-controls button { border-left-color: #404040; color: #FFF; }
.ui-dark .dg-controls button:disabled { color: #505050; }
.ui-dark .dg-controls button:disabled i { color: #505050 !important; }
.ui-dark .dg-controls button:hover { background-color: #404040; }
.ui-dark .dg-row:hover, .ui-dark .dg-row-hover { background-color: rgba(0,0,0,0.2); }
.dg-hfunc { width: 15px; height: 15px; vertical-align: middle; font-size: 11px; text-align: center; background-color: #FFF; margin: 0px auto 0; }


.ui-datepicker-container { position: absolute; left: 0; right: 0; bottom: 0; top: 0; z-index: 99; }
.ui-datepicker { font-size: 12px; width: 247px; height: 300px; position: absolute; background-color: #FFF; border: 1px solid #E0E0E0; left: 100px; top: 100px; border-radius: var(--radius); z-index: 100; color: gray; box-shadow: 0 5px 25px rgba(0,0,0,0.1); opacity: 0; transform: scale(0.6); transition: all 0.2s; }
.ui-datepicker-visible { transform: scale(1); opacity: 1; }
.ui-datepicker-disabled { color: silver !important; cursor: pointer; }
.ui-datepicker-body, .ui-datepicker-months, .ui-datepicker-years { height: 235px; }
.ui-datepicker-footer { height: 28px; border-top: 1px solid #E0E0E0; font-size: 11px; padding: 0 8px; line-height: 26px; background-color: #F8F8F8; display: flex; justify-content: space-between; }
.ui-datepicker-footer > span:hover { text-decoration: underline; }
.ui-datepicker-now, .ui-datepicker-clear { color: #000; cursor: pointer; }
.ui-datepicker-today div { background-color: #F0F0F0; font-weight: bold; }
.ui-datepicker-selected div { background-color: #F8F7DA; font-weight: bold; color: #000; }
.ui-datepicker-date i { position: absolute; left: 15px; top: 26px; font-size: 6px; color: red; }
.ui-datepicker-months > div { width: 61px; height: 78px; line-height: 76px; position: relative; display: inline-block; text-align: center; cursor: pointer; text-transform: uppercase; font-weight: bold; }
.ui-datepicker-months > div > div { width: 50px; height: 50px; line-height: 46px; position: relative; display: inline-block; border-radius: 100%; border: 2px solid transparent; }
.ui-datepicker-months > div:hover > div { border-color: #E0E0E0; color: #000; }
.ui-datepicker-years { padding: 5px 0 0; }
.ui-datepicker-years > div { width: 49px; height: 46px; line-height: 44px; position: relative; display: inline-block; text-align: center; cursor: pointer; }
.ui-datepicker-years > div > div { width: 40px; height: 40px; line-height: 36px; position: relative; display: inline-block; border-radius: 100%; border: 2px solid transparent; }
.ui-datepicker-years > div:hover > div { border-color: #E0E0E0; color: #000;}
.ui-datepicker-header { height: 35px; border-bottom: 1px solid #E0E0E0; text-align: center; font-size: 14px; }
.ui-datepicker-prev { float: left; line-height: 34px; width: 34px; color: #000; cursor: pointer; }
.ui-datepicker-next { float: right; line-height: 34px; width: 34px; color: #000; cursor: pointer; }
.ui-datepicker-prev:hover, .ui-datepicker-next:hover { background-color: #F0F0F0; }
.ui-datepicker-info { margin: 0 34px; line-height: 34px; }
.ui-datepicker-info > span { cursor: pointer; }
.ui-datepicker-info > span:hover { color: #000; }
.ui-datepicker-info .ui-datepicker-year { margin-left: 5px; }
.ui-datepicker-week > div, .ui-datepicker-days > div { width: 35px; height: 35px; line-height: 35px; position: relative; display: inline-block; vertical-align: middle; text-align: center; }
.ui-datepicker-week > div { height: 25px; line-height: 25px; font-weight: bold; color: #000; border-bottom: 1px solid #E0E0E0; }
.ui-datepicker-days > div { font-size: 11px; cursor: pointer; }
.ui-datepicker-date:hover > div { border-color: #E0E0E0; color: #000; }
.ui-datepicker-days > div > div { width: 28px; height: 28px; line-height: 24px; border-radius: 100%; margin: 0 auto; position: relative; display: inline-block; border: 2px solid transparent; }

.ui-dark .ui-datepicker { background-color: #282828; border-color: #404040; color: gray; }
.ui-dark .ui-datepicker-disabled { color: #505050 !important; }
.ui-dark .ui-datepicker-footer { border-top-color: #404040; background-color: #303030; }
.ui-dark .ui-datepicker-now .ui-datepicker-clear { color: #FFF; }
.ui-dark .ui-datepicker-today div { background-color: #353535; }
.ui-dark .ui-datepicker-selected div { background-color: #505050; color: #FFF; }
.ui-dark .ui-datepicker-date i { color: red; }
.ui-dark .ui-datepicker-months > div:hover > div { border-color: #505050; color: #FFF; }
.ui-dark .ui-datepicker-years > div:hover > div { border-color: #505050; color: #FFF; }
.ui-dark .ui-datepicker-header { border-bottom-color: #404040; }
.ui-dark .ui-datepicker-prev { color: #FFF; }
.ui-dark .ui-datepicker-next { color: #FFF; }
.ui-dark .ui-datepicker-prev:hover, .ui-dark .ui-datepicker-next:hover { background-color: #303030; }
.ui-dark .ui-datepicker-info > span:hover { color: #FFF; }
.ui-dark .ui-datepicker-week > div { color: #FFF; border-bottom-color: #404040; }
.ui-dark .ui-datepicker-date:hover > div { border-color: #505050; color: #FFF; }

.ui-directory-area { position: absolute; left: 0; top: 0; right: 0; bottom: 0; z-index: 99; }
.ui-directory { position: absolute; opacity: 0; transition: 0.25s transform cubic-bezier(0.23, 1, 0.32, 1); left: -100; top: -100; z-index: 100; box-shadow: 0 1px 20px rgba(0,0,0,0.1); background-color: #FFF; border-radius: var(--radius); border: 1px solid #E0E0E0; overflow: hidden; transition: all 0.2s; }
.ui-directory-search { height: 42px; background: #FFF; border-radius: var(--radius) var(--radius) 0 0; border-bottom: 1px solid #E0E0E0; line-height: 26px; }
.ui-directory-search input { width: 100%; background-color: #FFF; border: 0; font-size: 14px; outline: 0; padding: 0; margin: 0; line-height: 28px; outline: 0; }
.ui-directory-search > div { margin: 0 30px 0 35px; padding: 6px 10px 0 0; line-height: 24px; }
.ui-directory-search > span { float: left; width: 16px; text-align: center; padding: 7px 0 0 12px; font-size: 14px; }
.ui-directory-add { float: right !important; padding-left: 0 !important; color: #83c83c; text-align: left !important; font-size: 11px !important; cursor: pointer; width: 22px !important; }
.ui-directory .ui-disabled { color: #A0A0A0 !important; cursor: not-allowed; }
.ui-directory-search .ti-times { color: red; cursor: pointer; }
.ui-directory-visible { opacity: 1; }
.ui-directory-container { height: 180px; overflow-x: hidden; overflow-y: auto; overflow-scrolling: touch; margin: 0 30px 0 0; padding: 0; }
.ui-directory ul { list-style-type: none; margin: 0; padding: 0; }
.ui-directory .selected { background-color: #F8F8F8; color: #000; }
.ui-directory .current { background-color: #F2F2F2; color: #000; }
.ui-directory-default li { padding: 0 40px 0 10px; height: 32px; line-height: 32px; text-overflow: ellipsis; overflow: hidden; white-space: nowrap; }
.ui-directory li { border-bottom: 1px solid #F0F0F0; font-size: 14px; background-color: #FFF; cursor: pointer; margin: 0; }
.ui-directory-checkbox { width: 16px; height: 16px; float: left; border: 1px solid #D0D0D0; border-radius: var(--radius); font-size: 10px; line-height: 16px; margin: 8px 6px 0 0; text-align: center; background-color: #FFF; }
.ui-directory-checkbox i { visibility: hidden; }
.ui-directory .selected .ui-directory-checkbox { background-color: #4285F4; border-color: #4285F4; color: #FFF; }
.ui-directory .selected .ui-directory-checkbox i { visibility: visible; }
.ui-directory li:last-child { border-bottom: 0; }
.ui-directory-search-hidden .ui-directory-search { height: 0; overflow: hidden; opacity: 0; }

.ui-dark .ui-directory .ui-disabled { color: #666 !important; }
.ui-dark .ui-directory { background-color: #303030; border-color: #404040; box-shadow: 1px 5px 10px rgba(0,0,0,0.2); }
.ui-dark .ui-directory-search { background: #303030; }
.ui-dark .ui-directory li { background-color: #303030; border-color: #404040; }
.ui-dark .ui-directory-search { border-bottom-color: #404040; }
.ui-dark .ui-directory-search input { background-color: #303030; }
.ui-dark .ui-directory-add:hover { color: #FFF; }
.ui-dark .ui-directory-checkbox { border-color: #484848; background-color: #404040; }
.ui-dark .ui-directory .selected { background-color: #2D2D2D; color: #FFF; }
.ui-dark .ui-directory .current { background-color: #373737; color: #FFF; }

.ui-dropdownlist label { margin-bottom: 3px; font-size: 12px; color: #777; display: block; }
.ui-dropdownlist label i { margin-right: 5px; }
.ui-dropdownlist-required label:before { content: '*'; color: red; margin-right: 3px; }
.ui-dropdownlist-values { border: 1px solid #E0E0E0; border-radius: var(--radius); }
.ui-dropdownlist-required .ui-dropdownlist-values { border-color: #D0D0D0; }
.ui-dropdownlist-add { height: 34px; line-height: 33px; padding: 0 0 0 10px; font-size: 12px; color: #777; cursor: pointer; display: block; border-radius: var(--radius) var(--radius) 0 0; }
.ui-dropdownlist-empty { font-size: 11px; padding: 10px 0; color: #777; text-align: center; }
.ui-disabled .ui-dropdownlist-add, .ui-dropdownlist-limited .ui-dropdownlist-add { background-color: #F0F0F0; cursor: not-allowed; }
.ui-dropdownlist-control { float: right; width: 34px; height: 34px; line-height: 34px; text-align: center; border-left: 1px solid #E0E0E0; color: #000; cursor: pointer; }
.ui-dropdownlist-required .ui-dropdownlist-control { border-left-color: #D0D0D0; }
.ui-dropdownlist-item { line-height: 33px; height: 34px; border-top: 1px solid #E0E0E0; font-size: 12px; color: #000 }
.ui-disabled .ui-dropdownlist-item { background-color: #F8F8F8; color: #777; }
.ui-disabled .ui-dropdownlist-item .ui-dropdownlist-control { display: none; }
.ui-dropdownlist-required .ui-dropdownlist-item { border-top-color: #D0D0D0; }
.ui-dropdownlist-item .ui-dropdownlist-control { color: red; }
.ui-dropdownlist-item .name { margin-right: 34px; line-height: 33px; padding: 0 5px 0 10px; text-overflow: ellipsis; overflow: hidden; white-space: nowrap; }
.ui-dropdownlist-item .name i { width: 14px; position: relative; display: inline-block; margin-right: 5px; text-align: center; }
.ui-dropdownlist-item .remove { width: 26px; float: right; text-align: center; line-height: 26px; color: red; cursor: pointer; }

.ui-dark .ui-dropdownlist label { color: #777; }
.ui-dark .ui-dropdownlist-required label:before { color: red; }
.ui-dark .ui-dropdownlist-values { border-color: #404040; }
.ui-dark .ui-dropdownlist-required .ui-dropdownlist-values { border-color: #505050; }
.ui-dark .ui-dropdownlist-add { color: #777; }
.ui-dark .ui-dropdownlist-empty { color: #777; }
.ui-dark .ui-disabled .ui-dropdownlist-add, .ui-dark .ui-dropdownlist-limited .ui-dropdownlist-add { background-color: #282828; }
.ui-dark .ui-dropdownlist-control { border-left-color: #404040; color: #777; }
.ui-dark .ui-dropdownlist-required .ui-dropdownlist-control { border-left-color: #505050; }
.ui-dark .ui-dropdownlist-item { border-top-color: #404040; color: #E0E0E0; }
.ui-dark .ui-disabled .ui-dropdownlist-item { background-color: #323232; color: #777; }
.ui-dark .ui-dropdownlist-required .ui-dropdownlist-item { border-top-color: #505050; }
.ui-dark .ui-dropdownlist-item .ui-dropdownlist-control { color: red; }
.ui-dark .ui-dropdownlist-item .remove { color: red; }

.ui-edit-window { position: absolute; box-shadow: 0 0 10px rgba(0,0,0,0.1); padding: 10px; border-radius: var(--radius); width: 100px; background-color: #FFF; border: 1px solid #EAEAEA; z-index: 5; outline: 0; }
.ui-dark .ui-edit-window { box-shadow: 0 0 10px rgba(0,0,0,0.2); background-color: #333; border-color: #383838; }

.ui-empty-table { display: table; width: 100%; height: 100%; color: #777; font-size: 13px; }
.ui-empty-cell { display: table-cell; width: 100%; height: 100%; text-align: center; vertical-align: middle; }
.ui-empty-cell > i { font-size: 40px; width: 100px; height: 100px; line-height: 100px; text-align: center; background-color: #F0F0F0; border-radius: 100px; color: #D0D0D0; }
.ui-empty-cell > div { margin-top: 15px; }

.ui-dark .ui-empty-table { color: #999; }
.ui-dark .ui-empty-cell > i { background-color: #303030; color: #404040; }

.ui-flow { position: relative; transform-origin: top left; transition: transform 0.3s; }
.ui-flow .component { position: absolute; left: 150px; top: 150px; border: 2px solid #E0E0E0; background-color: #FFF; border-radius: var(--radius); box-shadow: 1px 1px 10px rgba(0,0,0,0.03); }
.ui-flow-h .inputs { margin: 0; position: relative; top: 0; left: 0; }
.ui-flow-h .input { background-color: #FFF; padding: 0 8px; font-size: 11px; color: gray; border-top: 1px solid #E0E0E0; line-height: 20px; }
.ui-flow-h .input > span { display: block; text-overflow: ellipsis; white-space: nowrap; overflow: hidden; margin-left: 2px; }
.ui-flow-h .input .component-io { float: left; margin: 3px 0 0 -15px; }
.ui-flow-h .input:last-child { border-radius: 0 0 var(--radius) var(--radius); }
.ui-flow-h .outputs { margin: 0; position: relative; }
.ui-flow-h .output { background-color: #FFF; padding: 0 8px; font-size: 11px; color: gray; border-top: 1px solid #E0E0E0; line-height: 20px; }
.ui-flow-h .output > span { display: block; text-overflow: ellipsis; white-space: nowrap; overflow: hidden; }
.ui-flow-h .output .component-io { float: right; margin: 3px -15px 0 0; }
.ui-flow-h .output:last-child { border-radius: 0 0 var(--radius) var(--radius); }
.ui-flow .component-io { width: 12px; height: 12px; line-height: 12px; border-radius: var(--radius); background-color: #A0A0A0; text-align: center; float: left; margin-top: 1px; font-size: 9px; }
.ui-flow .content { padding: 10px 8px; min-width: 200px; min-height: 24px; cursor: default; }
.ui-flow-h .output.connected { color: #000; }
.ui-flow .output.connected .component-io { background-color: #68B25B !important; }
.ui-flow .input.connected .component-io { background-color: #68B25B !important; }
.ui-flow .connection { stroke-width: 2; stroke: #000; fill: none; }
.ui-flow .connection-draft { stroke: var(--color); }
.ui-flow .component-selected { border-color: var(--color); }
.ui-flow .connection-selected { stroke-width: 6px !important; }
.ui-flow .component-focused { z-index: 1; }
.ui-flow .area { position: relative; }
.ui-flow path.highlight { stroke-width: 3.5px !important; }
.ui-flow > svg { margin: -1px 0 0 -1px; outline: 0; }
.ui-flow-grid { stroke: #F8F8F8; stroke-width: 2; }
.ui-flow .output.connected .component-io.disabled, .ui-flow .input.connected .component-io.disabled, .ui-flow .output .component-io.disabled, .ui-flow .input .component-io.disabled { background-color: red !important; color: #FFF; }
.ui-flow .traffic { fill: transparent; stroke-width: 3px; }
.ui-flow-connections { position: absolute; pointer-events: none; }
.ui-flow-connections path { pointer-events: auto; }
.ui-flow-groups { position: relative; }
.ui-flow-group { position: absolute; background: rgba(0,0,0,0.05); border-radius: var(--radius); border: 2px solid rgba(0,0,0,0.05); color: #000; }
.ui-flow-group > div { position: relative; width: 100%; height: 100%; }
.ui-flow-group > div > span { width: 15px; height: 15px; position: absolute; }
.ui-flow-group > div > label { display: block; padding: 15px; font-size: 18px; font-weight: bold; }
.ui-flow .group-selected { border-color: var(--color); }
.ui-flow-resize-tl { cursor: nwse-resize; top: -2px; left: -2px; border-radius: var(--radius) 0 0 0; }
.ui-flow-resize-tr { cursor: nesw-resize; right: -2px; top: -2px; border-radius: 0 var(--radius) 0 0; }
.ui-flow-resize-br { cursor: nwse-resize; right: -2px; bottom: -2px; border-radius: 0 0 var(--radius) 0; }
.ui-flow-resize-bl { cursor: nesw-resize; bottom: -2px; left: -2px; border-radius: 0 0 0 var(--radius); }
.ui-flow-drag { cursor: grab !important; }
.ui-flow-dragged .ui-flow-groups { pointer-events: none; }
.ui-flow-selection { background: rgba(0,0,0,0.1); position: absolute; left: 0; top: 0; width: 0; height: 0; }
.ui-flow .connection-type-transform { stroke-dasharray: 4; }

.ui-dark .ui-flow-grid { stroke: #303030; }
.ui-dark .ui-flow .component { border-color: #404040; background-color: #303030; }
.ui-dark .ui-flow .output .component-io { color: #606060; }
.ui-dark .ui-flow .input .component-io { color: #606060; }
.ui-dark .ui-flow .output, .ui-dark .ui-flow .input { background-color: #303030; color: #FFF; border-color: #404040; }
.ui-dark .ui-flow .connection { stroke: #999; }
.ui-dark .ui-flow .connection-draft { stroke: var(--color); }
.ui-dark .ui-flow .component-selected { border-color: var(--color); }
.ui-dark .ui-flow-group { background: rgba(0,0,0,0.3); border-color: rgba(0,0,0,0.3); color: #FFF; }
.ui-dark .ui-flow .group-selected { border-color: var(--color); }
.ui-dark .ui-flow-selection { background: rgba(255,255,255,0.1); }
.ui-dark #ui-flow-arrow { fill: #999; }


.ui-icons-container { position: absolute; z-index: 110; }
.ui-icons { border: 1px solid #E0E0E0; font-size: 14px; color: #000; width: 330px; z-index: 10; background-color: #FFF; box-shadow: 0 5px 10px rgba(0,0,0,0.08); border-radius: var(--radius); z-index: 80; overflow: hidden; }
.ui-icons-header { height: 50px; background-color: #fcfcfc; border-bottom: 1px solid #e0e0e0; padding: 10px 0 0; }
.ui-icons-nav { padding: 13px 5px 6px 5px; text-align: center; }
.ui-icons-nav span { cursor: pointer; font-size: 24px; width: 11%; display: inline-block; user-select: none; }
.ui-icons-search { padding: 0 10px; }
.ui-icons-search span { float: left; width: 30px; text-align: center; height: 30px; padding: 7px 0 0; font-size: 12px; background-color: #FFF; border: 1px solid #e0e0e0; border-radius: var(--radius) 0 0 var(--radius); color: #A0A0A0; cursor: pointer; }
.ui-icons-search .ti-times { color: #ff0000; }
.ui-icons-search div { margin-left: 30px; }
.ui-icons-search-input { margin: 0; width: 100%; border: 1px solid #e0e0e0; padding: 0 9px; height: 30px; border-radius: 0 var(--radius) var(--radius) 0; border-left: 0; appearance: none; }
.ui-icons-search-input:focus { outline: none; }
.ui-icons-scroll { overflow: auto; height: 305px; }
.ui-icons-content { position: relative; padding: 5px; }
.ui-icons-content span { padding: 5px; cursor: pointer; font-size: 20px; width: 12.5%; height: 30px; display: inline-block; text-align: center; user-select: none; color: #404040; }
.ui-icons-content span:hover { transform: scale(1.15); color: #000; }
.ui-icons-scrollbar { height: 305px; }

.ui-dark .ui-icons { background-color: #202020; border-color: #303030; }
.ui-dark .ui-icons-header { background-color: #202020; border-color: #303030; }
.ui-dark .ui-icons-content { color: #A0A0A0; }
.ui-dark .ui-icons-search span { background-color: #252525; border-color: #303030; color: #A0A0A0; }
.ui-dark .ui-icons-search-input { border-color: #303030; background-color: #1f1f1f; color: #FFF; }
.ui-dark .ui-icons-content span { color: #A0A0A0; }
.ui-dark .ui-icons-content span:hover { color: #FFF; }

@media(max-width: 767px) {
	.ui-icons .ui-icons-nav span { cursor: pointer; font-size: 26px; }
	.ui-icons .ui-icons-content span { min-width: 45px; }
}

.ui-input { position: relative; font-size: 13px; }
.ui-input textarea { tab-size: 2; overflow-y: scroll; -ms-overflow-style: none; scrollbar-width: none; background: transparent; }
.ui-input textarea:::-webkit-scrollbar { display: none; }
.ui-input-required .ui-input-control { border-color: #D0D0D0; }
.ui-input-label { margin-bottom: 3px; font-size: 12px; color: #777; }
.ui-input-label i { margin-right: 4px; }
.ui-input-required.ui-input-raw .ui-input-label:before { content: '*'; color: red; margin-right: 3px; }
.ui-input-control { border: 1px solid #E0E0E0; border-radius: var(--radius); min-height: 36px; background-color: #FFF; }
.ui-input-input { padding: 6px 8px 0 8px; position: relative; line-height: 24px; }
.ui-input-checkbox { margin-bottom: 5px; }
.ui-input-checkbox * { height: 25px; cursor: pointer; }
.ui-input-checkbox span { width: 20px; height: 20px; line-height: 21px; font-size: 11px; margin: 0 7px 0 0; text-align: center; float: left; border: 1px solid #D0D0D0; border-radius: var(--radius); background: #FFF; }
.ui-input-checkbox span i { display: none; font-weight: bold; }
.ui-input-checkbox label { line-height: 19px; }
.ui-input-checked .ui-input-checkbox span i { display: inline-block; }
.ui-disabled .ui-input-checkbox { color: #A0A0A0; }
.ui-disabled.ui-input *, .ui-disabled.ui-input { cursor: not-allowed !important; }
.ui-disabled .ui-input-checkbox span { background-color: #F0F0F0; color: #B0B0B0; border-color: #E0E0E0; }
.ui-input-placeholder { pointer-events: none; position: absolute; color: gray; margin: 0; user-select: none; width: 100%; text-align: left; text-overflow: ellipsis; overflow: hidden; white-space: nowrap; }
.ui-input-control input, .ui-input-control textarea { border: 0; outline: 0; background: transparent !important; width: 100%; padding: 0; margin: 0; line-height: 16px; font-size: 13px; color: #000; font-family: Arial; resize: none; }
.ui-input-control textarea { padding: 4px 0; }
.ui-input-control .ui-input-value { line-height: 24px; height: 22px; cursor: pointer; border-radius: var(--radius); outline: 0; }
.ui-input-control input::-ms-expand { display: none; }
.ui-input-icon-left { width: 34px; height: 34px; line-height: 33px; float: left; text-align: center; border-right: 1px solid #E0E0E0; }
.ui-input-icon-right { width: 34px; height: 34px; line-height: 33px; float: right; border-left: 1px solid #E0E0E0; text-align: center; }
.ui-input-required .ui-input-icon-left { border-color: #D0D0D0; }
.ui-input-required .ui-input-icon-right { border-color: #D0D0D0; }
.ui-input-ricon .ui-input-input { margin-right: 37px; }
.ui-input-licon .ui-input-input { margin-left: 34px; }
.ui-input-ricon .ti-times, .ui-input-licon .ti-times { color: red; }
.ui-input-value { text-overflow: ellipsis; white-space: nowrap; overflow: hidden; }
.ui-input-click { cursor: pointer; }
.ui-input-error { margin-top: 7px; font-size: 11px; color: red; }
.ui-input .right input { text-align: right; }
.ui-input .right .ui-input-placeholder { text-align: right; padding-right: 15px; }
.ui-input .center input { text-align: center; }
.ui-input .center .ui-input-placeholder { text-align: center; padding-right: 15px; }
.ui-input-dropdown, .ui-input-dropdown input, .ui-input-dropdown .ui-input-placeholder { cursor: pointer; }
.ui-input-invalid .ui-input-control, .ui-input-invalid .ui-input-icon-left, .ui-input-invalid .ui-input-icon-right { border-color: red !important; }
.ui-input.ui-disabled .ui-input-control { background-color: #F0F0F0; color: #777; }
.ui-input.ui-disabled input { background-color: #F0F0F0; color: #A0A0A0; }
.ui-input.ui-disabled .ui-input-placeholder { color: #A0A0A0; }
.ui-input.ui-disabled .ui-input-icon-left, .ui-input.ui-disabled .ui-input-icon-right { color: gray; }
.ui-input-dropdown.ui-disabled .ui-input-control { cursor: not-allowed !important; }
.ui-input-raw .ui-input-increment { padding: 6px 0 0 !important; }
.ui-input-increment i { line-height: 10px; font-size: 12px; cursor: pointer; display: block; }
.ui-input-increment i:first-child { margin-left: 0; }

.ui-input-required.ui-input-inner .ui-input-label:after { content: '*'; color: red; margin-left: 3px; }
.ui-input-inner { background-color: #F5F5F5; border: 1px solid #E5E5E5; padding: 10px 5px 10px 10px; width: 100%; border-radius: var(--radius); }
.ui-input-inner.ui-disabled .ui-input-control { background-color: transparent !important; }
.ui-input-inner .ui-input-increment { padding-top: 2px; color: #777; }
.ui-input-inner .ui-input-label { height: 18px; margin: 0; color: #6A7280; font-weight: bold; }
.ui-input-inner .ui-input-placeholder { color: #9DA4B0; }
.ui-input-inner input, .ui-input-inner textarea { font-size: 14px; }
.ui-input-inner .ui-input-input { padding: 0; font-size: 14px; }
.ui-input-inner .ui-input-control { min-height: 24px; border: 0; background-color: transparent; }
.ui-input-inner .ui-input-icon-left, .ui-input-inner .ui-input-icon-right { height: 24px; line-height: 24px; color: #777; font-size: 15px; }
.ui-input-inner.ui-input-focused { border-color: var(--color); box-shadow: 0 0 #0000,0 0 #0000,0px 0px 0px 4px #4AAEFF1A; }
.ui-input-inner.ui-input-invalid { border-color: #EEB7B7; box-shadow: 0 0 #0000,0 0 #0000,0px 0px 0px 4px #D85A5A1A; }
.ui-input-inner .ui-input-checkbox { margin-bottom: 0; }
.ui-input-inner .ui-input-icon-right { border: 0; padding-left: 10px; }

.ui-input-masked input { letter-spacing: 1px; font-family: Menlo,Consolas,monospace; }
.ui-input-monospace input, .ui-input-monospace textarea { font-family: Menlo,Consolas,monospace; }
.ui-input-icon-custom { font-size: 11px; }
.ui-input-inner .ui-input-value { line-height: 24px; height: 24px; }
.ui-input-type-icon .ui-input-value, .ui-input-type-emoji .ui-input-value { font-size: 15px; }
.ui-input-type-icon .ui-input-control, .ui-input-type-color .ui-input-control, .ui-input-type-color .ui-input-emoji { cursor: pointer; }

.ui-dark .ui-input-required .ui-input-control { border-color: #505050; }
.ui-dark .ui-input-raw .ui-input-control { border-color: #404040; background-color: #202020; box-shadow: 0 1px 4px rgba(0,0,0,0.3); }
.ui-dark .ui-input-required .ui-input-icon-left { border-color: #404040; }
.ui-dark .ui-input-required .ui-input-icon-right { border-color: #404040; }
.ui-dark .ui-input-control input, .ui-dark .ui-input-control textarea { background-color: transparent; color: #FFF; }
.ui-dark .ui-input-icon-left, .ui-dark .ui-input-icon-right { border-color: #303030; color: gray; }
.ui-dark .ui-input.ui-disabled .ui-input-control { background-color: #282828; color: #999; }
.ui-dark .ui-input.ui-disabled input { background-color: #282828; color: #777; }
.ui-dark .ui-input.ui-disabled .ui-input-placeholder { color: #777; }
.ui-dark .ui-input-checkbox span { border-color: #404040; background: #252525; }

.ui-dark .ui-input-inner { background-color: #252525; border-color: #303030; }
.ui-dark .ui-input-inner.ui-disabled .ui-input-control { background-color: transparent !important; }
.ui-dark .ui-input-inner.ui-input-focused { border-color: var(--color); box-shadow: 0 0 #0000,0 0 #0000,0px 0px 0px 4px #4AAEFF3F; }
.ui-dark .ui-input-inner.ui-input-invalid { border-color: #8E3D3D; box-shadow: 0 0 #0000,0 0 #0000,0px 0px 0px 4px #D85A5A42; }
.ui-dark .ui-disabled .ui-input-checkbox span { background-color: #282828; color: #999; border-color: #303003; }
.ui-dark .ui-disabled .ui-input-checkbox { color: #666; }

.bg-smoke { background-color: #F8F8F8; }
.ui-dark .bg-smoke { background-color: #282828; }

.panel { background-color: #FFF; border-radius: var(--radius); border: 1px solid #E0E0E0; }
.panel > .toolbar { float: right; margin: 10px 10px 0 10px; }
.panel > .toolbar button { height: 22px; line-height: 20px; min-width: 60px; }
.panel > label { display: block; padding: 10px 10px; border-bottom: 1px solid #E0E0E0; font-size: 15px; color: #000; font-weight: bold; border-radius: var(--radius) var(--radius) 0 0; }
.panel > label i { margin-right: 7px; }
.panel .padding { padding: 15px 10px; }
.ui-dark .panel { background-color: #202020; border-color: #404040; }
.ui-dark .panel > label { border-bottom-color: #404040; color: #FFF; }

.toolbar { height: 26px; }
.toolbar button { outline: 0; background: #FFF; border: 1px solid #E0E0E0; border-left: 0; font-size: 11px; height: 26px; padding: 0 8px; color: #000; min-width: 80px; text-align: center; vertical-align: top; background-color: #FFF; line-height: 24px; float: left; text-align: center !important; }
.toolbar button i { margin-right: 5px; }
.toolbar button .ti-plus-circle, .toolbar button .ti-check-circle { color: #68B25B; }
.toolbar button:first-child { border-left: 1px solid #E0E0E0; border-top-left-radius: var(--radius); border-bottom-left-radius: var(--radius); }
.toolbar button:last-child { border-top-right-radius: var(--radius); border-bottom-right-radius: var(--radius); }
.toolbar button:hover { border-color: #D0D0D0; }
.toolbar button:active { background: #F0F0F0; color: #888; border-color: #DFDFDF; }
.toolbar button:disabled { color: silver; cursor: not-allowed; border-color: #E0E0E0 !important; background: #F8F8F8; }
.toolbar button:disabled i { color: silver !important; }
.toolbar button.right { float: right; margin-left: 5px; margin-right: 0; text-align: center; }

.ui-dark .toolbar button { background: #202020; border-color: #333; color: #C0C0C0; }
.ui-dark .toolbar button:first-child { border-left-color: #333; }
.ui-dark .toolbar button:hover { border-color: #404040; color: #FFF; }
.ui-dark .toolbar button:active { background: #222; color: #A0A0A0; border-color: #333; }
.ui-dark .toolbar button:disabled { color: #666; border-color: #404040 !important; background: #303030; }
.ui-dark .toolbar button:disabled i { color: #666 !important; }

.toolbar-bg { height: 44px; background-color: #F0F0F0; padding: 10px 10px 0; }
.ui-dark .toolbar-bg { background-color: #282828; }

.nav { background-color: #F0F0F0; }
.nav nav { padding: 10px 5px; display: block; }
.nav nav > div, .nav nav > a { display: block; height: 30px; margin: 0 5px 2px; line-height: 30px; padding: 0 10px; border-radius: var(--radius); cursor: pointer; font-size: 13px; color: #888; border: 0; text-decoration: none !important; }
.nav nav > div > i, .nav nav > a i { width: 14px; text-align: center; margin-right: 10px; }
.nav nav > div:hover, .nav nav > a:hover { background-color: rgba(0,0,0,0.05); color: #000; text-decoration: none !important; }
.nav nav > div.ui-disabled, .nav nav > a.ui-disabled, .nav nav > div.disabled, .nav nav > a.disabled { cursor: not-allowed; color: #C0C0C0; background-color: transparent !important; }
.nav nav .selected { background-color: rgba(100,100,100,0.1); color: #000; }
.nav label { font-size: 12px; color: #999; display: block; margin: 0 15px 10px; padding: 0; text-overflow: ellipsis; overflow: hidden; white-space: nowrap; }
.nav label i { margin-right: 5px; }

.ui-dark .nav { background-color: #282828; }
.ui-dark .nav nav > div, .ui-dark .nav nav > a { color: #999; }
.ui-dark .nav nav > div:hover { background-color: rgba(255,255,255,0.05); color: #FFF; }
.ui-dark .nav nav > div.ui-disabled, .ui-dark .nav nav > a.ui-disabled, .ui-dark .nav nav > div.disabled, .ui-dark .nav nav > a.disabled { color: #555; background-color: transparent !important; }
.ui-dark .nav nav .selected { background-color: rgba(255,255,255,0.1); color: #FFF; }
.ui-dark .nav label { color: #777; }

.listing { z-index: 2; position: relative; overflow: hidden; }
.listing figure { cursor: pointer; }
.listing figure > section { margin: -1px 10px 0; border-bottom: 1px solid #E0E0E0; padding: 10px 0; }
.listing figure:first-child section { margin-top: 0; }
.listing figure.selected { background-color: #F8F8F8; border-radius: var(--radius); }
.listing figure:hover { background-color: #F0F0F0; border-radius: var(--radius); }
.listing figure.selected > section, .listing figure:hover > section { border-bottom-color: transparent !important; }
.listing figure:last-child > section { border-bottom-color: transparent; }

.ui-dark .listing figure > section { border-color: #303030; }
.ui-dark .listing figure.selected { background-color: #272727; }
.ui-dark .listing figure:hover { background-color: #303030; }
.ui-dark .listing figure:last-child > section { border-bottom-color: transparent; }

.listing2 figure { cursor: pointer; background-color: rgba(0,0,0,0.05); margin-bottom: 2px; border-radius: var(--radius); }
.listing2 figure > section { padding: 10px; }
.listing2 figure:first-child section { margin-top: 0; }
.listing2 figure.selected { background-color: rgba(0,0,0,0.09); }
.listing2 figure:hover { background-color: rgba(0,0,0,0.08); }
.listing2 figure.selected > section, .listing2 figure:hover > section { border-bottom-color: transparent !important; }
.listing2 figure:last-child > section { border-bottom-color: transparent; }

.ui-dark .listing2 figure { background-color: rgba(100,100,100,0.1); }
.ui-dark .listing2 figure.selected { background-color: rgba(120,120,120,0.2); }
.ui-dark .listing2 figure:hover { background-color: rgba(150,150,150,0.2); }

.configuration { background-color: #FFF; border-radius: var(--radius); border: 1px solid #E0E0E0; }
.configuration p { margin: 0 0 15px 0; font-size: 13px; padding: 0; color: #666; }
.configuration > section > .toolbar { float: right; margin: 10px 10px 0 10px; }
.configuration > section > .toolbar button { height: 22px; line-height: 20px; min-width: 60px; }
.configuration > section > label { display: block; padding: 10px; font-size: 15px; color: #000; font-weight: bold; border-top: 1px solid #E0E0E0; }
.configuration > section > label i { margin: 3px 6px 0 0; width: 15px; text-align: center; float: left; }
.configuration > section:first-child > label { border-top: 0; border-radius: var(--radius) var(--radius) 0 0; }
.configuration > section > article { border-top: 1px solid #E0E0E0; }
.configuration > section:first-child article:first-child { border-top: 0; border-radius: var(--radius) var(--radius) 0 0; }
.configuration .padding { padding: 15px 10px; }
.configuration > .toolbar { float: right; margin: 10px 10px 0 10px; }
.configuration > .toolbar button { height: 22px; line-height: 20px; min-width: 60px; }

.ui-dark .configuration p { color: #A0A0A0; }
.ui-dark .configuration { background-color: #202020; border-color: #404040; }
.ui-dark .configuration > section:first-child label { border-top-color: #404040; }
.ui-dark .configuration > section > article { border-top-color: #404040; }
.ui-dark .configuration > section label { color: #FFF; border-top-color: #404040; }

.message { padding: 10px; border: 2px solid #E0E0E0; border-radius: var(--radius); font-size: 12px; margin-bottom: 10px; }
.message i { margin-right: 5px; }
.message-error { border-color: #D63A32; color: #A72C26; }
.message-alert { border-color: #DEBA31; color: #8c7727; }
.message-success { border-color: #68B25B; color: #4A7543; }

.ui-dark .message { border-color: #666; color: #999; }
.ui-dark .message-error { border-color: #D63A32; color: #DC7772; }
.ui-dark .message-alert { border-color: #DEBA31; color: #D2BA62; }
.ui-dark .message-success { border-color: #68B25B; color: #6DAD63; }

.badge { font-size: 12px; padding: 4px 6px; border-radius: var(--radius); background-color: var(--color); line-height: 12px; vertical-align: middle; position: relative; display: inline-block; color: #FFF; }
.badge i { margin-right: 3px; }
.badge-blue { background-color: #0E68A6; }
.badge-red { background-color: #D63B32; }
.badge-green { background-color: #8CC152; }
.badge-yellow { background-color: #EFDC05; }
.badge-orange { background-color: #F49519; }
.badge-gray { background-color: #606060; }
.badge-purple { background-color: #967ADC; }
.badge-pink { background-color: #D770AD; }
.badge-silver { background-color: #E0E0E0; color: gray; }
.badge-large, .badge.large { padding: 3px 8px; font-size: 14px; line-height: 16px; }
.badge-large i, .badge.large i { margin-right: 5px; }
.badge-small, .badge.small { font-size: 10px; padding: 0px 3px 1px; }
.badge-medium, .badge.medium { font-size: 11px; padding: 2px 6px; }
.badge-medium i, .badge.medium i { margin-right: 5px; }
.ui-dark .badge-silver { background-color: #666; color: #FFF; }

.caption > .toolbar { float: right; margin: 10px 0 0 10px; }
.caption > .toolbar button { height: 22px; line-height: 20px; min-width: 60px; }
.caption > label { display: block; padding: 10px 0; border-bottom: 1px solid #E0E0E0; font-size: 15px; color: #000; font-weight: bold; }
.caption > label i { margin-right: 7px; }
.ui-dark .caption > label { border-bottom-color: #404040; color: #FFF; }

.keyvalue.small { font-size: 11px; min-height: 14px; line-height: 14px; }
.keyvalue.small > span i { width: 12px; }
.keyvalue.small > div i { width: 12px; }
.keyvalue.small .badge { padding: 2px 4px; }
.keyvalue.small .badge.small { padding: 0 3px 1px; }
.keyvalue { min-height: 20px; font-size: 13px; margin-bottom: 2px; line-height: 17px; }
.keyvalue > span { width: 120px; float: left; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; color: #777; }
.keyvalue > span i { width: 14px; margin-right: 5px; }
.keyvalue > div { margin-left: 120px; }
.keyvalue > div i { width: 14px; margin-right: 5px; }

p { font-size: 13px; color: #777; margin: 0 0 15px 0; }

.iconmenu { height: 54px; text-align: center; }
.iconmenu i { font-size: 20px; display: block; padding: 8px 0 0; }
.iconmenu span { font-size: 11px; display: block; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; padding: 3px 5px 0; color: #777; }
.iconmenu > div.selected { background-color: rgba(0,0,0,0.07); }
.iconmenu > div { height: 54px; width: 75px; border: 1px solid #E0E0E0; border-left-width: 0; float: left; cursor: pointer; }
.iconmenu > div:first-child { border-left-width: 1px; border-top-left-radius: var(--radius); border-bottom-left-radius: var(--radius); }
.iconmenu > div:last-child { border-top-right-radius: var(--radius); border-bottom-right-radius: var(--radius); }

.ui-dark .iconmenu > div.selected { background-color: rgba(255,255,255,0.1); }
.ui-dark .iconmenu > div { border-color: #404040; }

.detail figure { min-height: 35px; padding: 8px 0 5px; border-top: 1px solid #E0E0E0; font-size: 13px; }
.detail figure > p { margin: 0 0 20px; }
.detail figure:first-child { border-top: 0; }
.detail figure > span { float: left; width: 140px; color: #777; text-overflow: ellipsis; white-space: nowrap; overflow: hidden; padding-right: 5px; }
.detail figure > span i { width: 14px; margin-right: 5px; text-align: center; }
.detail figure > div { margin-left: 150px; }
.ui-dark .detail figure { border-top-color: #404040; }


.ui-layout { border: 0; position: absolute; z-index: 1; }
.ui-layout > section { position: absolute; overflow: hidden; }
.ui-layout > div { position: absolute; }
.ui-layout-resize-top { height: 2px; cursor: row-resize; }
.ui-layout-resize-bottom { height: 2px; cursor: row-resize; }
.ui-layout-resize-left { width: 2px; cursor: col-resize; }
.ui-layout-resize-right { width: 2px; cursor: col-resize; }
.ui-layout-resize { z-index: 2; user-select: none; }
.ui-layout-resize:hover { background-color: #C0C0C0; }
.ui-layout-drag { background-color: #C0C0C0; }
.ui-layout-section { background-color: #F0F0F0; }
.ui-layout-lock { background-color: rgba(222,222,222,0.8); z-index: 100; }

.ui-dark .ui-layout-section { background-color: #282828; }
.ui-dark .ui-layout-resize:hover { background-color: #505050; }
.ui-dark .ui-layout-lock { background-color: rgba(34,34,34,0.8); }

.ui-loading { position: fixed; width: 100%; height: 100%; background-color: rgba(255,255,255,0.8); left: 0; top: 0; z-index: 1000; }
.ui-loading-1 > div { background: url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzgiIGhlaWdodD0iMzgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PGxpbmVhckdyYWRpZW50IHgxPSI4LjA0MiUiIHkxPSIwJSIgeDI9IjY1LjY4MiUiIHkyPSIyMy44NjUlIiBpZD0iYSI+PHN0b3Agc3RvcC1jb2xvcj0iI0EwQTBBMCIgc3RvcC1vcGFjaXR5PSIwIiBvZmZzZXQ9IjAlIi8+PHN0b3Agc3RvcC1jb2xvcj0iI0EwQTBBMCIgc3RvcC1vcGFjaXR5PSIuNjMxIiBvZmZzZXQ9IjYzLjE0NiUiLz48c3RvcCBzdG9wLWNvbG9yPSIjQTBBMEEwIiBvZmZzZXQ9IjEwMCUiLz48L2xpbmVhckdyYWRpZW50PjwvZGVmcz48ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxIDEpIiBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMwLTkuOTQtOC4wNi0xOC0xOC0xOCIgc3Ryb2tlPSJ1cmwoI2EpIiBzdHJva2Utd2lkdGg9IjIiPjxhbmltYXRlVHJhbnNmb3JtIGF0dHJpYnV0ZU5hbWU9InRyYW5zZm9ybSIgdHlwZT0icm90YXRlIiBmcm9tPSIwIDE4IDE4IiB0bz0iMzYwIDE4IDE4IiBkdXI9IjAuOXMiIHJlcGVhdENvdW50PSJpbmRlZmluaXRlIi8+PC9wYXRoPjxjaXJjbGUgZmlsbD0iI0EwQTBBMCIgY3g9IjM2IiBjeT0iMTgiIHI9IjEiPjxhbmltYXRlVHJhbnNmb3JtIGF0dHJpYnV0ZU5hbWU9InRyYW5zZm9ybSIgdHlwZT0icm90YXRlIiBmcm9tPSIwIDE4IDE4IiB0bz0iMzYwIDE4IDE4IiBkdXI9IjAuOXMiIHJlcGVhdENvdW50PSJpbmRlZmluaXRlIi8+PC9jaXJjbGU+PC9nPjwvc3ZnPg==) no-repeat 50% 50%; background-size: 80px 80px; width: 80px; height: 80px; position: absolute; left: 50%; top: 50%; margin: -40px 0 0 -40px; }
.ui-loading-2 > div { min-height: 5px; background-color: #4285f4; width: 0; position: absolute; z-index: 1; animation: loadinganimation 5s infinite; }
.ui-loading-1 .ui-loading-text { position: absolute; width: 250px; text-align: center; margin: 90px 0 0 -125px; left: 50%; font-size: 12px; color: #000; text-overflow: ellipsis; overflow: hidden; white-space: nowrap; }
.ui-loading-2 .ui-loading-text { font-size: 11px; padding: 0 5px; }
.ui-loading-text i { margin-right: 5px; }

.ui-dark .ui-loading { background-color: rgba(0,0,0,0.8); }
.ui-dark .ui-loading > div { color: #FFF; }

@keyframes loadinganimation {
	0% { left: 0; }
	60% { left: 0; width: 100%; }
	70% { left: 70%; width: 30%; }
	90% { left: 100%; width: 30%; }
	100% { left: 0; width: 0; }
}

.ui-menu-area { position: absolute; left: 0; right: 0; bottom: 0; top: 0; z-index: 100; }
.ui-menu { position: absolute; z-index: 1; transform-origin: top left; padding: 10px 0; }
.ui-menu-items { background-color: #FFF; padding: 5px 0; border-radius: var(--radius); box-shadow: 2px 5px 10px rgba(0,0,0,0.05); border: 1px solid #E0E0E0; position: relative; }
.ui-menu-submenu { position: absolute; z-index: 101; background-color: #FFF; padding: 5px 0; border-radius: var(--radius); box-shadow: 2px 5px 10px rgba(0,0,0,0.05); border: 1px solid #E0E0E0; }
.ui-menu-visible {}
.ui-menu ul { margin: 0; padding: 0; }
.ui-menu li { margin: 0; padding: 5px; list-style-type: none; font-size: 12px; cursor: pointer; }
.ui-menu-name { overflow: hidden; text-overflow: ellipsis; white-space: nowrap; padding-right: 15px; }
.ui-menu-note { font-size: 10px; margin: 0 10px 3px 35px; color: #A0A0A0; line-height: 11px; }
.ui-menu-nofa .ui-menu-note { margin-left: 0; }
.ui-menu-selected { background-color: #F5F5F5; }
.ui-menu li:hover { background-color: #F0F0F0; }
.ui-menu-nofa { padding-left: 12px !important; }
.ui-menu .pull-right { margin: 1px 5px 0 0; width: 20px; text-align: right; font-size: 10px; }
.ui-menu-name i { width: 30px; margin: 0 5px 0 0; text-align: center; color: #000; }
.ui-menu-name b { position: absolute; right: 10px; font-size: 11px; color: gray; margin: 1px 5px 0; }
.ui-menu-divider { padding: 0 !important; background: transparent !important; cursor: default !important; color: gray; font-size: 11px !important; }
.ui-menu-divider span { display: block; margin: 5px 12px; }
.ui-menu-divider hr { margin: 5px 0; border-color: #E0E0E0; }
.ui-menu li.ui-menu-disabled { color: #a0a0a0; background-color: #FFF; cursor: not-allowed; }
.ui-menu li.ui-menu-disabled i { color: #c5c5c5; }

.ui-menu-style-2 .ui-menu-items { border-radius: var(--radius); }
.ui-menu-style-2 li { margin: 2px 10px; padding: 7px 2px; border-radius: var(--radius); font-size: 13px; }
.ui-menu-style-2 .pull-right { margin-top: 3px; }
.ui-menu-style-2 .ui-menu-submenu { border-radius: var(--radius); }
.ui-menu-style-2 .ui-menu-divider { margin: 7px 0; }
.ui-menu-style-2 .ui-menu-divider span { padding-left: 10px; }

.ui-dark .ui-menu b { color: #505050; }
.ui-dark .ui-menu-items, .ui-dark .ui-menu-submenu { background-color: #303030; border-color: #353535; box-shadow: 1px 5px 10px rgba(0,0,0,0.2); }
.ui-dark .ui-menu-name i { color: #FFF; }
.ui-dark .ui-menu-selected { background-color: #252525; }
.ui-dark .ui-menu li:hover { background-color: #202020; }
.ui-dark .ui-menu-divider hr { border-color: #404040; }
.ui-dark .ui-menu-note { color: #777; }
.ui-dark .ui-menu li.ui-menu-disabled { background-color: #303030; color: #656565; }
.ui-dark .ui-menu li.ui-menu-disabled i { color: #525252; }

.ui-large .ui-menu-divider { font-size: 14px !important; }
.ui-large .ui-menu li { font-size: 14px; padding: 7px 15px; }
.ui-large.ui-menu li { font-size: 14px; padding: 7px 15px; }
.ui-large .ui-menu-note { font-size: 13px; }

.ui-message { background-color: rgba(255,255,255,0.9); position: fixed; left: 0; right: 0; bottom: 0; top: 0; z-index: 1010; width: 100%; display: table; height: 100%; transition: 0.3s all; opacity: 0; }
.ui-message > div { display: table-cell; vertical-align: middle; text-align: center; padding: 15px; }
.ui-message-body { padding: 30px 25px 20px; position: relative; display: inline-block; color: #000000; border-radius: var(--radius); max-width: 500px; text-align: left; transform: scale(1.5); transition: 0.2s all; box-shadow: 0 5px 20px rgba(0,0,0,0.1); background-color: #FFF; border-width: 3px; border-style: solid; }
.ui-message-warning .ui-message-body { border-color: #DA4453; min-width: 300px; }
.ui-message-success .ui-message-body { border-color: #8CC152; min-width: 300px; }
.ui-message-info .ui-message-body { border-color: var(--color); min-width: 300px; }
.ui-message button { display: block; min-width: 100px; margin: 20px auto 0; cursor: pointer; outline: 0; background-color: #FFF; border: 1px solid #E0E0E0; border-radius: var(--radius); color: #000000; padding: 0 20px; height: 34px; font-weight: bold; }
.ui-message button:hover { background-color: #F0F0F0; }
.ui-message button:active { border-color: #D0D0D0; }
.ui-message-icon { border-radius: 100px; width: 60px; height: 60px; padding: 0; line-height: 54px; font-size: 30px; text-align: center; position: absolute; left: 50%; border: 4px solid #3BAFDA; margin-left: -30px; z-index: 5; background-color: #FFF; color: #3BAFDA; margin-top: -40px; transform: scale(2); transition: all 0.3s; }
.ui-message-icon-animate { transform: scale(1); }
.ui-message-success .ui-message-icon { border-color: #8CC152; color: #8CC152; }
.ui-message-warning .ui-message-icon { border-color: #DA4453; color: #DA4453; }
.ui-message-info .ui-message-icon { border-color: var(--color); color: var(--color); }
.ui-message-error i { margin-right: 5px; color: red; }
.ui-message-visible { opacity: 1; }
.ui-message-visible .ui-message-body { transform: scale(1); }
.ui-message2 { background-color: rgba(220,220,220,0.9); }
.ui-message2 .ui-message-body { padding: 110px 0 0; border-width: 0; border-radius: var(--radius); max-width: 400px; }
.ui-message2 .ui-message-text { padding: 0 20px 30px; text-align: center; }
.ui-message2 hr { display: none; }
.ui-message2 button { width: 100%; border: 0 !important; color: #FFF; border-radius: 0 0 var(--radius) var(--radius); height: 40px; margin: 0; }
.ui-message2 button:hover { opacity: 0.9; }
.ui-message2.ui-message-success button { background-color: #8CC152; }
.ui-message2.ui-message-warning button { background-color: #DA4453; }
.ui-message2.ui-message-info button { background-color: var(--color); }
.ui-message2 .ui-message-icon { margin-top: 30px; border-radius: 0; border: 0; background: transparent !important; font-size: 50px; }

.ui-dark .ui-message2, .ui-dark .ui-message { background-color: rgba(50,50,50,0.9); }
.ui-dark .ui-message-body { background-color: #202020; color: #FFF; }
.ui-dark .ui-message button { background-color: #404040; border-color: #404040; color: #FFF; }
.ui-dark .ui-message button:hover { background-color: #444; }
.ui-dark .ui-message button:active { border-color: #505050; }
.ui-dark .ui-message2.ui-message-success button { background-color: #8CC152; }
.ui-dark .ui-message2.ui-message-warning button { background-color: #DA4453; }
.ui-dark .ui-message2.ui-message-info button { background-color: var(--color); }
.ui-dark .ui-message-icon { background-color: #202020; }
.ui-dark .ui-message hr { border-color: #404040; }

.ui-miniform-noscroll, .ui-miniform-noscroll body { overflow: hidden; }
.ui-miniform-container { width: 100%; position: fixed; left: 0; top: 0; bottom: 0; right: 0; background-color: rgba(230,233,237,0.8); z-index: 5; overflow-y: scroll; transform-style: preserve-3d; overflow-scrolling: touch; padding: 15px; }
.ui-miniform-container-table { display: table; width: 100%; height: 100%; }
.ui-miniform-container-cell { display: table-cell; width: 100%; height: 100%; vertical-align: middle; text-align: center; }
.ui-miniform { background-color: #FFF; border-radius: var(--radius); box-shadow: 0 10px 30px rgba(0,0,0,0.1); transform: scale(0); transition: all 0.15s; opacity: 0; text-align: left; position: relative; margin: 0 auto; }
.ui-miniform .padding { padding: 15px; }
.ui-miniform-animate { transform: scale(1); opacity: 1; }
.ui-miniform-title { padding: 18px 10px 18px 15px; font-size: 18px; user-select: none; color: #000; background-color: #FFF; border-bottom: 1px solid #E0E0E0; height: 58px; border-radius: var(--radius) var(--radius) 0 0; }
.ui-miniform-title .ui-miniform-button-close { float: right; cursor: pointer; font-size: 18px; margin: 1px 0 0; transition: all 0.2s; background: none; border: 0; outline: 0; height: auto; color: red; text-align: right !important; width: 20px; padding: 0; }
.ui-miniform-title .ui-miniform-button-close i { font-weight: bold; }
.ui-miniform-title .ui-miniform-button-close:hover { transform: scale(1.1); }
.ui-miniform-title > span { font-weight: bold; }
.ui-miniform-title i { margin-right: 7px; }
.ui-miniform > nav { padding: 0 15px 0; border-top: 1px solid #E0E0E0; background-color: #FFF; border-radius: 0 0 var(--radius) var(--radius); line-height: 65px; height: 65px; display: block; float: none; position: relative; }
.ui-miniform > nav button { border: 0; margin: 15px 0 0; background-color: #F0F0F0; height: 34px; padding: 0 15px; color: #000; cursor: pointer; font-family: Arial; line-height: 34px; vertical-align: middle; outline: 0; font-size: 14px; text-decoration: none; transition: all 0.3s; float: left; width: 50%; }
.ui-miniform > nav button i { width: 15px; text-align: center; margin-right: 5px; }
.ui-miniform > nav button:hover { opacity: 0.9; }
.ui-miniform > nav button:active { background-color: #D0D0D0; }
.ui-miniform > nav button:disabled { background-color: #F5F5F5 !important; border-color: #E0E0E0 !important; color: silver !important; cursor: not-allowed; box-shadow: none; }
.ui-miniform > nav button:first-child { border-top-left-radius: var(--radius); border-bottom-left-radius: var(--radius); }
.ui-miniform > nav button:last-child { border-top-right-radius: var(--radius); border-bottom-right-radius: var(--radius); }
.ui-miniform > nav button[name='submit'] { font-weight: bold; background-color: var(--color); color: #FFF; }

.ui-dark .ui-miniform-container { background-color: rgba(50,50,50,0.9); }
.ui-dark .ui-miniform { background-color: #202020; }
.ui-dark .ui-miniform-title { background-color: #202020; border-bottom-color: #303030; color: #FFF; }
.ui-dark .ui-miniform > nav { background-color: #202020; border-top-color: #303030; }
.ui-dark .ui-miniform nav button { border-color: #202020; background-color: #505050; color: #E0E0E0; }
.ui-dark .ui-miniform > nav button[name='submit'] { background-color: var(--color); color: #FFF; }
.ui-dark .ui-miniform > nav button:active { background-color: #404040; }
.ui-dark .ui-miniform > nav button:disabled { background-color: #303030 !important; color: #606060 !important; border-color: #202020 !important; }

/*.ui-miniform-animate-click { transform: skewX(-2deg); }*/

.ui-notify-container { position: fixed; max-width: 400px; z-index: 100; text-align: center; width: 100%; }
.ui-notify { height: 80px; transition: 0.15s transform,opacity; transform: scale(1); transition-timing-function: ease-in; opacity: 1; }
.ui-notify figure { background-color: #FFF; box-shadow: 0 3px 20px rgba(0,0,0,0.2); border-radius: var(--radius); font-size: 14px; padding: 0; color: #000; cursor: default; position: relative; height: 60px; display: block; }
.ui-notify-dot { width: 10px; height: 10px; position: absolute; border-radius: var(--radius) var(--radius) var(--radius) var(--radius); right: 5px; bottom: 5px; }
.ui-notify-1 .ui-notify-dot { background-color: #8CC152; }
.ui-notify-2 .ui-notify-dot { background-color: #F43D35; }
.ui-notify-3 .ui-notify-dot { background-color: var(--color); }
.ui-notify-1 .ui-notify-icon { color: #8CC152; }
.ui-notify-2 .ui-notify-icon { color: #F43D35; }
.ui-notify-3 .ui-notify-icon { color: var(--color); }
.ui-notify-icon { float: left; font-size: 25px; padding: 0 0 0 10px; width: 50px; text-align: center; height: 60px; line-height: 60px; border-radius: var(--radius) 0 0 var(--radius); }
.ui-notify-message { margin: 1px 0 0 60px; line-height: 16px; height: 60px; display: table-cell; width: 100%; vertical-align: middle; padding: 0 10px; text-align: left; }
.ui-notify-hidden { transform: scale(0.7); opacity: 0.1; }

.ui-notify-container-top { left: 50%; margin-left: -200px; top: 20px; }
.ui-notify-container-top-left { left: 25px; top: 20px; }
.ui-notify-container-top-right { right: 25px; top: 20px; }
.ui-notify-container-bottom { bottom: 10px; left: 50%; margin-left: -150px; }
.ui-notify-container-bottom-left { bottom: 10px; left: 25px; }
.ui-notify-container-bottom-right { bottom: 10px; right: 25px; }

@media(max-width: 767px) {
	.ui-notify-container { left: 20px; right: 20px; margin-left: 0; width: auto; }
}

.ui-dark .ui-notify figure { background-color: #444; box-shadow: 0 3px 20px rgba(0,0,0,0.3); color: #FFF; }

.ui-objecttree { font-family: Menlo, Consolas, monospace; font-size: 10px; color: #000; overflow: hidden; white-space: pre-wrap; }
.ui-objecttree-item { margin-left: 16px; position: relative; }
.ui-objecttree-item-key:hover { background-color: #f6f6f6; }
.ui-objecttree-key { color: #1A8B95; }
.ui-objecttree-number { color: #6d49ff; }
.ui-objecttree-boolean { color: #1B7F16; }
.ui-objecttree-null { color: #777; font-style: italic; }
.ui-objecttree-string { color: #ff6e6e; }
.ui-objecttree-date { color: #acacac; }
.ui-objecttree-item > div:not(.ui-objecttree-item):hover > .toolbox, .ui-objecttree-item:hover > .toolbox { display: block; }
.ui-objecttree .toolbox { display: none; position: absolute; right: 0; top: -3px; background-color: #e2e2e2; padding: 2px 4px; border-radius: 3px; font-size: 12px; color: #8e8e8e; cursor: pointer; }
.ui-objecttree .toolbox i { margin-right: 4px; }
.ui-objecttree .toolbox i:hover { margin-right: 4px; color: black; }
.ui-objecttree .toolbox i:last-child{ margin-right: 0; }
.ui-objecttree .ml { margin-left: 16px; }
.ti-rotate-270 { -webkit-transform: rotate(270deg); transform: rotate(270deg); }
.ui-objecttree .ti.ti-chevron-down { font-size: 10px; margin-right: 4px; padding: 1px 2px; background-color: #c6c6c6; border-radius: 2px; cursor: pointer; }
.ui-objecttree .ti.ti-chevron-down.ti-rotate-270 { background-color: #9fb0ff; }

.ui-dark .ui-objecttree { color: #A0A0A0; background-color: #404040; }
.ui-dark .ui-objecttree-item-key:hover { background-color: #353535; }
.ui-dark .ui-objecttree .toolbox { background-color: #6e6e6e; color: #cbcbcb; }
.ui-dark .ui-objecttree .ti.ti-chevron-down { background-color: #414141; }
.ui-dark .ui-objecttree .ti.ti-chevron-down.ti-rotate-270 { background-color: #9fb0ff; color: #e5e5e5; }
.ui-dark .ui-objecttree .toolbox i:hover { color: white; }

.ui-part-absolute { position: absolute; z-index: 10; background-color: #FFF; }

.ui-properties { border: 1px solid #F0F0F0; background-color: #F0F0F0; }
.ui-properties-container { padding: 0 0 20px 0; }
.ui-properties-group:first-child { margin-top: 10px; }
.ui-properties-group:lastchild-child section { margin-bottom: 0; }
.ui-properties-group label { display: block; padding: 3px 9px; font-size: 12px; font-weight: bold; cursor: pointer; }
.ui-properties-group label i { width: 16px; }
.ui-properties-group label i:before { content: '\\f146'; }
.ui-properties-hidden label i:before { content: '\\f0fe' !important; }
.ui-properties-group section { margin: 5px 10px; margin-bottom: 10px; }
.ui-properties-group section > div:first-child { border-top-left-radius: 2px; border-top-right-radius: 2px; }
.ui-properties-group section > div:last-child { border-bottom-left-radius: 2px; border-bottom-right-radius: 2px; }
.ui-properties-hidden section { display: none; }
.ui-properties-item { height: 22px; background-color: #FFF; margin-bottom: 1px; font-size: 12px; }
.ui-properties-key { float: left; width: 40%; border-right: 1px solid #E0E0E0; line-height: 22px; padding: 0 5px; text-overflow: ellipsis; white-space: nowrap; overflow: hidden; }
.ui-properties-value { float: right; width: 60%; line-height: 21px; }
.ui-properties-string, .ui-properties-number, .ui-properties-date, .ui-properties-list, .ui-properties-file { padding: 0 6px; }
.ui-properties-string input, .ui-properties-number input, .ui-properties-date input { outline: 0; height: 21px; padding: 0; margin: 0; width: 100%; border: 0; line-height: 21px; background-color: transparent; }
.ui-properties-bool, .ui-properties-list, .ui-properties-color, .ui-properties-fontawesome, .ui-properties-emoji, .ui-properties-file { line-height: 22px; }
.ui-properties-bool span { width: 14px; height: 14px; display: inline-block; border: 1px solid #D0D0D0; line-height: 14px; font-size: 9px; text-align: center; margin: 4px 0 0 6px; border-radius: var(--radius); position: relative; cursor: pointer; color: #FFF; vertical-align: top; }
.ui-properties-bool .checked { background-color: var(--color); border-color: var(--color); }
.ui-properties-fontawesometoggle, .ui-properties-emojitoggle, .ui-properties-color { width: 34px; line-height: 22px; display: block; cursor: pointer; font-size: 14px; position: relative; border-right: 1px solid #E0E0E0; text-align: center; }
.ui-properties-fontawesometoggle { height: 22px; }
.ui-properties-list { cursor: pointer; }
.ui-properties-list i { float: right; width: 20px; line-height: 22px; text-align: right; }
.ui-properties-list span { display: block; margin-right: 25px; text-overflow: ellipsis; overflow: hidden; white-space: nowrap; }
.ui-properties-file { cursor: pointer; }
.ui-properties-file i { float: right; width: 20px; line-height: 22px; text-align: right; font-size: 10px; }
.ui-properties-file span { display: block; margin-right: 25px; text-overflow: ellipsis; overflow: hidden; white-space: nowrap; }
.ui-properties-changed { font-weight: bold; }
.ui-properties-color { padding: 3px 6px; }
.ui-properties-color span b { height: 16px; display: block; border-radius: var(--radius); color: gray; }
.ui-properties-invalid { font-weight: bold; color: red !important; }
.ui-properties-invalid .ui-properties-key { border-right-color: red !important; }
#propertiesupload { position: absolute; left: -100px; top: -100px; opacity: 0; }

.ui-large .ui-properties-group label { font-size: 16px; }
.ui-large .ui-properties-group label i { width: 20px; }
.ui-large .ui-properties-item { font-size: 15px; }
.ui-large .ui-properties-bool { padding: 0; }
.ui-large .ui-properties-bool span { width: 16px; height: 16px; margin-top: 3px; font-size: 10px; line-height: 16px; }

.ui-dark .ui-properties { border: 1px solid #404040; background-color: #303030; }
.ui-dark .ui-properties-item { background-color: #252525; }
.ui-dark .ui-properties-key { border-right-color: #404040; }
.ui-dark .ui-properties-fontawesometoggle, .ui-dark .ui-properties-emojitoggle, .ui-dark .ui-properties-color { border-right-color: #404040; }
.ui-dark .ui-properties-bool span { color: #252525; border-color: #404040; }
.ui-dark .ui-properties-bool span.checked { color: #FFF; border-color: var(--color); }
.ui-dark .ui-properties-changed { color: #FFF; }

.ui-radiobuttonexpert { color: #000; font-size: 14px; vertical-align: baseline; position: relative; }
.ui-radiobuttonexpert-label { margin-bottom: 5px; font-size: 12px; text-align: left; }
.ui-radiobuttonexpert-label-required:before { color: red; content: '*'; margin-right: 5px; }
.ui-large .ui-radiobuttonexpert-label { font-size: 14px; }
.ui-radiobuttonexpert-container { }


.ui-searchinput { height: 30px; border: 1px solid #E0E0E0; }
.ui-searchinput-left > span { float: left; }
.ui-searchinput-left > div { margin-left: 28px; }
.ui-searchinput-right > span { float: right; }
.ui-searchinput-right > div { margin-right: 28px; padding-left: 5px; }
.ui-searchinput input { border: 0; width: 100%; background-color: transparent; outline: 0; margin: 0; padding: 0; height: 28px; font-size: 12px; }
.ui-searchinput span { width: 28px; text-align: center; font-size: 12px; line-height: 29px; color: gray; }
.ui-searchinput-is span { cursor: pointer; color: red; }

.ui-dark .ui-searchinput { border-color: #404040; }

.json { font-family: Menlo, Consolas, monospace; color: #000; tab-size: 2; overflow: hidden; white-space: pre-wrap; }
.json-key { color: #1A8B95; }
.json-number { color: #3990B5; }
.json-true { color: #1B7F16; }
.json-false { color: #9C251D; }
.json-null { color: #777; font-style: italic; }
.json-uid { color: #1A4795; }
.json-color i { margin-right: 5px; vertical-align: middle; }
.json-icon { color: #451393; }
.json-icon i { margin-right: 5px; vertical-align: middle; }
.json-date { color: #BF3CB3; }

.ui-dark .json { color: #A0A0A0; }

.ui-viewbox { overflow: hidden; -ms-overflow-style: none; box-sizing: content-box }
.ui-viewbox-disabled { z-index: 5; position: absolute; background-color: rgba(255,255,255,0.8); }
.ui-viewbox-hidden { visibility: hidden; }
.ui-viewbox-centered-table { display: table; width: 100%; height: 100%; }
.ui-viewbox-centered-cell { display: table-cell; width: 100%; height: 100%; vertical-align: middle; text-align: center; }

/*
.ui-windows { width: 700px; height: 700px; overflow: hidden; position: absolute; border: 2px solid red; left: 500px; top: 100px; }
*/
.ui-windows-item { position: absolute; border-radius: var(--radius); box-shadow: 0 10px 20px rgba(0,0,0,0.03); background-color: #FFF; z-index: 4; }
.ui-windows-title { border: 1px solid #E0E0E0; border-radius: var(--radius) var(--radius) 0 0; height: 32px; }
.ui-windows-control { float: right; width: 30px; text-align: center; border-left: 1px solid #E0E0E0; line-height: 30px; cursor: pointer; font-size: 13px; }
i.ui-windows-control { transform: scale(1); font-size: 16px; }
.ui-windows-control:hover { background-color: #F9F9F9; }
.ui-windows-control.ti-times { color: red; border-radius: 0 var(--radius) 0 0; }
.ui-windows-title span { cursor: default; line-height: 31px; display: block; margin-right: 150px; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; padding: 0 0 0 10px; font-weight: bold; }
.ui-windows-nomove .ui-windows-title span { cursor: default; }
.ui-windows-title span i { margin-right: 5px; }
.ui-windows-body { border: 1px solid #E0E0E0; border-top: 0; border-radius: 0 0 var(--radius) var(--radius); overflow-x: hidden; }
.ui-windows-moving .ui-windows-item { pointer-events: none; }
.ui-windows-dragged { z-index: 6; pointer-events: unset !important; }
.ui-windows-dragged .ui-windows-title { background-color: #FAFAFA; }
.ui-windows-focused { z-index: 5; }
.ui-windows-maximized { box-shadow: none; }
.ui-windows-maximized .ui-windows-title { border-left: 0; border-right: 0; border-radius: 0; border-top: 0 }
.ui-windows-maximized .ui-windows-control { height: 31px; }
.ui-windows-maximized .ui-windows-body { border: 0; }
.ui-windows-maximized .ui-windows-title .ti-window:before { content: '\\ea01'; }
.ui-windows-minimized .ui-windows-body { display: none; }
.ui-windows-nominimize .ui-windows-control[data-name='minimize'] { display: none; }
.ui-windows-nomaximize .ui-windows-control[data-name='maximize'] { display: none; }
.ui-windows-noclose .ui-windows-control[data-name='close'] { display: none; }
.ui-windows-nomenu .ui-windows-control[data-name='menu'] { display: none; }
.ui-windows-noresize .ui-windows-resize { display: none; }
.ui-windows-minimized .ui-windows-resize { display: none; }
.ui-windows-resize { position: absolute; width: 5px; height: 5px; }
.ui-windows-resize-tl { left: 0; top: 0; cursor: nwse-resize; }
.ui-windows-resize-tr { right: 0; top: 0; cursor: nesw-resize; }
.ui-windows-resize-bl { left: 0; bottom: 0; cursor: nesw-resize; }
.ui-windows-resize-br { right: 0; bottom: 0; cursor: nwse-resize; }
.ui-windows-block iframe, .ui-windows-block webview { pointer-events: none; }
.ui-windows-resizer { position: absolute; border-radius: var(--radius); border: 1px dashed #C0C0C0; z-index: 7; pointer-events: none; }

.ui-dark .ui-windows-item { background-color: #202020; box-shadow: 0 10px 20px rgba(0,0,0,0.08); }
.ui-dark .ui-windows-title { border-color: #404040; }
.ui-dark .ui-windows-body { border-color: #404040; }
.ui-dark .ui-windows-control { border-color: #404040; }
.ui-dark .ui-windows-control:hover { background-color: #272727; }
.ui-dark .ui-windows-dragged .ui-windows-title { background-color: #272727; }
.ui-dark .ui-windows-resizer { border-color: #777; }`);

COMPONENT('approve', 'cancel:Cancel', function(self, config, cls) {

	var cls2 = '.' + cls;
	var events = {};
	var buttons;
	var oldcancel;

	self.readonly();
	self.singleton();
	self.nocompile && self.nocompile();

	self.make = function() {

		self.aclass(cls + ' hidden');
		self.html('<div><div class="{0}-body"><span class="{0}-close"><i class="ti ti-times"></i></span><div class="{0}-content"></div><div class="{0}-buttons"><button data-index="0"></button><button data-index="1"></button></div></div></div>'.format(cls));

		buttons = self.find(cls2 + '-buttons').find('button');

		self.event('click', 'button', function() {
			self.hide(+$(this).attrd('index'));
		});

		self.event('click', cls2 + '-close', function() {
			self.callback = null;
			self.hide(-1);
		});

		self.event('click', function(e) {
			var t = e.target.tagName;
			if (t !== 'DIV')
				return;
			var el = self.find(cls2 + '-body');
			el.aclass(cls + '-click');
			setTimeout(function() {
				el.rclass(cls + '-click');
			}, 300);
		});
	};

	events.keydown = function(e) {
		var index = e.which === 13 ? 0 : e.which === 27 ? 1 : null;
		if (index != null) {
			self.find('button[data-index="{0}"]'.format(index)).trigger('click');
			e.preventDefault();
			e.stopPropagation();
			events.unbind();
		}
	};

	events.bind = function() {
		$(W).on('keydown', events.keydown);
	};

	events.unbind = function() {
		$(W).off('keydown', events.keydown);
	};

	self.show = function(message, a, b, fn) {

		clearTimeout2(self.id);

		if (typeof(b) === 'function') {
			fn = b;
			b = config.cancel;
		}

		if (M.scope)
			self.currscope = M.scope();

		self.callback = fn;

		var icon = a.match(/"[a-z0-9-\s]+"/);
		if (icon) {

			var tmp = icon + '';
			if (tmp.indexOf(' ') == -1)
				tmp = 'ti ti-' + tmp;

			a = a.replace(icon, '').trim();
			icon = '<i class="{0}"></i>'.format(tmp.replace(/"/g, ''));
		} else
			icon = '';

		var color = a.match(/#[0-9a-f]+/i);
		if (color)
			a = a.replace(color, '').trim();

		buttons.eq(0).css('background-color', color || '').html(icon + a);

		if (oldcancel !== b) {
			oldcancel = b;
			buttons.eq(1).html(b);
		}

		self.find(cls2 + '-content').html(message.replace(/\n/g, '<br />'));
		$('html').aclass(cls + '-noscroll');
		self.rclass('hidden');
		events.bind();
		self.aclass(cls + '-visible', 5);
		document.activeElement && document.activeElement.blur();
	};

	self.hide = function(index) {

		if (!index) {
			self.currscope && M.scope(self.currscope);
			self.callback && self.callback(index);
		}

		self.rclass(cls + '-visible');
		events.unbind();

		setTimeout2(self.id, function() {
			$('html').rclass(cls + '-noscroll');
			self.aclass('hidden');
		}, 50);
	};
});

COMPONENT('box', 'zindex:12;padding:25;scrollbar:1;scrolltop:1;style:1;align:center;background:1;transparent:0', function(self, config, cls) {

	var cls2 = '.' + cls;
	var csspos = {};
	var nav = false;
	var init = false;

	if (!W.$$box) {

		W.$$box_level = W.$$box_level || 1;
		W.$$box = true;

		$(document).on('click', cls2 + '-button-close', function() {
			SET($(this).attrd('path'), '');
		});

		var resize = function() {
			setTimeout2(self.name, function() {
				for (var i = 0; i < M.components.length; i++) {
					var com = M.components[i];
					if (com.name === 'box' && !HIDDEN(com.dom) && com.$ready && !com.$removed)
						com.resize();
				}
			}, 200);
		};

		ON('resize2', resize);

		$(document).on('click', cls2 + '-container', function(e) {

			if (e.target === this) {
				var com = $(this).component();
				if (com && com.config.closeoutside) {
					com.set('');
					return;
				}
			}

			var el = $(e.target);
			if (el.hclass(cls + '-container') && el.hclass(cls + '-style-1')) {
				var form = el.find(cls2);
				var c = cls + '-animate-click';
				form.aclass(c);
				setTimeout(function() {
					form.rclass(c);
				}, 300);
			}
		});
	}

	self.readonly();
	self.submit = function() {
		if (config.submit)
			self.EXEC(config.submit, self.hide, self.element);
		else
			self.hide();
	};

	self.cancel = function() {
		config.cancel && self.EXEC(config.cancel, self.hide);
		self.hide();
	};

	self.hide = function() {
		if (config.independent)
			self.hideforce();
		self.set('');
	};

	self.icon = function(value) {
		var el = this.rclass2('fa');
		if (value.icon)
			el.aclass(self.faicon(value.icon)).rclass('hidden');
		else
			el.aclass('hidden');
	};

	self.resize = function() {

		if (self.hclass('hidden'))
			return;

		var padding = WIDTH() === 'xs' ? 0 : config.padding;
		var ui = self.find(cls2);

		csspos.height = WH - (config.style == 1 ? (padding * 2) : padding);
		csspos.top = config.style === 3 ? 0 : padding;

		var w = config.width;
		if (w > WW) {
			// w = WW - padding;
			csspos.width = '';
			csspos.maxwidth = '';
			w = 0;
		} else {
			csspos.width = w + 'px';
			csspos.maxwidth = w + 'px';
		}

		// csspos.width = w;
		ui.css(csspos);
		self.element.css('padding', '0 ' + padding + 'px');

		var el = self.find(cls2 + '-title');
		var th = el.height();

		csspos = { height: csspos.height - th };

		if (w)
			csspos.width = w;

		if (nav)
			csspos.height -= nav.height() + 5;

		self.find(cls2 + '-body').css(csspos);
		self.scrollbar && self.scrollbar.resize();
		self.element.SETTER('*', 'resize');
	};

	self.make = function() {

		var html = '<div id="{0}" class="hidden {4}-container invisible{6}"><div class="{4}{5}"{1}><div data-bind="@config__text .{4}-label:value.title__exec .{4}-icon:@icon" class="{4}-title"><button name="cancel" class="{4}-button-close{3}" data-path="{2}"><i class="ti ti-times"></i></button><i class="{4}-icon"></i><span class="{4}-label"></span></div><div class="{4}-body"></div></div>'.format(self.ID, config.width ? (' style="max-width:' + config.width + 'px"') : '', self.path, config.closebutton == false ? ' hidden' : '', cls, config.align === 'center' ? '' : (' ' + cls + '-align-' + config.align), ' ' + cls + '-' + (config.background ? '' : 'no') + 'bg');
		$(document.body).append(html);

		var scr = self.find('> script');
		self.template = scr.length ? scr.html().trim() : '';
		scr.length && scr.remove();

		var el = $('#' + self.ID);
		var body = el.find(cls2 + '-body')[0];
		var counter = 0;

		el.css('padding', '0 ' + config.padding + 'px');

		while (self.dom.children.length) {
			var child = self.dom.children[0];
			if (child.tagName === 'NAV') {
				nav = $(child);
				if (counter) {
					body.parentNode.appendChild(child);
				} else {
					el.find(cls2 + '-title')[0].appendChild(child);
					nav = null;
				}
			} else
				body.appendChild(child);
			counter++;
		}

		self.rclass('hidden invisible');
		var csscls = self.attr('class');
		csscls && el.aclass(csscls);
		self.replace(el, true);

		if (config.scrollbar)
			self.scrollbar = SCROLLBAR(self.find(cls2 + '-body'), { shadow: config.scrollbarshadow, visibleY: config.visibleY, orientation: 'y' });

		self.aclass(cls + '-style-' + config.style);

		if (config.transparent)
			self.aclass(cls + '-transparent');

		self.event('scroll', function() {
			EMIT('scroll', self.name);
			EMIT('reflow', self.name);
		});

		self.event('click', 'button[name]', function() {
			var t = this;
			switch (t.name) {
				case 'submit':
					self.submit(self.hide);
					break;
				case 'cancel':
					!t.disabled && self[t.name](self.hide);
					break;
			}
		});

		config.enter && self.event('keydown', 'input', function(e) {
			e.which === 13 && !self.find('button[name="submit"]')[0].disabled && setTimeout2(self.ID + 'enter', self.submit, 500);
		});
	};

	self.configure = function(key, value, init, prev) {
		if (!init) {
			switch (key) {
				case 'background':
					self.tclass(cls + '-bg', !!value);
					break;
				case 'algin':
					self.rclass2(cls + '-align').aclass(cls + '–align-' + value);
					break;
				case 'width':
					if (value !== prev) {
						self.find(cls2).css('max-width', value + 'px');
						self.resize();
					}
					break;
				case 'closebutton':
					self.find(cls2 + '-button-close').tclass('hidden', value !== true);
					break;
			}
		}
	};

	self.esc = function(bind) {
		if (bind) {
			if (!self.$esc) {
				self.$esc = true;
				$(W).on('keydown', self.esc_keydown);
			}
		} else {
			if (self.$esc) {
				self.$esc = false;
				$(W).off('keydown', self.esc_keydown);
			}
		}
	};

	self.esc_keydown = function(e) {
		if (e.which === 27 && !e.isPropagationStopped()) {
			var val = self.get();
			if (!val || config.if === val) {
				e.preventDefault();
				e.stopPropagation();
				self.hide();
			}
		}
	};

	self.hideforce = function() {
		if (!self.hclass('hidden')) {
			self.aclass('hidden');
			self.release(true);
			self.esc(false);
			self.find(cls2).rclass(cls + '-animate');
			W.$$box_level--;
		}
	};

	var allowscrollbars = function() {
		$('html').tclass(cls + '-noscroll', !!$(cls2 + '-container').not('.hidden').length);
	};

	self.setter = function(value) {

		setTimeout2(self.name + '-noscroll', allowscrollbars, 50);

		var isHidden = value !== config.if;

		if (self.hclass('hidden') === isHidden) {
			if (!isHidden) {
				config.reload && self.EXEC(config.reload, self);
				config.default && DEFAULT(self.makepath(config.default), true);
				config.scrolltop && self.scrollbar && self.scrollbar.scrollTop(0);
			}
			return;
		}

		setTimeout2(cls, function() {
			EMIT('reflow', self.name);
		}, 10);

		if (isHidden) {
			if (!config.independent)
				self.hideforce();
			return;
		}

		if (self.template) {
			var is = self.template.COMPILABLE();
			self.find(cls2).append(self.template);
			self.template = null;
			is && COMPILE();
		}

		if (W.$$box_level < 1)
			W.$$box_level = 1;

		W.$$box_level++;

		self.css('z-index', W.$$box_level * config.zindex);
		self.aclass('invisible');
		self.rclass('hidden');
		self.release(false);
		self.find(cls2).css({ 'max-width': value + 'px', width: '' });

		config.scrolltop && self.scrollbar && self.scrollbar.scrollTop(0);
		config.reload && self.EXEC(config.reload, self);
		config.default && DEFAULT(self.makepath(config.default), true);

		self.resize();

		setTimeout(function() {
			self.rclass('invisible');
			self.find(cls2).aclass(cls + '-animate');
			if (!init && isMOBILE) {
				$('body').aclass('hidden');
				setTimeout(function() {
					$('body').rclass('hidden');
				}, 50);
			}

			config.autofocus && self.autofocus(config.autofocus);
			init = true;
		}, 200);

		// Fixes a problem with freezing of scrolling in Chrome
		setTimeout2(self.ID, function() {
			self.css('z-index', (W.$$box_level * config.zindex) + 1);
		}, 500);

		config.closeesc && self.esc(true);
	};
});

COMPONENT('clipboard', function(self, config, cls) {

	var container;

	self.singleton();
	self.readonly();
	self.nocompile();

	self.make = function() {
		if (navigator.clipboard && W.isSecureContext) {
			self.copy = function(value) {
				navigator.clipboard.writeText(value).catch(err => console.error(err));
			};
		} else {
			var id = 'clipboard' + self.id;
			$(document.body).append('<textarea id="{0}" class="{1}"></textarea>'.format(id, cls));
			container = $('#' + id);
			self.copy = function(value) {
				container.val(value);
				container.focus();
				container.select();
				document.execCommand('copy');
				container.blur();
			};
		}
	};

	self.setter = function(value) {
		value && self.copy(value);
	};
});

COMPONENT('colorpicker', function(self, config, cls) {

	var cls2 = '.' + cls;
	var is = false;
	var events = {};
	var colors = [['', 'E73323', 'EC8632', 'FFFD54', '68B25B', '7CFBFD', '4285F4', 'E73CF7', 'E8357E', '73197B', '91683C', '808080'],['FFFFFF', 'E8E8E8', 'D1D1D1', 'B9B9B9', 'A2A2A2', '8B8B8B', '747474', '5D5D5D', '464646', '2E2E2E', '171717', '000000'],['5C0E07', '5E350F', '66651C', '41641A', '2D6419', '2D6438', '2D6465', '133363', '000662', '2D0962', '5C1262', '5C0F32', '8A1A11', '8E501B', '99982F', '62962B', '47962A', '479654', '479798', '214D94', '010E93', '451393', '8A2094', '8A1C4C', 'B9261A', 'BD6B27', 'CCCB41', '83C83C', '61C83B', '61C871', '62C9CA', '2E67C5', '0216C4', '5C1DC4', 'B92EC5', 'B92865', 'E73323', 'EC8632', 'FFFD54', 'A4FB4E', '7BFA4C', '7BFA8D', '7CFBFD', '3B80F7', '041EF5', '7327F5', 'E73CF7', 'E7357F', 'E8483F', 'EF9D4B', 'FFFE61', 'B4FB5C', '83FA5A', '83FAA2', '83FBFD', '5599F8', '343CF5', '8C42F6', 'E84FF7', 'E84A97', 'EA706B', 'F2B573', 'FFFE7E', 'C5FC7C', '96FA7A', '96FBB9', '96FCFD', '7BB2F9', '666AF6', 'A76EF7', 'EB73F8', 'EA71B0', 'F6CECD', 'FAE6CF', 'FFFED1', 'EBFED1', 'D7FDD0', 'D7FDE7', 'D8FEFE', 'D1E5FD', 'CCCDFB', 'E1CEFB', 'F6CFFC', 'F6CEE4']];

	self.singleton();
	self.readonly();
	self.blind();
	self.nocompile();

	self.make = function() {

		var html = '';
		for (var i = 0; i < colors.length; i++) {
			html += '<div>';
			for (var j = 0; j < colors[i].length; j++) {
				var color = colors[i][j];
				html += '<span class="{0}-cell" data-color="{2}"><span style="{1}">{3}</span></span>'.format(cls, color ? ('background-color:#' + color) : '', color, color ? '' : '<i class="ti ti-ban"></i>');
			}
			html += '</div>';
		}

		self.html('<div class="{0}"><div class="{0}-body">{1}</div></div>'.format(cls, html));
		self.aclass(cls + '-container hidden');

		self.event('click', cls2 + '-cell', function() {
			var el = $(this);
			var color = el.find('span').attr('style').replace('background-color:', '');
			self.opt.callback && self.opt.callback(color ? self.opt.opacity ? self.hex2rgba(color, self.opt.opacity) : color : '');
			self.hide();
		});

		events.click = function(e) {
			var el = e.target;
			var parent = self.dom;
			do {
				if (el == parent)
					return;
				el = el.parentNode;
			} while (el);
			self.hide();
		};

		self.on('scroll + reflow + resize + resize2', self.hide);
	};

	self.hex2rgba = function(hex, opacity) {

		var c = (hex.charAt(0) === '#' ? hex.substring(1) : hex).split('');

		if(c.length === 3)
			c = [c[0], c[0], c[1], c[1], c[2], c[2]];

		var a = c.splice(6);
		if (a.length)
			a = parseFloat(parseInt((parseInt(a.join(''), 16) / 255) * 1000) / 1000);
		else
			a = opacity || '1';

		c = '0x' + c.join('');
		return 'rgba(' + [(c >> 16) & 255, (c >> 8) & 255, c & 255].join(',') + ',' + a + ')';
	};

	self.bindevents = function() {
		if (!events.is) {
			events.is = true;
			$(document).on('click', events.click);
		}
	};

	self.unbindevents = function() {
		if (events.is) {
			events.is = false;
			$(document).off('click', events.click);
		}
	};

	self.show = function(opt) {

		var tmp = opt.element ? opt.element instanceof jQuery ? opt.element[0] : opt.element.element ? opt.element.dom : opt.element : null;

		if (is && tmp && self.target === tmp) {
			self.hide();
			return;
		}

		events.is && self.unbindevents();
		self.target = tmp;
		self.opt = opt;

		var css = {};

		if (is) {
			css.left = 0;
			css.top = 0;
			self.element.css(css);
		} else
			self.rclass('hidden');

		var target = $(opt.element);
		var w = self.element.width();
		var offset = target.offset();

		if (opt.element) {
			switch (opt.align) {
				case 'center':
					css.left = Math.ceil((offset.left - w / 2) + (target.innerWidth() / 2));
					break;
				case 'right':
					css.left = (offset.left - w) + target.innerWidth();
					break;
				default:
					css.left = offset.left;
					break;
			}

			css.top = opt.position === 'bottom' ? (offset.top - self.element.height() - 10) : (offset.top + target.innerHeight() + 10);

		} else {
			css.left = opt.x;
			css.top = opt.y;
		}

		if (opt.offsetX)
			css.left += opt.offsetX;

		if (opt.offsetY)
			css.top += opt.offsetY;

		is = true;
		self.element.css(css);
		setTimeout(self.bindevents, 10);
	};

	self.hide = function() {
		if (is) {
			is = false;
			self.target = null;
			self.opt = null;
			setTimeout(self.unbindevents, 50);
			self.aclass('hidden');
		}
	};
});

COMPONENT('columns', 'parent:window;margin:0;fontsize:0', function(self, config, cls) {

	var columns;
	var cache;

	self.readonly();

	self.make = function() {
		self.aclass(cls + (config.noborder ? (' ' + cls + '-noborder') : ''));
		columns = self.find('> section').aclass(cls + '-col');
		self.rclass('hidden');
		self.resize();
		self.on('resize2', self.resize);
	};

	self.resize = function() {
		setTimeout2(self.ID, self.resizeforce, 200);
	};

	self.resizeforce = function() {

		var parent = self.parent(config.parent);
		var wh = parent.height();
		var w = self.element.width() || parent.width();

		if (!w)
			return;

		var key = w + 'x' + wh;
		if (cache === key)
			return;

		cache = key;
		var notdefined = [];
		var total = 0;
		var css = {};

		var d = WIDTH();
		var m = config['margin' + d] || 0;

		if (config.margin)
			wh -= config.margin;

		if (m)
			wh -= m;

		var index = 0;
		switch (d) {
			case 'md':
				index = 1;
				break;
			case 'sm':
				index = 2;
				break;
			case 'xs':
				index = 3;
				break;
		}

		for (var i = 0; i < columns.length; i++) {
			var el = $(columns[i]);
			var size = el.attrd('size');

			if (size) {
				size = size.split(',');
				var s = size[index];
				if (s == null) {
					while (index > -1 && !s) {
						index--;
						s = size[index];
					}
				}

				if (s === '0')
					s = 0;

				if (s) {

					var p = s.charAt(s.length - 1) === '%';
					if (p)
						s = s.substring(0, s.length - 1);

					if (p) {
						size = +s;
						size = (w / 100) * size;
					} else
						size = +s;

					total += size;
					css.width = size;
					css.height = wh;

					if (config.fontsize)
						css['font-size'] = Math.ceil((size / w) * 100) + '%';

					el.css(css).rclass('hidden invisible');
				} else
					el.aclass('hidden');
			} else
				notdefined.push(el);
		}

		var sum = ((w - total) / notdefined.length).floor(3);

		for (var i = 0; i < notdefined.length; i++) {
			var el = notdefined[i];
			css.width = sum;
			css.height = wh;

			if (config.fontsize)
				css['font-size'] = Math.ceil((sum / w) * 100) + '%';

			el.css(css);
		}

		self.css('height', wh);
		self.rclass('invisible');
		self.element.SETTER('*/resize');
	};

	self.setter = function() {
		self.resize();
	};

});

COMPONENT('datagrid', 'checkbox:true;colwidth:150;schema:default;rowheight:28;minheight:200;clusterize:true;limit:80;rememberfilter:1;filterlabel:Filter;height:auto;margin:0;resize:true;reorder:true;sorting:true;boolean:true,on,yes;pluralizepages:# pages,# page,# pages,# pages;pluralizeitems:# items,# item,# items,# items;remember:true;highlight:false;unhighlight:true;autoselect:false;buttonapply:Apply;buttonreset:Reset;allowtitles:false;fullwidth_xs:false;clickid:id;dirplaceholder:Search;autoformat:1;controls:1;hfuncicon:square-root-alt;pagination:true;ovalue:id;otext:name', function(self, config) {

	var opt = { filter: {}, filtercache: {}, filtercl: {}, filtervalues: {}, scroll: false, selected: {}, operation: '' };
	var header, vbody, footer, container, ecolumns, isecolumns = false, ready = false;
	var sheader, sbody, econtrols;
	var Theadercol = Tangular.compile('<div class="dg-hcol dg-col-{{ index }}{{ if sorting }} dg-sorting{{ fi }}" data-index="{{ index }}">{{ if sorting }}<i class="dg-sort ti ti-sort"></i>{{ fi }}<div class="dg-label{{ alignheader }}"{{ if labeltitle }} title="{{ labeltitle }}"{{ fi }}{{ if reorder }} draggable="true"{{ fi }}>{{ label | raw }}</div>{{ if filter }}<div class="dg-filter{{ alignfilter }}{{ if filterval != null && filterval !== \'\' }} dg-filter-selected{{ fi }}"><i class="ti dg-filter-cancel ti-times"></i>{{ if options }}<label data-name="{{ name }}">{{ if filterval }}{{ filterval }}{{ else }}{{ filter }}{{ fi }}</label>{{ else }}<input autocomplete="new-password" type="text" placeholder="{{ filter }}" class="dg-filter-input" name="{{ name }}{{ ts }}" data-name="{{ name }}" value="{{ filterval }}" />{{ fi }}</div>{{ else }}<div class="dg-filter-empty">&nbsp;</div>{{ fi }}</div>');
	var isIE = (/msie|trident/i).test(navigator.userAgent);
	var isredraw = false;
	var forcescroll = '';
	var schemas = {};
	var controls = { el: null, timeout: null, is: false, cache: {} };

	self.meta = opt;

	function Cluster(el, config) {

		var self = this;
		var dom = el[0];
		var scrollel = el;

		self.row = config.rowheight;
		self.rows = [];
		self.limit = config.limit;
		self.pos = -1;
		self.enabled = !!config.clusterize;
		self.plus = 0;
		self.scrolltop = 0;
		self.prev = 0;

		var seh = '<div style="height:0"></div>';
		var set = $(seh);
		var seb = $(seh);

		var div = document.createElement('DIV');
		dom.appendChild(set[0]);
		dom.appendChild(div);
		dom.appendChild(seb[0]);
		self.el = $(div);

		self.render = function() {

			var t = self.pos * self.frame;
			var b = (self.rows.length * self.row) - (self.frame * 2) - t;
			var pos = self.pos * self.limit;
			var posto = pos + (self.limit * 2);

			set.css('height', t);
			seb.css('height', b < 2 ? isMOBILE ? (config.exec && config.pagination ? (self.row + 1) : (self.row * 2.25)) >> 0 : 3 : b);

			var tmp = self.scrollbar[0].scrollTop;
			var node = self.el[0];
			// node.innerHTML = '';

			var child = node.firstChild;

			while (child) {
				node.removeChild(child);
				child = node.firstChild;
			}

			for (var i = pos; i < posto; i++) {
				if (typeof(self.rows[i]) === 'string')
					self.rows[i] = $(self.rows[i])[0];
				if (self.rows[i])
					node.appendChild(self.rows[i]);
				else
					break;
			}

			if (self.prev < t)
				self.scrollbar[0].scrollTop = t;
			else
				self.scrollbar[0].scrollTop = tmp;

			self.prev = t;

			if (self.grid.selected) {
				var index = opt.rows.indexOf(self.grid.selected);
				if (index !== -1 && (index >= pos || index <= (pos + self.limit)))
					self.el.find('.dg-row[data-index="{0}"]'.format(index)).aclass('dg-selected');
			}
		};

		self.scrolling = function() {

			var y = self.scrollbar[0].scrollTop + 1;
			self.scrolltop = y;

			if (y < 0)
				return;

			var frame = Math.ceil(y / self.frame) - 1;
			if (frame === -1)
				return;

			if (self.pos !== frame) {

				// The content could be modified
				var plus = (self.el[0].offsetHeight / 2) - self.frame;
				if (plus > 0) {
					frame = Math.ceil(y / (self.frame + plus)) - 1;
					if (self.pos === frame)
						return;
				}

				if (self.max && frame >= self.max)
					frame = self.max;

				self.pos = frame;

				if (self.enabled)
					self.render();
				else {

					var node = self.el[0];
					var child = node.firstChild;

					while (child) {
						node.removeChild(child);
						child = node.firstChild;
					}

					for (var i = 0; i < self.rows.length; i++) {
						if (typeof(self.rows[i]) === 'string')
							self.rows[i] = $(self.rows[i])[0];
						self.el[0].appendChild(self.rows[i]);
					}
				}

				self.scroll && self.scroll();
				config.change && self.grid.SEEX(config.change, null, null, self.grid);
			}

			if (self.grid.config.exec && !self.grid.config.pagination && !self.grid.isloading) {
				var tmp = self.height + y;
				var h = self.scrollbar[0].scrollHeight;
				if (!self.grid.hclass('noscroll') && tmp >= h && h !== self.scrollheight) {
					self.scrollheight = h;
					self.grid.isloading = true;
					self.grid.operation('page');
				}
			}
		};

		self.update = function(rows, noscroll) {

			if (noscroll != true)
				self.el[0].scrollTop = 0;

			self.limit = self.grid.config.limit;
			self.pos = -1;
			self.rows = rows;
			self.max = Math.ceil(rows.length / self.limit) - 1;
			self.frame = self.limit * self.row;
			self.height = self.scrollbar.height();
			self.grid.isloading = false;

			if (!self.enabled) {
				self.frame = 1000000;
			} else if (config.height === 'fluid') {
				self.limit = 1000000;
			} else if (self.limit * 2 > rows.length) {
				self.limit = rows.length;
				self.frame = self.limit * self.row;
				self.max = 1;
			}

			self.scrolling();
		};

		self.destroy = function() {
			self.el.off('scroll');
			self.rows = null;
		};

		self.scrollbar = scrollel.closest('.ui-scrollbar-area');
		self.scrollbar.on('scroll', self.scrolling);
	}

	self.destroy = function() {
		opt.cluster && opt.cluster.destroy();
	};

	// opt.cols    --> columns
	// opt.rows    --> raw rendered data
	// opt.render  --> for cluster

	self.init = function() {

		ON('resize + resize2', function() {
			setTimeout2('datagridresize', ASETTER('datagrid/resize'), 500);
		});

		Thelpers.ui_datagrid_autoformat = function(val, type) {

			switch (type) {
				case 'email':
					return val && val.length > 2 ? '<a href="mailto:{0}" class="dg-link"><i class="ti ti-envelope"></i>{0}</a>'.format(val) : val;
				case 'phone':
					return val && val.length > 2 ? '<a href="tel:{0}" class="dg-link"><i class="ti ti-phone"></i>{0}</a>'.format(val) : val;
				case 'url':
					return val && val.length > 7 && (/http(s):\/\//i).test(val) ? '<a href="{0}" target="_blank" class="dg-link"><i class="ti ti-globe-world"></i>{0}</a>'.format(val) : val;
			}

			return val;
		};

		Thelpers.ui_datagrid_checkbox = function(val) {
			return '<div class="dg-checkbox' + (val ? ' dg-checked' : '') + '" data-custom="1"><i class="ti ti-check"></i></div>';
		};

		Thelpers.ui_datagrid_colorize = function(val, encode) {
			var hash = HASH(val + '');
			var color = '#';
			for (var i = 0; i < 3; i++) {
				var value = (hash >> (i * 8)) & 0xFF;
				color += ('00' + value.toString(16)).substr(-2);
			}
			var tmp = encode ? Thelpers.encode(val) : val;
			return tmp ? '<span style="background:{0}" class="dg-colorize">{1}</span>'.format(color, tmp) : '';
		};
	};

	self.readonly();
	// self.bindvisible();
	self.nocompile();

	var reconfig = function() {
		self.tclass('dg-clickable', !!(config.click || config.dblclick));
	};

	self.configure = function(key, value, init) {
		switch (key) {
			case 'schema':
				!init && self.schema(value);
				break;
			case 'noborder':
				self.tclass('dg-noborder', !!value);
				break;
			case 'checkbox':
			case 'numbering':
				!init && self.cols(NOOP);
				break;
			case 'pluralizepages':
				config.pluralizepages = value.split(',').trim();
				break;
			case 'pluralizeitems':
				config.pluralizeitems = value.split(',').trim();
				break;
			case 'checked':
			case 'button':
			case 'exec':
				if (value && value.SCOPE)
					config[key] = value.SCOPE(self, value);
				break;
			case 'dblclick':
				if (value && value.SCOPE)
					config.dblclick = value.SCOPE(self, value);
				break;
			case 'click':
				if (value && value.SCOPE)
					config.click = value.SCOPE(self, value);
				break;
			case 'columns':
				self.datasource(value, function(path, value, type) {
					if (value) {
						opt.sort = null;
						opt.filter = {};
						opt.scroll = '';
						opt.selected = {};
						self.rebind(value, true);
						type && self.setter(null);
					}
				});
				break;
			case 'hfunc':
				if (value && typeof(value) === 'string')
					config.hfunc = self.makepath(value);
				break;
		}

		setTimeout2(self.ID + 'reconfigure', reconfig);
	};

	self.refresh = function() {
		self.refreshfilter();
	};

	self.applycolumns = function(use) {
		isecolumns = false;
		ecolumns.aclass('hidden');
		if (use) {
			var nothidden = {};
			ecolumns.find('.dg-columns-checkbox-checked').each(function() {
				nothidden[this.getAttribute('data-id')] = true;
			});
			self.cols(function(cols) {
				for (var i = 0; i < cols.length; i++) {
					var col = cols[i];
					col.hidden = nothidden[col.id] !== true;
				}
			});
		}
	};

	self.fn_in_changed = function(arr) {
		config.changed && self.SEEX(config.changed, arr || self.changed(), self);
	};

	self.fn_in_checked = function(arr) {
		config.checked && self.SEEX(config.checked, arr || self.checked(), self);
	};

	self.fn_refresh = function() {
		setTimeout2(self.ID + 'filter', function() {
			if (config.exec)
				self.operation(opt.operation);
			else
				self.refreshfilter(true);
		}, 50);
	};

	var makeopt = function() {
		return { filter: {}, filtervalues: {}, filtercl: {}, filtercache: {} };
	};

	self.make = function() {

		self.IDCSS = GUID(5);
		self.aclass('dg dg-noscroll dg-' + self.IDCSS + (config.height === 'fluid' ? ' dg-fluid' : ''));

		self.find('script').each(function() {

			var el = $(this);
			var id = el.attrd('id');
			var html = el.html();

			if (id)
				schemas[id] = { schema: html, opt: makeopt() };

			if (!schemas.default)
				schemas.default = { schema: html, opt: makeopt() };

		});

		controls.show = function(dom) {

			if (controls.ishidding || !opt.controls || !config.controls)
				return;

			var el = $(dom);
			var off = el.position();
			var css = {};
			var clshover = 'dg-row-hover';
			var index = el.attrd('index');
			controls.el && controls.el.rclass(clshover);
			controls.el = $(dom).aclass(clshover);

			var div = controls.cache[index];

			if (div === null) {
				controls.hide();
				return;
			}

			if (!div) {
				var html = opt.controls(opt.rows[+index]);
				div = controls.cache[index] = html ? $('<div>' + html + '</div>')[0] : null;
				controls.cache[index] = div;
				if (div === null) {
					controls.hide();
					return;
				}
			}

			while (true) {
				var child = econtrols[0].firstChild;
				if (child)
					econtrols[0].removeChild(child);
				else
					break;
			}

			econtrols[0].appendChild(div);
			css.top = Math.ceil(off.top - ((econtrols.height() / 2) - (config.rowheight / 2))) - 2;
			econtrols.css(css).rclass('hidden').aclass('dg-controls-visible', 50).attrd('index', index);
			controls.timeout = null;
			controls.is = true;
			controls.y = self.scrollbarY ? self.scrollbarY.scrollTop() : 0;
		};

		controls.hide = function(type) {
			if (controls.is) {

				// scrollbar
				if (type === 1) {
					var y = self.scrollbarY ? self.scrollbarY.scrollTop() : 0;
					if (controls.y === y)
						return;
				} else if (type === 2) {
					controls.ishidding = true;
					setTimeout(function() {
						controls.ishidding = false;
					}, 1000);
				}

				controls.el.rclass('dg-row-hover');
				controls.el = null;
				controls.is = false;
				econtrols.aclass('hidden').rclass('dg-controls-visible');
			}
		};

		ON('scroll', function() {
			controls.hide(1);
		});

		self.event('mouseenter', '.dg-row', function(e) {
			controls.timeout && clearTimeout(controls.timeout);
			controls.timeout = setTimeout(controls.show, controls.is ? 50 : 500, this, e);
		});

		var pagination = '';
		if (config.exec && config.pagination)
			pagination = '<div class="dg-footer hidden"><div class="dg-pagination-items hidden-xs"></div><div class="dg-pagination"><button name="page-first" disabled><i class=ti ti-angle-double-left"></i></button><button name="page-prev" disabled><i class="ti ti-angle-left"></i></button><div><input type="text" name="page" maxlength="5" class="dg-pagination-input" /></div><button name="page-next" disabled><i class="ti ti-angle-right"></i></button><button name="page-last" disabled><i class="ti ti-angle-double-right"></i></button></div><div class="dg-pagination-pages"></div></div>';

		self.dom.innerHTML = '<div class="dg-btn-columns"><i class="ti ti-caret-left"></i><span class="ti ti-columns"></span></div><div class="dg-columns hidden"><div><div class="dg-columns-body"></div></div><button class="dg-columns-button" name="columns-apply"><i class="ti ti-check-circle"></i>{1}</button><span class="dt-columns-reset">{2}</span></div><div class="dg-container"><div class="dg-controls"></div><span class="dg-resize-line hidden"></span><div class="dg-header-scrollbar"><div class="dg-header"></div><div class="dg-body-scrollbar"><div class="dg-body"></div></div></div></div>{0}'.format(pagination, config.buttonapply, config.buttonreset);

		header = self.find('.dg-header');
		vbody = self.find('.dg-body');
		footer = self.find('.dg-footer');
		container = self.find('.dg-container');
		ecolumns = self.find('.dg-columns');
		sheader = self.find('.dg-header-scrollbar');
		sbody = self.find('.dg-body-scrollbar');
		econtrols = self.find('.dg-controls');

		container.on('mouseleave', function() {
			controls.hide(2);
		});

		self.scrollbarY = config.height !== 'fluid' ? SCROLLBAR(sbody, { visibleY: true, orientation: 'y', controls: container, marginY: isMOBILE ? 0 : 54 }) : null;
		self.scrollbarX = SCROLLBAR(sheader, { visibleX: true, orientation: 'x', controls: container });

		var schemaname = config.schema;
		var schema = schemas[schemaname];

		if (schema) {
			self.rebind(schema.schema);
			schemas.$current = schemaname;
		}

		var events = {};

		events.mouseup = function(e) {
			if (r.is) {
				r.is = false;
				r.line.aclass('hidden');
				r.el.css('height', r.h);
				var x = r.el.css('left').parseInt();
				var index = +r.el.attrd('index');
				var width = opt.cols[index].width + (x - r.x);
				self.resizecolumn(index, width);
				e.preventDefault();
				e.stopPropagation();
			}
			events.unbind();
		};

		container.on('contextmenu', function(e) {
			if (config.contextmenu) {
				e.preventDefault();
				self.EXEC(config.contextmenu, e, self);
			}
		});

		events.unbind = function() {
			$(W).off('mouseup', events.mouseup).off('mousemove', events.mousemove);
		};

		events.bind = function() {
			$(W).on('mouseup', events.mouseup).on('mousemove', events.mousemove);
		};

		var hidedir = function() {
			ishidedir = true;
			SETTER('!directory', 'hide');
			setTimeout(function() {
				ishidedir = false;
			}, 800);
		};

		var ishidedir = false;
		var r = { is: false };

		self.event('click', '.dg-btn-columns', function(e) {

			e.preventDefault();
			e.stopPropagation();

			controls.hide();

			var cls = 'hidden';
			if (isecolumns) {
				self.applycolumns();
			} else {
				var builder = [];

				for (var i = 0; i < opt.cols.length; i++) {
					var col = opt.cols[i];
					(col.listcolumn && !col.$hidden) && builder.push('<div><label class="dg-columns-checkbox{1}" data-id="{0}"><span><i class="ti ti-check"></i></span>{2}</label></div>'.format(col.id, col.hidden ? '' : ' dg-columns-checkbox-checked', col.text));
				}

				ecolumns.find('.dg-columns-body')[0].innerHTML = builder.join('');
				ecolumns.rclass(cls);
				isecolumns = true;
			}
		});

		header.on('click', 'label', function() {

			var el = $(this);
			var index = +el.closest('.dg-hcol').attrd('index');
			var col = opt.cols[index];
			var opts = col.options instanceof Array ? col.options : GET(self.makepath(col.options));
			var dir = {};

			if (typeof opts === 'function')
				opts = opts();

			controls.hide();
			dir.element = el;
			dir.items = opts;
			dir.key = col.otext;
			dir.offsetX = -6;
			dir.offsetY = -2;
			dir.placeholder = config.dirplaceholder;

			dir.callback = function(item) {
				self.applyfilterdirectory(el, col, item);
			};

			SETTER('directory', 'show', dir);
		});

		self.event('dblclick', '.dg-col', function(e) {
			controls.hide();
			e.preventDefault();
			e.stopPropagation();
			self.editcolumn($(this));
		});

		var dblclick = { ticks: 0, id: null, row: null };
		r.line = container.find('.dg-resize-line');

		var findclass = function(node) {
			var count = 0;
			while (true) {
				for (var i = 1; i < arguments.length; i++) {
					if (node.classList.contains(arguments[i]))
						return true;
				}
				node = node.parentNode;
				if ((count++) > 4)
					break;
			}
		};

		self.event('click', '.dg-row', function(e) {

			var now = Date.now();
			var el = $(this);
			var type = e.target.tagName;
			var target = $(e.target);

			if ((type === 'DIV' || type === 'SPAN')) {

				var cls = 'dg-selected';
				var elrow = el.closest('.dg-row');
				var index = +elrow.attrd('index');
				var row = opt.rows[index];
				if (!row)
					return;

				if (config.dblclick && dblclick.ticks && dblclick.ticks > now && dblclick.row === row && !findclass(e.target, 'dg-checkbox', 'dg-editable')) {
					config.dblclick && self.SEEX(config.dblclick, row, self, elrow, target);
					if (config.highlight && self.selected !== row) {
						opt.cluster.el.find('.' + cls).rclass(cls);
						self.selected = row;
						elrow.aclass(cls);
					}
					e.preventDefault();
					return;
				}

				dblclick.row = row;
				dblclick.ticks = now + 300;

				var rowarg = row;

				if (config.highlight) {
					opt.cluster.el.find('.' + cls).rclass(cls);
					if (!config.unhighlight || self.selected !== row) {
						self.selected = row;
						elrow.aclass(cls);
						controls.show(el[0]);
					} else {
						rowarg = self.selected = null;
						controls.is && controls.hide();
					}
				} else {
					if (controls.is)
						controls.hide();
					else if (rowarg)
						controls.show(el[0]);
				}

				config.click && self.SEEX(config.click, rowarg, self, elrow, target);
			}
		});

		self.reload = function() {
			self.operation('refresh');
		};

		self.empty = function() {
			self.set({ page: 1, pages: 0, count: 0, items: [], limit: 0 });
		};

		self.released = function(is) {
			!is && setTimeout(self.resize, 500);
		};

		self.event('click', '.dg-filter-cancel,.dt-columns-reset', function() {
			var el = $(this);

			controls.hide();

			if (el.hclass('dt-columns-reset'))
				self.resetcolumns();
			else {
				var tmp = el.parent();
				var input = tmp.find('input');
				if (input.length) {
					input.val('');
					input.trigger('change');
					return;
				}

				var label = tmp.find('label');
				if (label.length) {
					tmp.rclass('dg-filter-selected');
					var index = +el.closest('.dg-hcol').attrd('index');
					var col = opt.cols[index];
					var k = label.attrd('name');
					label.html(col.filter);
					forcescroll = opt.scroll = 'y';
					opt.operation = 'filter';
					delete opt.filter[k];
					delete opt.filtervalues[col.id];
					delete opt.filtercl[k];
					self.fn_refresh();
				}
			}
		});

		self.event('click', '.dg-label,.dg-sort', function() {

			var el = $(this).closest('.dg-hcol');

			controls.hide();

			if (!el.find('.dg-sort').length)
				return;

			var index = +el.attrd('index');

			for (var i = 0; i < opt.cols.length; i++) {
				if (i !== index)
					opt.cols[i].sort = 0;
			}

			var col = opt.cols[index];
			switch (col.sort) {
				case 0:
					col.sort = 1;
					break;
				case 1:
					col.sort = 2;
					break;
				case 2:
					col.sort = 0;
					break;
			}

			opt.sort = col;
			opt.operation = 'sort';
			forcescroll = '-';

			if (config.exec)
				self.operation(opt.operation);
			else
				self.refreshfilter(true);
		});

		isIE && self.event('keydown', 'input', function(e) {
			if (e.keyCode === 13)
				$(this).blur();
			else if (e.keyCode === 27)
				$(this).val('');
		});

		self.event('mousedown', function(e) {

			var el = $(e.target);

			if (!el.hclass('dg-resize'))
				return;

			controls.hide();
			events.bind();

			var offset = self.element.offset().left;
			r.el = el;
			r.offset = offset; //offset;

			var prev = el.prev();
			r.min = (prev.length ? prev.css('left').parseInt() : (config.checkbox ? 70 : 30)) + 50;
			r.h = el.css('height');
			r.x = el.css('left').parseInt();
			r.line.css('height', opt.height);
			r.is = true;
			r.isline = false;
			e.preventDefault();
			e.stopPropagation();
		});

		header.on('mousemove', function(e) {
			if (r.is) {
				var x = (e.pageX - r.offset - 10);
				var x2 = self.scrollbarX.scrollLeft() + x;
				if (x2 < r.min)
					x2 = r.min;

				r.el.css('left', x2);
				r.line.css('left', x + 9);

				if (!r.isline) {
					r.isline = true;
					r.line.rclass('hidden');
				}

				e.preventDefault();
				e.stopPropagation();
			}
		});

		self.applyfilterdirectory = function(label, col, item) {

			var val = item[col.ovalue];
			var is = val != null && val !== '';
			var name = label.attrd('name');

			opt.filtervalues[col.id] = val;

			if (is) {
				if (opt.filter[name] == val)
					return;
				opt.filter[name] = val;
			} else
				delete opt.filter[name];

			delete opt.filtercache[name];
			opt.filtercl[name] = val;

			forcescroll = opt.scroll = 'y';
			opt.operation = 'filter';
			label.parent().tclass('dg-filter-selected', is);
			label.text(is ? (item[col.otext] || '') : col.filter);
			self.fn_refresh();
		};

		var d = { is: false };

		self.event('dragstart', function(e) {
			!isIE && e.originalEvent.dataTransfer.setData('text/plain', GUID());
		});

		self.event('dragenter dragover dragexit drop dragleave', function (e) {

			e.stopPropagation();
			e.preventDefault();

			switch (e.type) {
				case 'drop':

					if (d.is) {
						var col = opt.cols[+$(e.target).closest('.dg-hcol').attrd('index')];
						col && self.reordercolumn(d.index, col.index);
					}

					d.is = false;
					break;

				case 'dragenter':
					if (!d.is) {
						d.index = +$(e.target).closest('.dg-hcol').attrd('index');
						d.is = true;
					}
					return;
				case 'dragover':
					return;
				default:
					return;
			}
		});

		self.event('change', '.dg-pagination-input', function() {

			var value = self.get();
			var val = +this.value;

			if (isNaN(val))
				return;

			if (val >= value.pages)
				val = value.pages;
			else if (val < 1)
				val = 1;

			value.page = val;
			forcescroll = opt.scroll = 'y';
			self.operation('page');
			controls.hide();
		});

		self.event('change', '.dg-filter-input', function() {

			var input = this;
			var $el = $(this);
			var el = $el.parent();
			var val = $el.val();
			var name = input.getAttribute('data-name');

			var col = opt.cols[+el.closest('.dg-hcol').attrd('index')];
			delete opt.filtercache[name];
			delete opt.filtercl[name];

			if (col.options) {
				if (val)
					val = (col.options instanceof Array ? col.options : GET(self.makepath(col.options)))[+val][col.ovalue];
				else
					val = null;
			}

			var is = val != null && val !== '';

			if (col)
				opt.filtervalues[col.id] = val;

			if (is) {
				if (opt.filter[name] == val)
					return;
				opt.filter[name] = val;
			} else
				delete opt.filter[name];

			forcescroll = opt.scroll = 'y';
			opt.operation = 'filter';
			el.tclass('dg-filter-selected', is);
			self.fn_refresh();
			controls.hide();
		});

		self.select = function(row) {

			var index;

			if (typeof(row) === 'number') {
				index = row;
				row = opt.rows[index];
			} else if (row)
				index = opt.rows.indexOf(row);

			var cls = 'dg-selected';
			if (!row || index === -1) {
				self.selected = null;
				opt.cluster && opt.cluster.el.find('.' + cls).rclass(cls);
				config.highlight && config.click && self.SEEX(config.click, null, self);
				return;
			}

			self.selected = row;

			var elrow = opt.cluster.el.find('.dg-row[data-index="{0}"]'.format(index));
			if (elrow && config.highlight) {
				opt.cluster.el.find('.' + cls).rclass(cls);
				elrow.aclass(cls);
			}

			config.click && self.SEEX(config.click, row, self, elrow, null);
			controls.hide();
		};

		self.event('click', '.dg-hfunc', function(e) {
			var t = $(this);
			e.preventDefault();
			e.stopPropagation();
			self.SEEX(config.hfunc, t);
		});

		self.event('click', '.dg-checkbox', function(e) {

			var t = $(this);
			var custom = t.attrd('custom');

			if (custom === '1')
				return;

			e.preventDefault();
			e.stopPropagation();

			t.tclass('dg-checked');

			if (custom === '2')
				return;

			var val = t.attrd('value');
			var checked = t.hclass('dg-checked');

			if (val === '-1') {
				if (checked) {
					opt.checked = {};
					for (var i = 0; i < opt.rows.length; i++)
						opt.checked[opt.rows[i].ROW] = 1;
				} else
					opt.checked = {};
				self.scrolling();
			} else if (checked)
				opt.checked[val] = 1;
			else
				delete opt.checked[val];

			self.fn_in_checked();
		});

		self.event('click', '.dg-columns-checkbox', function() {
			$(this).tclass('dg-columns-checkbox-checked');
		});

		self.event('click', 'button', function(e) {
			switch (this.name) {
				case 'columns-apply':
					self.applycolumns(true);
					break;
				case 'page-first':
					forcescroll = opt.scroll = 'y';
					self.get().page = 1;
					self.operation('page');
					break;
				case 'page-last':
					forcescroll = opt.scroll = 'y';
					var tmp = self.get();
					tmp.page = tmp.pages;
					self.operation('page');
					break;
				case 'page-prev':
					forcescroll = opt.scroll = 'y';
					self.get().page -= 1;
					self.operation('page');
					break;
				case 'page-next':
					forcescroll = opt.scroll = 'y';
					self.get().page += 1;
					self.operation('page');
					break;
				default:
					var el = $(this);
					var index = +el.closest('.dg-row,.dg-controls').attrd('index');
					var row = opt.rows[index];
					config.button && self.SEEX(config.button, this.name, row, el, e);
					break;
			}
		});

		self.scrollbarX.area.on('scroll', function() {
			!ishidedir && hidedir();
			isecolumns && self.applycolumns();
		});


		self.resize();
		// config.exec && self.operation('init');
	};

	self.operation = function(type) {

		var value = self.get();

		if (value == null)
			value = {};

		if (type === 'filter' || type === 'init')
			value.page = 1;

		var keys = Object.keys(opt.filter);
		self.SEEX(config.exec, type, keys.length ? opt.filter : null, opt.sort && opt.sort.sort ? [(opt.sort.name + '_' + (opt.sort.sort === 1 ? 'asc' : 'desc'))] : null, value.page, self);

		switch (type) {
			case 'sort':
				self.redrawsorting();
				break;
		}
	};

	function align(type) {
		return type === 1 ? 'center' : type === 2 ? 'right' : type;
	}

	self.clear = function() {
		for (var i = 0; i < opt.rows.length; i++)
			opt.rows[i].CHANGES = undefined;
		self.renderrows(opt.rows, true);
		opt.cluster && opt.cluster.update(opt.render);
		self.fn_in_changed();
	};

	self.editcolumn = function(rindex, cindex) {

		var col;
		var row;

		if (cindex == null) {
			if (rindex instanceof jQuery) {
				cindex = rindex.attr('class').match(/\d+/);
				if (cindex)
					cindex = +cindex[0];
				else
					return;
				col = rindex;
			}
		} else
			row = opt.cluster.el.find('.dg-row-' + (rindex + 1));

		if (!col)
			col = row.find('.dg-col-' + cindex);

		var index = cindex;
		if (index == null)
			return;

		if (!row)
			row = col.closest('.dg-row');

		var data = {};
		data.col = opt.cols[index];
		if (!data.col.editable)
			return;

		data.rowindex = +row.attrd('index');
		data.row = opt.rows[data.rowindex];
		data.colindex = index;
		data.value = data.row[data.col.name];
		data.elrow = row;
		data.elcol = col;

		var clone = col.clone();
		var cb = function(data) {

			if (data == null) {
				col.replaceWith(clone);
				return;
			}

			data.row[data.col.name] = data.value;

			if (opt.rows[data.rowindex] != data.row)
				opt.rows[data.rowindex] = data.row;

			if (!data.row.CHANGES)
				data.row.CHANGES = {};

			data.row.CHANGES[data.col.name] = true;
			opt.render[data.rowindex] = $(self.renderrow(data.rowindex, data.row))[0];
			data.elrow.replaceWith(opt.render[data.rowindex]);
			self.fn_in_changed();

		};

		if (config.change)
			self.EXEC(config.change, data, cb, self);
		else
			self.datagrid_edit(data, cb);
	};

	self.applyfilter = function(obj, add) {

		if (!ready) {
			setTimeout(self.applyfilter, 100, obj, add);
			return;
		}

		if (!add)
			opt.filter = {};

		for (var key in obj) {
			var col = opt.cols.findItem('name', key);
			if (col.options) {
				var items = col.options instanceof Array ? col.options : GET(self.makepath(col.options));
				if (items instanceof Array) {
					var item = items.findItem(col.ovalue, obj[key]);
					if (item) {
						var el = header.find('.dg-hcol[data-index="{0}"] label'.format(col.index));
						if (el.length)
							self.applyfilterdirectory(el, col, item);
					}
				}
			}
		}

		header.find('input').each(function() {
			var t = this;
			var el = $(t);
			var val = obj[el.attrd('name')];
			if (val !== undefined)
				el.val(val == null ? '' : val);
		}).trigger('change');

	};

	self.schema = function(name) {

		var tmp = schemas.$current ? schemas[schemas.$current] : null;
		if (tmp && config.rememberfilter) {
			for (var key in opt.filter)
				tmp.opt.filter[key] = opt.filter[key];

			for (var key in opt.filtercache)
				tmp.opt.filtercache[key] = opt.filtercache[key];

			for (var key in opt.filtercl)
				tmp.opt.filtercl[key] = opt.filtercl[key];

			for (var key in opt.filtervalues)
				tmp.opt.filtervalues[key] = opt.filtervalues[key];
		}

		schemas.$current = name;
		self.selected = null;

		tmp = schemas[name];
		if (!tmp) {
			tmp = schemas.default;
			schemas.$current = 'default';
		}

		opt.filter = {};
		if (config.rememberfilter) {
			for (var key in tmp.opt.filter)
				opt.filter[key] = tmp.opt.filter[key];
		}

		opt.filtercache = {};
		if (config.rememberfilter) {
			for (var key in tmp.opt.filtercache)
				opt.filtercache[key] = tmp.opt.filtercache[key];
		}

		opt.filtercl = {};
		if (config.rememberfilter) {
			for (var key in tmp.opt.filtercl)
				opt.filtercl[key] = tmp.opt.filtercl[key];
		}

		opt.filtervalues = {};

		if (config.rememberfilter) {
			for (var key in tmp.opt.filtervalues)
				opt.filtervalues[key] = tmp.opt.filtervalues[key];
			for (var col of opt.cols)
				col.filtervalue = null;
		} else {
			for (var col of opt.cols)
				col.filtervalue = null;
		}

		self.rebind(tmp.schema, true);

		if (config.exec) {
			self.set(null);
		} else {
			setTimeout(function() {
				self.refresh();
			}, 100);
		}
	};

	self.rebind = function(code, prerender) {

		if (code.length < 30 && code.indexOf(' ') === -1) {
			schemas.$current = code;
			self.selected = null;
			var tmp = schemas[code];
			if (!tmp) {
				tmp = schemas.default;
				schemas.$current = 'default';
			}
			self.rebind(tmp.schema, prerender);
			return;
		}

		opt.declaration = code;

		var type = typeof(code);
		if (type === 'string') {
			code = code.trim();
			self.gridid = 'dg' + HASH(code);
		} else
			self.gridid = 'dg' + HASH(JSON.stringify(code));

		var cache = config.remember ? W.PREF ? W.PREF.get(self.gridid) : CACHE(self.gridid) : null;
		var cols = type === 'string' ? new Function('return ' + code)() : CLONE(code);
		var tmp;

		opt.rowclasstemplate = null;
		opt.search = false;
		opt.colsfilter = {};

		for (var i = 0; i < cols.length; i++) {
			var col = cols[i];

			if (typeof(col) === 'string') {
				opt.rowclasstemplate = Tangular.compile(col);
				cols.splice(i, 1);
				i--;
				continue;
			}

			if (col.type === 'controls' || col.type === 'buttons') {
				opt.controls = col.template ? Tangular.compile(col.template) : null;
				cols.splice(i, 1);
				i--;
				continue;
			}

			col.id = col.id || HASH(i.padLeft(2) + (col.name || '') + (col.text || '') + (col.width || '') + (col.template || '')).toString(36);
			col.realindex = i;

			if (!col.name)
				col.name = col.id;

			if (col.listcolumn == null)
				col.listcolumn = true;

			if (col.hidden) {
				col.$hidden = FN(col.hidden)(col) === true;
				col.hidden = col.$hidden;
			}

			if (col.hide) {
				col.hidden = col.hide === true;
				delete col.hide;
			}

			if (col.options) {
				!col.otext && (col.otext = config.otext);
				!col.ovalue && (col.ovalue = config.ovalue);
			}

			// SORT?
			if (col.sort != null)
				col.sorting = col.sort;

			if (cache) {
				var c = cache[i];
				if (c) {
					col.index = c.index;
					col.width = c.width;
					col.hidden = c.hidden;
				}
			}

			if (col.index == null)
				col.index = i;

			if (col.sorting == null)
				col.sorting = config.sorting;

			if (col.alignfilter != null)
				col.alignfilter = ' ' + align(col.alignfilter);

			if (col.alignheader != null)
				col.alignheader = ' ' + align(col.alignheader);

			col.sort = 0;

			if (col.search) {
				opt.search = true;
				col.search = col.search === true ? Tangular.compile(col.template) : Tangular.compile(col.search);
			}

			if (!col.align) {
				switch (col.type) {
					case 'date':
						col.align = 1;
						break;
					case 'number':
						col.align = 2;
						break;
					case 'boolean':
						col.align = 1;
						break;
				}
			}

			if (col.align && col.align !== 'left') {
				col.align = align(col.align);
				col.align = ' ' + col.align;
				if (!col.alignfilter)
					col.alignfilter = ' center';
				if (!col.alignheader)
					col.alignheader = ' center';
			}

			var cls = col.class ? (' ' + col.class) : '';

			if (col.editable) {
				cls += ' dg-editable';
				if (col.required)
					cls += ' dg-required';
			}

			if (config.autoformat) {
				switch (col.type) {
					case 'number':
						if (col.monospace == null)
							col.monospace = true;
						break;
				}
			}

			var isbool = col.type && col.type.substring(0, 4) === 'bool';
			var TC = Tangular.compile;

			if (col.template) {
				col.templatecustom = true;
				col.template = TC((col.template.indexOf('<button') === -1 ? ('<div class="dg-value' + (col.monospace ? ' dg-monospace' : '') + cls + '">{0}</div>') : '{0}').format(col.template));
			} else
				col.template = TC(('<div class="' + (isbool ? 'dg-bool' : ('dg-value' + (col.monospace ? ' dg-monospace' : ''))) + cls + '"' + (config.allowtitles ? ' title="{{ {0} }}"' : '') + '>{{ {0} }}</div>').format(col.name + (col.currency ? ' | currency(\'{0}\')'.format(col.currency) : col.format != null ? ' | format({0})'.format(col.format && typeof(col.format) === 'string' ? ('\'' + col.format + '\'') : col.format) : '') + (col.type && config.autoformat ? ' | ui_datagrid_autoformat(\'{0}\')'.format(col.type) : '') + (col.empty ? ' | def({0})'.format(col.empty === true || col.empty == '1' ? '' : ('\'' + col.empty + '\'')) : '') + (isbool ? ' | ui_datagrid_checkbox' : '') + (col.colorize ? (' | ui_datagrid_colorize(' + (col.currency || col.format ? 0 : 1) + ')') : '')));

			if (col.header)
				col.header = TC(col.header);
			else
				col.header = TC('{{ text | raw }}');

			if (!col.text)
				col.text = col.name;

			if (col.text.substring(0, 1) === '.')
				col.text = '<i class="{0}"></i>'.format(col.text.substring(1));

			if (col.filter !== false && !col.filter)
				col.filter = config.filterlabel;

			if (!col.filtervalue && opt.filtervalues != null)
				col.filtervalue = opt.filtervalues[col.id];

			if (col.filtervalue != null) {
				tmp = col.filtervalue;
				if (typeof(tmp) === 'function')
					tmp = tmp(col);
				opt.filter[col.name] = opt.filtervalues[col.id] = tmp;
			}

			opt.colsfilter[col.name] = col;
		}

		cols.quicksort('index');
		opt.cols = cols;
		self.rebindcss();
		prerender && self.rendercols();
		controls.hide();
	};

	self.rebindcss = function() {

		var cols = opt.cols;
		var css = [];
		var indexes = {};

		opt.width = (config.numbering !== false ? 40 : 0) + (config.checkbox ? 40 : 0) + 30;

		for (var i = 0; i < cols.length; i++) {
			var col = cols[i];

			if (!col.width)
				col.width = config.colwidth;

			css.push('.dg-{2} .dg-col-{0}{width:{1}px}'.format(i, col.width, self.IDCSS));

			if (!col.hidden) {
				opt.width += col.width;
				indexes[i] = opt.width;
			}
		}

		CSS(css, self.ID);

		var w = self.width();
		if (w > opt.width)
			opt.width = w - 2;

		if (sheader) {
			css = { width: opt.width };
			header.css(css);
			// vbody.css(css);
		}

		header && header.find('.dg-resize').each(function() {
			var el = $(this);
			el.css('left', indexes[el.attrd('index')] - 39);
		});
	};

	self.cols = function(callback) {
		callback(opt.cols);
		opt.cols.quicksort('index');
		self.rebindcss();
		self.rendercols();
		opt.rows && self.renderrows(opt.rows);
		self.save();
		opt.cluster && opt.cluster.update(opt.render);
		self.resize();
	};

	self.rendercols = function() {

		var Trow = '<div class="dg-hrow dg-row-{0}">{1}</div>';

		if (config.hfunc)
			config.numbering = '<div class="dg-hfunc dg-hfunc-main" data-value="-1"><i class="{0}"></i></div>'.format(self.faicon(config.hfuncicon));

		var column = config.numbering !== false ? Theadercol({ index: -1, label: config.numbering, filter: false, name: '$', sorting: false }) : '';
		var resize = [];

		opt.width = (config.numbering !== false ? 40 : 0) + (config.checkbox ? 40 : 0) + 30;

		if (config.checkbox)
			column += Theadercol({ index: -1, label: '<div class="dg-checkbox dg-checkbox-main" data-value="-1"><i class="ti ti-check"></i></div>', filter: false, name: '$', sorting: false });

		for (var i = 0; i < opt.cols.length; i++) {
			var col = opt.cols[i];
			if (!col.hidden) {
				var filteritems = col.options ? col.options instanceof Array ? col.options : GET(self.makepath(col.options)) : null;
				var filtervalue = opt.filtervalues[col.id];
				var obj = { index: i, ts: NOW.getTime(), label: col.header(col), filter: col.filter, reorder: config.reorder, sorting: col.sorting, name: col.name, alignfilter: col.alignfilter, alignheader: col.alignheader, filterval: filtervalue == null ? null : filteritems ? filteritems.findValue(col.ovalue, filtervalue, col.otext, '???') : filtervalue, labeltitle: col.title || col.text, options: filteritems };
				opt.width += col.width;
				config.resize && resize.push('<span class="dg-resize" style="left:{0}px" data-index="{1}"></span>'.format(opt.width - 39, i));
				column += Theadercol(obj);
			}
		}

		column += '<div class="dg-hcol"></div>';
		header[0].innerHTML = resize.join('') + Trow.format(0, column);

		var w = self.width();
		if (w > opt.width)
			opt.width = w;

		self.redrawsorting();
	};

	self.redraw = function(update) {
		var x = self.scrollbarX.scrollLeft();
		var y = self.scrollbarY ? self.scrollbarY.scrollTop() : 0;
		isredraw = update ? 2 : 1;
		self.refreshfilter();
		isredraw = 0;
		self.scrollbarX.scrollLeft(x);
		self.scrollbarY && self.scrollbarY.scrollTop(y);
	};

	self.redrawrow = function(oldrow, newrow) {
		var index = opt.rows.indexOf(oldrow);
		if (index !== -1) {

			controls.cache = {};

			// Replaces old row with a new
			if (newrow) {
				if (self.selected === oldrow)
					self.selected = newrow;
				oldrow = opt.rows[index] = newrow;
			}

			var el = vbody.find('.dg-row[data-index="{0}"]'.format(index));
			if (el.length) {
				opt.render[index] = $(self.renderrow(index, oldrow))[0];
				el[0].parentNode.replaceChild(opt.render[index], el[0]);
			}
		}
	};

	self.appendrow = function(row, scroll, prepend) {

		var index = prepend ? 0 : (opt.rows.push(row) - 1);
		var model = self.get();

		controls.cache = {};

		if (model == null) {
			// bad
			return;
		} else {
			var arr = model.items ? model.items : model;
			if (prepend) {
				arr.unshift(row);
			} else if (model.items)
				arr.push(row);
			else
				arr.push(row);
		}

		if (prepend) {
			var tmp;
			// modifies all indexes
			for (var i = 0; i < opt.render.length; i++) {
				var node = opt.render[i];
				if (typeof(node) === 'string')
					node = opt.render[i] = $(node)[0];
				var el = $(node);
				var tmpindex = i + 1;
				tmp = el.rclass2('dg-row-').aclass('dg-row-' + tmpindex).attrd('index', tmpindex);
				tmp.find('.dg-number').html(tmpindex + 1);
				tmp.find('.dg-checkbox-main').attrd('value', tmpindex);
				if (opt.rows[i])
					opt.rows[i].ROW = tmpindex;
			}
			row.ROW = index;
			tmp = {};
			var keys = Object.keys(opt.checked);
			for (var i = 0; i < keys.length; i++)
				tmp[(+keys[i]) + 1] = 1;
			opt.checked = tmp;
			opt.render.unshift(null);
		}

		opt.render[index] = $(self.renderrow(index, row))[0];
		opt.cluster && opt.cluster.update(opt.render, !opt.scroll || opt.scroll === '-');
		if (scroll) {
			var el = opt.cluster.el[0];
			el.scrollTop = el.scrollHeight;
		}
		self.scrolling();
	};

	self.renderrow = function(index, row, plus) {

		if (plus === undefined && config.exec) {
			// pagination
			var val = self.get();
			plus = (val.page - 1) * val.limit;
		}

		var Trow = '<div><div class="dg-row dg-row-{0}{3}{4}" data-index="{2}">{1}</div></div>';
		var Tcol = '<div class="dg-col dg-col-{0}{2}{3}">{1}</div>';
		var column = '';

		if (config.numbering !== false)
			column += Tcol.format(-1, '<div class="dg-number">{0}</div>'.format(index + 1 + (plus || 0)));

		if (config.checkbox)
			column += Tcol.format(-1, '<div class="dg-checkbox-main dg-checkbox{1}" data-value="{0}"><i class="ti ti-check"></i></div>'.format(row.ROW, opt.checked[row.ROW] ? ' dg-checked' : ''));

		for (var j = 0; j < opt.cols.length; j++) {
			var col = opt.cols[j];
			if (!col.hidden)
				column += Tcol.format(j, col.template(row), col.align, row.CHANGES && row.CHANGES[col.name] ? ' dg-col-changed' : '');
		}

		column += '<div class="dg-col">&nbsp;</div>';
		var rowcustomclass = opt.rowclasstemplate ? opt.rowclasstemplate(row) : '';
		return Trow.format(index + 1, column, index, self.selected === row ? ' dg-selected' : '', (row.CHANGES ? ' dg-row-changed' : '') + (rowcustomclass || ''));
	};

	self.renderrows = function(rows, noscroll) {

		opt.rows = rows;
		controls.cache = {};

		var output = [];
		var plus = 0;

		if (config.exec) {
			// pagination
			var val = self.get();
			plus = (val.page - 1) * val.limit;
		}

		var is = false;

		for (var i = 0, length = rows.length; i < length; i++) {
			var row = rows[i];
			if (!is && self.selected) {
				if (self.selected === row) {
					is = true;
				} else if (config.clickid && self.selected[config.clickid] === row[config.clickid]) {
					self.selected = row;
					is = true;
				}
			}

			output.push(self.renderrow(i, rows[i], plus));
		}

		var min = ((((opt.height || config.minheight) - 120) / config.rowheight) >> 0) + 1;
		var is = output.length < min;
		if (is) {
			for (var i = output.length; i < min + 1; i++)
				output.push('<div class="dg-row-empty">&nbsp;</div>');
		}

		self.tclass('dg-noscroll', is);

		if (noscroll) {
			self.scrollbarX.scrollLeft(0);
			self.scrollbarY && self.scrollbarY.scrollTop(0);
		}

		opt.render = output;
		self.onrenderrows && self.onrenderrows(opt);
	};

	self.exportrows = function(page_from, pages_count, callback, reset_page_to, sleep) {

		var arr = [];
		var source = self.get();

		if (reset_page_to === true)
			reset_page_to = source.page;

		if (page_from === true)
			reset_page_to = source.page;

		pages_count = page_from + pages_count;

		if (pages_count > source.pages)
			pages_count = source.pages;

		for (var i = page_from; i < pages_count + 1; i++)
			arr.push(i);

		!arr.length && arr.push(page_from);

		var index = 0;
		var rows = [];

		arr.wait(function(page, next) {
			opt.scroll = (index++) === 0 ? 'xy' : '';
			self.get().page = page;
			self.operation('page');
			self.onrenderrows = function(opt) {
				rows.push.apply(rows, opt.rows);
				setTimeout(next, sleep || 100);
			};
		}, function() {
			self.onrenderrows = null;
			callback(rows, opt);
			if (reset_page_to > 0) {
				self.get().page = reset_page_to;
				self.operation('page');
			}
		});
	};

	self.reordercolumn = function(index, position) {

		var col = opt.cols[index];
		if (!col)
			return;

		var old = col.index;

		opt.cols[index].index = position + (old < position ? 0.2 : -0.2);
		opt.cols.quicksort('index');

		for (var i = 0; i < opt.cols.length; i++) {
			col = opt.cols[i];
			col.index = i;
		}

		opt.cols.quicksort('index');

		self.rebindcss();
		self.rendercols();
		self.renderrows(opt.rows);
		opt.sort && opt.sort.sort && self.redrawsorting();
		opt.cluster && opt.cluster.update(opt.render, true);
		self.scrolling();

		controls.hide();
		config.remember && self.save();
	};

	self.resizecolumn = function(index, size) {
		opt.cols[index].width = size;
		self.rebindcss();
		config.remember && self.save();
		self.resize();
	};

	self.save = function() {

		var cache = {};

		for (var i = 0; i < opt.cols.length; i++) {
			var col = opt.cols[i];
			col.index = i;
			cache[col.realindex] = { index: col.index, width: col.width, hidden: col.hidden };
		}

		if (W.PREF)
			W.PREF.set(self.gridid, cache, '1 month');
		else
			CACHE(self.gridid, cache, '1 month');
	};

	self.rows = function() {
		return opt.rows.slice(0);
	};

	var resizecache = {};

	self.resize = function() {
		setTimeout2(self.ID + 'resize', self.resizeforce, 100);
	};

	self.resizeforce = function() {

		if (!opt.cols || HIDDEN(self.dom)) {
			resizecache.timeout && clearTimeout(resizecache.timeout);
			resizecache.timeout = setTimeout(self.resizeforce, ready ? 1000 : 400);
			return;
		}

		if (resizecache.timeout) {
			clearTimeout(resizecache.timeout);
			resizecache.timeout = null;
		}

		var el;
		var footerh = opt.footer = footer.length ? footer.height() : 0;

		if (typeof(config.height) === 'string' && config.height.substring(0, 6) === 'parent') {

			el = self.element.parent();

			var count = +config.height.substring(6);
			if (count) {
				for (var i = 0; i < count; i++)
					el = el.parent();
			}

			opt.height = (el.height() - config.margin);

		} else {
			switch (config.height) {
				case 'auto':
					var wh = config.parent ? self.parent(config.parent).height() : WH;
					el = self.element;
					opt.height = (wh - (el.offset().top + config.margin));
					break;
				case 'window':
					opt.height = WH - config.margin;
					break;
				case 'fluid':
					opt.height = ((opt.rows ? opt.rows.length : 0) * config.rowheight) + header.outerHeight() + 6;
					break;
				default:

					if (config.height > 0) {
						opt.height = config.height;
					} else {
						el = self.element.closest(config.height);
						opt.height = ((el.length ? el.height() : 200) - config.margin);
					}
					break;
			}
		}

		var mr = (vbody.parent().css('margin-right') || '').parseInt();
		var h = opt.height - footerh;
		var sh = SCROLLBARWIDTH();
		controls.hide();

		if (config.height === 'fluid') {
			var mh = config.minheight;
			if (h < mh)
				h = mh;
		} else if (config.height === 'auto') {
			var mh = config.minheight;
			if (h < mh)
				h = mh;
		}

		var ismobile = isMOBILE && isTOUCH;

		if (resizecache.mobile !== ismobile && !config.noborder) {
			resizecache.mobile = ismobile;
			self.tclass('dg-mobile', ismobile);
		}

		if (resizecache.h !== h) {
			resizecache.h = h;
			sheader.css('height', h);
		}

		var tmpsh = h - (sh ? (sh + self.scrollbarX.thinknessX - 2) : (footerh - 2));
		resizecache.tmpsh = h;
		sbody.css('height', tmpsh + self.scrollbarX.marginY + (config.exec && self.scrollbarX.size.empty ? footerh : 0));

		var w;

		if (config.fullwidth_xs && WIDTH() === 'xs' && isMOBILE) {
			var isfrm = false;
			try {
				isfrm = W.self !== W.top;
			} catch (e) {
				isfrm = true;
			}
			if (isfrm) {
				w = screen.width - (self.element.offset().left * 2);
				if (resizecache.wmd !== w) {
					resizecache.wmd = w;
					self.css('width', w);
				}
			}
		}

		if (w == null)
			w = self.width();

		var emptyspace = 50 - mr;
		if (emptyspace < 50)
			emptyspace = 50;

		var width = (config.numbering !== false ? 40 : 0) + (config.checkbox ? 40 : 0) + emptyspace;

		for (var i = 0; i < opt.cols.length; i++) {
			var col = opt.cols[i];
			if (!col.hidden)
				width += col.width + 1;
		}

		if (w > width)
			width = w - 2;

		if (resizecache.hc !== h) {
			resizecache.hc = h;
			container.css('height', h);
		}

		if (resizecache.width !== width) {
			resizecache.width = width;
			header.css('width', width);
			vbody.css('width', width);
			sbody.css('width', width);
			opt.width2 = w;
		}

		opt.height = h + footerh;
		self.scrollbarX.resize();
		self.scrollbarY && self.scrollbarY.resize();

		ready = true;
		// header.parent().css('width', self.scrollbar.area.width());
	};

	self.refreshfilter = function(useraction) {

		// Get data
		var obj = self.get() || EMPTYARRAY;
		var items = (obj instanceof Array ? obj : obj.items) || EMPTYARRAY;
		var output = [];

		if (isredraw) {
			if (isredraw === 2) {
				self.fn_in_checked();
				self.fn_in_changed();
			}
		} else {
			opt.checked = {};
			config.checkbox && header.find('.dg-checkbox-main').rclass('dg-checked');
			self.fn_in_checked(EMPTYARRAY);
		}

		for (var i = 0; i < items.length; i++) {
			var item = items[i];

			item.ROW = i;

			if (!config.exec) {
				if (opt.filter && !self.filter(item))
					continue;
				if (opt.search) {
					for (var j = 0; j < opt.cols.length; j++) {
						var col = opt.cols[j];
						if (col.search)
							item['$' + col.name] = col.search(item);
					}
				}
			}

			output.push(item);
		}

		if (!isredraw) {

			if (opt.scroll) {

				if (self.scrollbarY && (/y/).test(opt.scroll))
					self.scrollbarY.scrollTop(0);

				if ((/x/).test(opt.scroll)) {
					if (useraction)	{
						var sl = self.scrollbarX.scrollLeft();
						self.scrollbarX.scrollLeft(sl ? sl - 1 : 0);
					} else
						self.scrollbarX.scrollLeft(0);
				}

				opt.scroll = '';
			}

			if (opt.sort != null) {
				if (!config.exec)
					opt.sort.sort && output.quicksort(opt.sort.name, opt.sort.sort === 1);
				self.redrawsorting();
			}
		}

		self.resize();
		self.renderrows(output, isredraw);

		setTimeout(self.resize, 100);
		opt.cluster && opt.cluster.update(opt.render, !opt.scroll || opt.scroll === '-');
		self.scrolling();

		if (isredraw) {
			if (isredraw === 2) {
				// re-update all items
				self.select(self.selected || null);
			}
		} else {
			var sel = self.selected;
			if (config.autoselect && output && output.length) {
				setTimeout(function() {
					var index = sel ? output.indexOf(sel) : 0;
					if (index === -1)
						index = 0;
					self.select(output[index]);
				}, 1);
			} else {
				var index = sel ? output.indexOf(sel) : -1;
				self.select(index === -1 ? null : output[index]);
			}
		}
	};

	self.redrawsorting = function() {
		var arr = self.find('.dg-sorting');
		for(var i = 0; i < arr.length; i++) {
			var el = $(arr[i]);
			var col = opt.cols[+el.attrd('index')];
			if (col) {
				var ti = el.find('.dg-sort').rclass2('ti-');
				switch (col.sort) {
					case 1:
						ti.aclass('ti-arrow-up');
						break;
					case 2:
						ti.aclass('ti-arrow-down');
						break;
					default:
						ti.aclass('ti-sort');
						break;
				}
			}
		}
		controls.hide();
	};

	self.resetcolumns = function() {

		if (W.PREF)
			W.PREF.set(self.gridid);
		else
			CACHE(self.gridid, null, '-1 day');

		self.rebind(opt.declaration);
		self.cols(NOOP);
		ecolumns.aclass('hidden');
		isecolumns = false;
		controls.hide();
	};

	self.redrawcolumns = function() {
		self.rebind(opt.declaration);
		self.cols(NOOP);
		ecolumns.aclass('hidden');
		isecolumns = false;
		controls.hide();
	};

	self.resetfilter = function() {
		opt.filter = {};
		opt.filtercache = {};
		opt.filtercl = {};
		opt.filtervalues = {};
		opt.cols && self.rendercols();
		if (config.exec)
			self.operation('refresh');
		else
			self.refresh();
		controls.hide();
	};

	var pagecache = { pages: -1, count: -1 };

	self.redrawpagination = function() {

		if (!config.exec || !config.pagination)
			return;

		var value = self.get();

		if (!value.page)
			value.page = 1;

		if (value.pages == null)
			value.pages = 0;

		if (value.count == null)
			value.count = 0;

		var is = false;

		if (value.page === 1 || (value.pages != null && value.count != null)) {
			pagecache.pages = value.pages;
			pagecache.count = value.count;
			is = true;
		}

		footer.find('button').each(function() {

			var el = $(this);
			var dis = true;

			switch (this.name) {
				case 'page-next':
					dis = value.page >= pagecache.pages;
					break;
				case 'page-prev':
					dis = value.page === 1;
					break;
				case 'page-last':
					dis = !value.page || value.page >= pagecache.pages;
					break;
				case 'page-first':
					dis = value.page === 1;
					break;
			}

			el.prop('disabled', dis);
		});

		footer.find('input')[0].value = value.page;

		if (is) {
			var num = pagecache.pages || 0;
			footer.find('.dg-pagination-pages')[0].innerHTML = num.pluralize.apply(num, config.pluralizepages);
			num = pagecache.count || 0;
			footer.find('.dg-pagination-items')[0].innerHTML = num.pluralize.apply(num, config.pluralizeitems);
		}

		footer.rclass('hidden');
	};

	self.setter = function(value, path, type) {

		if (!ready) {
			setTimeout(self.setter, 100, value, path, type);
			return;
		}

		controls.hide();

		if (config.exec && (value == null || (config.pagination && value.items == null))) {
			self.operation('refresh');
			if (config.pagination) {
				if (value && value.items == null)
					value.items = [];
				else
					return;
			} else
				return;
		}

		if (value && value.schema && schemas.$current !== value.schema) {
			self.rebind(value.schema, true);
			setTimeout(function() {
				self.setter(value, path, type);
			}, 100);
			return;
		}

		if (!opt.cols)
			return;

		opt.checked = {};

		if (forcescroll) {
			opt.scroll = forcescroll;
			forcescroll = '';
		} else
			opt.scroll = type !== 'noscroll' && !self.isloading ? 'xy' : '';

		self.applycolumns();
		self.refreshfilter();
		self.redrawsorting();
		self.redrawpagination();
		self.fn_in_changed();
		!config.exec && self.rendercols();
		setTimeout2(self.ID + 'resize', self.resize, 100);

		if (opt.cluster)
			return;

		config.exec && self.rendercols();
		opt.cluster = new Cluster(vbody, config);
		opt.cluster.grid = self;
		opt.cluster.scroll = self.scrolling;
		opt.render && opt.cluster.update(opt.render);
		self.aclass('dg-visible');
	};

	self.scrolling = function() {
		config.checkbox && setTimeout2(self.ID, function() {
			vbody.find('.dg-checkbox-main').each(function() {
				$(this).tclass('dg-checked', opt.checked[this.getAttribute('data-value')] == 1);
			});
		}, 80, 10);
	};

	var REG_STRING = /\/\|\\|,/;
	var REG_DATE1 = /\s-\s/;
	var REG_DATE2 = /\/|\||\\|,/;
	var REG_SPACE = /\s/g;

	self.filter = function(row) {
		var keys = Object.keys(opt.filter);
		for (var i = 0; i < keys.length; i++) {

			var column = keys[i];
			var filter = opt.filter[column];
			var val2 = opt.filtercache[column];
			var val = row['$' + column] || row[column];
			var type = typeof(val);

			if (val instanceof Array) {
				val = val.join(' ');
				type = 'string';
			} else if (val && type === 'object' && !(val instanceof Date)) {
				val = JSON.stringify(val);
				type = 'string';
			}

			if (type === 'number') {

				if (val2 == null)
					val2 = opt.filtercache[column] = typeof(filter) === 'number' ? [filter] : self.parseNumber(filter + '');

				if (val2.length === 1 && val !== val2[0])
					return false;

				if (val < val2[0] || val > val2[1])
					return false;

			} else if (type === 'string') {

				var is = false;

				if (opt.filtercl[column] != null) {
					is = opt.filtercl[column] == val;
					if (!is)
						return false;
				}

				var col = opt.colsfilter[column];

				if (val2 == null) {
					val2 = opt.filtercache[column] = filter.split(REG_STRING).trim();
					if (!col.filtertype) {
						for (var j = 0; j < val2.length; j++)
							val2[j] = val2[j].toSearch();
					}
				}

				var s = col.filtertype ? val : val.toSearch();

				for (var j = 0; j < val2.length; j++) {
					if (s.indexOf(val2[j]) !== -1) {
						is = true;
						break;
					}
				}

				if (!is)
					return false;

			} else if (type === 'boolean') {
				if (val2 == null)
					val2 = opt.filtercache[column] = typeof(filter) === 'string' ? config.boolean.indexOf(filter.replace(REG_SPACE, '')) !== -1 : filter;
				if (val2 !== val)
					return false;
			} else if (val instanceof Date) {

				val.setHours(0);
				val.setMinutes(0);

				if (val2 == null) {

					val2 = filter.trim().replace(REG_DATE1, '/').split(REG_DATE2).trim();
					var arr = opt.filtercache[column] = [];

					for (var j = 0; j < val2.length; j++) {
						var dt = val2[j].trim();
						var a = self.parseDate(dt, j === 1);
						if (a instanceof Array) {
							if (val2.length === 2) {
								arr.push(j ? a[1] : a[0]);
							} else {
								arr.push(a[0]);
								if (j === val2.length - 1) {
									arr.push(a[1]);
									break;
								}
							}
						} else
							arr.push(a);
					}

					if (val2.length === 2 && arr.length === 2) {
						arr[1].setHours(23);
						arr[1].setMinutes(59);
						arr[1].setSeconds(59);
					}

					val2 = arr;
				}

				if (val2.length === 1) {
					if (val2[0].YYYYMM)
						return val.format('yyyyMM') === val2[0].format('yyyyMM');
					if (val.format('yyyyMMdd') !== val2[0].format('yyyyMMdd'))
						return false;
				}

				if (val < val2[0] || val > val2[1])
					return false;

			} else
				return false;
		}

		return true;
	};

	self.checked = function() {
		var arr = Object.keys(opt.checked);
		var output = [];
		var model = self.get() || EMPTYARRAY;
		var rows = model instanceof Array ? model : model.items;
		for (var i = 0; i < arr.length; i++) {
			var index = +arr[i];
			output.push(rows[index]);
		}
		return output;
	};

	self.readfilter = function() {
		return opt.filter;
	};

	self.changed = function() {
		var output = [];
		var model = self.get() || EMPTYARRAY;
		var rows = model instanceof Array ? model : model.items;
		for (var i = 0; i < rows.length; i++)
			rows[i].CHANGES && output.push(rows[i]);
		return output;
	};

	self.parseDate = function(val, second) {

		var index = val.indexOf('.');
		var m, y, d, a, special, tmp;

		if (index === -1) {
			if ((/[a-z]+/).test(val)) {
				var dt;
				try {
					dt = NOW.add(val);
				} catch (e) {
					return [0, 0];
				}
				return dt > NOW ? [NOW, dt] : [dt, NOW];
			}
			if (val.length === 4)
				return [new Date(+val, 0, 1), new Date(+val + 1, 0, 1)];
		} else if (val.indexOf('.', index + 1) === -1) {
			a = val.split('.');
			if (a[1].length === 4) {
				y = +a[1];
				m = +a[0] - 1;
				d = second ? new Date(y, m, 0).getDate() : 1;
				special = true;
			} else {
				y = NOW.getFullYear();
				m = +a[1] - 1;
				d = +a[0];
			}

			tmp = new Date(y, m, d);
			if (special)
				tmp.YYYYMM = true;
			return tmp;
		}
		index = val.indexOf('-');
		if (index !== -1 && val.indexOf('-', index + 1) === -1) {
			a = val.split('-');
			if (a[0].length === 4) {
				y = +a[0];
				m = +a[1] - 1;
				d = second ? new Date(y, m, 0).getDate() : 1;
				special = true;
			} else {
				y = NOW.getFullYear();
				m = +a[0] - 1;
				d = +a[1];
			}

			tmp = new Date(y, m, d);

			if (special)
				tmp.YYYYMM = true;

			return tmp;
		}

		return val.parseDate();
	};

	var REG_NUM1 = /\s-\s/;
	var REG_COMMA = /,/g;
	var REG_NUM2 = /\/|\|\s-\s|\\/;

	self.parseNumber = function(val) {
		var arr = [];
		var num = val.replace(REG_NUM1, '/').replace(REG_SPACE, '').replace(REG_COMMA, '.').split(REG_NUM2).trim();
		for (var i = 0, length = num.length; i < length; i++) {
			var n = num[i];
			arr.push(+n);
		}
		return arr;
	};

	self.datagrid_cancel = function(meta, force) {
		var current = self.editable;
		if (current && current.is) {
			current.is = false;
			force && current.el.replaceWith(current.backup);
			current.input && current.input.off();
			$(W).off('keydown', current.fn).off('click', current.fn);
		}
	};

	self.datagrid_edit = function(meta, next) {

		if (!meta || !meta.col.editable)
			return;

		if (!self.editable)
			self.editable = {};

		var el = meta.elcol;
		var current = self.editable;
		current.is && self.datagrid_cancel(meta, true);
		current.is = true;

		current.backup = el.find('.dg-editable').aclass('dg-editable').clone();
		el = el.find('.dg-editable');

		if (!meta.col.type) {
			if (meta.value instanceof Date)
				meta.col.type = 'date';
			else
				meta.col.type = typeof(meta.value);
		}

		if (typeof(meta.col.editable) === 'string') {
			meta.next = function(value) {
				if (value !== undefined)
					meta.value = value;
				next(meta);
				self.datagrid_cancel(meta);
			};
			meta.cancel = function() {
				self.datagrid_cancel(meta);
			};
			self.EXEC(meta.col.editable, meta);
			return;
		}

		if (meta.col.options) {
			current.el = el;
			var opt = {};
			opt.element = el;
			opt.items = meta.col.options;

			if (typeof(opt.items) === 'string')
				opt.items = self.makepath(opt.items);

			opt.key = meta.col.otext;
			opt.placeholder = meta.col.dirsearch ? meta.col.dirsearch : '';
			if (meta.col.dirsearch === false)
				opt.search = false;
			opt.callback = function(item) {
				current.is = false;
				meta.value = item[meta.col.ovalue];
				next(meta);
				self.datagrid_cancel(meta);
			};
			SETTER('directory', 'show', opt);
			return;
		}

		var align = meta.col.align;
		el.rclass('dg-value').html(meta.col.type.substring(0, 4) === 'bool' ? '<div{1}><div class="dg-checkbox{0}" data-custom="2"><i class="ti ti-check"></i></div></div>'.format(meta.value ? ' dg-checked' : '', align ? (' class="' + align.trim() + '"') : '') : '<input type="{0}" maxlength="{1}"{2} />'.format(meta.col.ispassword ? 'password' : 'text', meta.col.maxlength || 100, align ? (' class="' + align.trim() + '"') : ''));
		current.el = el;

		var input = meta.elcol.find('input');
		input.val(meta.value instanceof Date ? meta.value.format(meta.col.format) : meta.value);
		input.focus();
		current.input = input;

		if (meta.col.type === 'date') {
			// DATE
			var opt = {};
			opt.element = el;
			opt.value = meta.value;
			opt.callback = function(date) {
				current.is = false;
				meta.value = date;
				next(meta);
				self.datagrid_cancel(meta);
			};
			SETTER('datepicker', 'show', opt);
		}

		current.fn = function(e) {

			if (!current.is)
				return;

			if (e.type === 'click') {
				if (e.target.tagName === 'INPUT')
					return;
				e.preventDefault();
				e.keyCode = 13;
				if (meta.col.type === 'date') {
					e.type = 'keydown';
					setTimeout(current.fn, 800, e);
					return;
				} else if (meta.col.type.substring(0, 4) === 'bool') {
					var tmp = $(e.target);
					var is = tmp.hclass('dg-checkbox');
					if (!is) {
						tmp = tmp.closest('.dg-checkbox');
						is = tmp.length;
					}
					if (is) {
						meta.value = tmp.hclass('dg-checked');
						next(meta);
						self.datagrid_cancel(meta);
						return;
					}
				}
			}

			switch (e.keyCode) {
				case 13: // ENTER
				case 9: // TAB

					var val = input.val();
					if (val == meta.value) {
						next = null;
						self.datagrid_cancel(meta, true);
					} else {

						if (meta.col.type === 'number') {
							val = val.parseFloat();
							if (val == meta.value || (meta.min != null && meta.min > val) || (meta.max != null && meta.max < val)) {
								next = null;
								self.datagrid_cancel(meta, true);
								return;
							}
						} else if (meta.col.type === 'date') {

							val = val.parseDate(meta.format ? meta.format.env() : undefined);

							if (!val || isNaN(val.getTime()))
								val = null;

							if (val && meta.value && val.getTime() === meta.value.getTime()) {
								next = null;
								self.datagrid_cancel(meta, true);
								return;
							}
						}

						if (meta.col.required && (val == null || val === '')) {
							// WRONG VALUE
							self.datagrid_cancel(meta, true);
							return;
						}

						meta.value = val;
						next(meta);
						self.datagrid_cancel(meta);
					}

					if (e.which === 9) {

						// tries to edit another field
						var elcol = meta.elcol;

						while (true) {
							elcol = elcol.next();
							if (!elcol.length)
								break;

							var eledit = elcol.find('.dg-editable');
							if (eledit.length) {
								setTimeout(function(meta, elcol) {
									self.editcolumn(meta.rowindex, +elcol.attr('class').match(/\d+/)[0]);
								}, 200, meta, elcol);
								break;
							}
						}
					}

					break;

				case 27: // ESC
					next = null;
					self.datagrid_cancel(meta, true);
					break;
			}
		};

		$(W).on('keydown', current.fn).on('click', current.fn);
	};
});


COMPONENT('datepicker', 'today:Set today;clear:Clear;firstday:0', function(self, config, cls) {

	var cls2 = '.' + cls;
	var skip = false;
	var visible = false;
	var current;
	var elyears, elmonths, elbody;
	var main;

	self.days = EMPTYARRAY;
	self.days_short = EMPTYARRAY;
	self.months = EMPTYARRAY;
	self.months_short = EMPTYARRAY;
	self.years_from;
	self.years_to;

	self.singleton();
	self.readonly();
	self.nocompile();

	self.configure = function(key, value) {
		switch (key) {
			case 'days':

				if (value instanceof Array)
					self.days = value;
				else
					self.days = value.split(',').trim();

				self.days_short = [];

				for (var i = 0; i < DAYS.length; i++) {
					DAYS[i] = self.days[i];
					self.days_short[i] = DAYS[i].substring(0, 2).toUpperCase();
				}

				break;

			case 'months':
				if (value instanceof Array)
					self.months = value;
				else
					self.months = value.split(',').trim();

				self.months_short = [];

				for (var i = 0, length = self.months.length; i < length; i++) {
					var m = self.months[i];
					MONTHS[i] = m;
					if (m.length > 4)
						m = m.substring(0, 3) + '.';
					self.months_short.push(m);
				}
				break;

			case 'yearfrom':
				if (value.indexOf('current') !== -1)
					self.years_from = +(NOW.format('yyyy'));
				else
					self.years_from = +(NOW.add(value).format('yyyy'));
				break;

			case 'yearto':
				if (value.indexOf('current') !== -1)
					self.years_to = +(NOW.format('yyyy'));
				else
					self.years_to = +(NOW.add(value).format('yyyy'));
				break;
		}
	};

	function getMonthDays(dt) {

		var m = dt.getMonth();
		var y = dt.getFullYear();

		if (m === -1) {
			m = 11;
			y--;
		}

		return (32 - new Date(y, m, 32).getDate());
	}

	self.calculate = function(year, month, selected) {

		var d = new Date(year, month, 1, 12, 0);
		var output = { header: [], days: [], month: month, year: year };
		var firstday = config.firstday;
		var firstcount = 0;
		var frm = d.getDay() - firstday;
		var today = NOW;
		var ty = today.getFullYear();
		var tm = today.getMonth();
		var td = today.getDate();
		var sy = selected ? selected.getFullYear() : -1;
		var sm = selected ? selected.getMonth() : -1;
		var sd = selected ? selected.getDate() : -1;
		var days = getMonthDays(d);

		if (frm < 0)
			frm = 7 + frm;

		while (firstcount++ < 7) {
			output.header.push({ index: firstday, name: self.days_short[firstday] });
			firstday++;
			if (firstday > 6)
				firstday = 0;
		}

		var index = 0;
		var indexEmpty = 0;
		var count = 0;
		var prev = getMonthDays(new Date(year, month - 1, 1, 12, 0)) - frm;
		var cur;

		for (var i = 0; i < days + frm; i++) {

			var obj = { today: false, selected: false, empty: false, future: false, number: 0, index: ++count };

			if (i >= frm) {
				obj.number = ++index;
				obj.selected = sy === year && sm === month && sd === index;
				obj.today = ty === year && tm === month && td === index;
				obj.future = ty < year;
				if (!obj.future && year === ty) {
					if (tm < month)
						obj.future = true;
					else if (tm === month)
						obj.future = td < index;
				}

			} else {
				indexEmpty++;
				obj.number = prev + indexEmpty;
				obj.empty = true;
				cur = d.add('-' + indexEmpty + ' days');
			}

			if (!obj.empty)
				cur = d.add(i + ' days');

			obj.month = i >= frm && obj.number <= days ? d.getMonth() : cur.getMonth();
			obj.year = i >= frm && obj.number <= days ? d.getFullYear() : cur.getFullYear();
			obj.date = cur;
			output.days.push(obj);
		}

		indexEmpty = 0;

		for (var i = count; i < 42; i++) {
			var cur = d.add(i + ' days');
			var obj = { today: false, selected: false, empty: true, future: true, number: ++indexEmpty, index: ++count };
			obj.month = cur.getMonth();
			obj.year = cur.getFullYear();
			obj.date = cur;
			output.days.push(obj);
		}

		return output;
	};

	self.hide = function() {
		if (visible) {
			self.unbindevents();
			self.opt.close && self.opt.close();
			self.opt = null;
			self.older = null;
			self.target = null;
			self.aclass('hidden');
			self.rclass(cls + '-visible');
			visible = false;
		}
		return self;
	};

	self.show = function(opt) {

		setTimeout(function() {
			clearTimeout2('datepickerhide');
		}, 5);

		var el = $(opt.element);
		var dom = el[0];

		if (self.target === dom) {
			self.hide();
			return;
		}

		if (self.opt && self.opt.close)
			self.opt.close();

		var off = el.offset();
		var w = el.innerWidth();
		var h = el.innerHeight();
		var l = 0;
		var t = 0;
		var height = 305 + (opt.cancel ? 25 : 0);
		var s = 250;

		if (opt.element) {
			switch (opt.align) {
				case 'center':
					l = Math.ceil((off.left - s / 2) + (w / 2));
					break;
				case 'right':
					l = (off.left + w) - s;
					break;
				default:
					l = off.left;
					break;
			}

			t = opt.position === 'bottom' ? (off.top - height) : (off.top + h + 12);
		}

		if (opt.offsetX)
			l += opt.offsetX;

		if (opt.offsetY)
			t += opt.offsetY;

		if (l + s > WW)
			l = (l + w) - s;

		var restrict = true;
		var parent = dom.parentNode;

		while (parent) {
			if (parent.tagName === 'BODY') {
				restrict = false;
				break;
			}
			if (parent.classList.contains('ui-scrollbar-area'))
				break;
			parent = parent.parentNode;
		}

		if (restrict && (t + height) > WH)
			t = (t + h) - height;

		var dt = typeof(opt.value) === 'string' ? GET(opt.value) : opt.value;
		if ((!(dt instanceof Date)) || isNaN(dt.getTime()))
			dt = NOW;

		opt.scope = M.scope ? M.scope() : '';
		self.opt = opt;
		self.time = dt.format('HH:mm:ss');
		self.rclass('hidden');
		self.date(dt);
		main.css({ left: l, top: t });
		main.aclass(cls + '-visible', 50);
		self.bindevents();
		self.target = dom;
		visible = true;
	};

	self.setdate = function(dt) {

		if (!dt) {
			if (typeof(self.opt.value) === 'string')
				SET(self.opt.value + ' @change', dt);
			else
				self.opt.callback(dt);
			return;
		}

		var time = self.time.split(':');

		if (time.length > 1) {
			dt.setHours(+(time[0] || '0'));
			dt.setMinutes(+(time[1] || '0'));
			dt.setSeconds(+(time[2] || '0'));
		}

		self.opt.scope && M.scope(self.opt.scope);

		if (typeof(self.opt.value) === 'string')
			SET(self.opt.value + ' @change', dt);
		else
			self.opt.callback(dt);
	};

	self.make = function() {

		self.aclass(cls + '-container hidden');

		var conf = {};
		var reconfigure = false;

		if (!config.days) {
			conf.days = [];
			for (var i = 0; i < DAYS.length; i++)
				conf.days.push(DAYS[i]);
			reconfigure = true;
		}

		if (!config.months) {
			conf.months = MONTHS;
			reconfigure = true;
		}

		reconfigure && self.reconfigure(conf);
		W.$datepicker = self;

		self.event('click', function(e) {
			e.stopPropagation();
		});

		var hide = function() {
			visible && W.$datepicker && W.$datepicker.hide();
		};

		var hide2 = function() {
			visible && setTimeout2('datepickerhide', function() {
				W.$datepicker && W.$datepicker.hide();
			}, 20);
		};

		self.bindevents = function() {
			if (!visible)
				$(W).on('scroll', hide2);
		};

		self.unbindevents = function() {
			if (visible)
				$(W).off('scroll', hide2);
		};

		self.element.on('click', function(e) {
			if (e.target === self.dom)
				hide();
		});

		self.on('reflow + scroll + resize + resize2', hide);
	};

	self.makehtml = function() {
		var builder = [];
		builder.push('<div class="{0}-header"><span class="{0}-next"><i class="ti ti-angle-right"></i></span><span class="{0}-prev"><i class="ti ti-angle-left"></i></span><div class="{0}-info"><span class="{0}-month">---</span><span class="{0}-year">---</span></div></div><div class="{0}-years hidden"></div><div class="{0}-months"></div><div class="{0}-body hidden"><div class="{0}-week">'.format(cls));
		for (var i = 0; i < 7; i++)
			builder.push('<div></div>');
		builder.push('</div><div class="{0}-days">'.format(cls));

		var clearbtn = self.opt.clear === false ? null : '<span class="{0}-clear">{1}</span>'.format(cls, config.clear);

		for (var i = 0; i < 42; i++)
			builder.push('<div class="{0}-date"><div></div></div>'.format(cls, i));
		builder.push('</div></div><div class="{0}-footer"><span class="{0}-now">{2}</span><span class="{0}-clear">{3}</span></div>'.format(cls, config.close, config.today, clearbtn));

		self.html('<div class="{0}">{1}</div>'.format(cls, builder.join('')));
		main = $(self.find(cls2)[0]);

		builder = [];
		elbody = self.find(cls2 + '-body');
		elmonths = self.find(cls2 + '-months');
		for (var i = 0; i < 12; i++)
			builder.push('<div class="{0}-month" data-index="{1}"><div></div></div>'.format(cls, i));
		elmonths.html(builder.join(''));

		builder = [];
		elyears = self.find(cls2 + '-years');
		for (var i = 0; i < 25; i++)
			builder.push('<div class="{0}-year"><div></div></div>'.format(cls));
		elyears.html(builder.join(''));

		self.makehtml = null;

		self.find(cls2 + '-month').on('click', function(e) {

			var el = $(this);
			var index = el.attrd('index');
			var h = 'hidden';

			if (index) {
				current.setMonth(+index);
				self.date(current, true);
			} else if (!elmonths.hclass(h))
				index = 1;

			elyears.aclass(h);

			if (index)
				elmonths.aclass(h);
			else {
				elmonths.find(cls2 + '-today').rclass(cls + '-today');
				elmonths.find(cls2 + '-month').eq(current.getMonth()).aclass(cls + '-today');
				elmonths.rclass(h);
			}

			elbody.tclass(h, !elmonths.hclass(h));
			e.preventDefault();
			e.stopPropagation();

		});

		self.find(cls2 + '-year').on('click', function(e) {
			var el = $(this);
			var year = el.attrd('year');
			var h = 'hidden';

			if (year) {
				current.setFullYear(+year);
				self.date(current, true);
			} else if (!elyears.hclass(h))
				year = 1;

			elmonths.aclass(h);

			if (year)
				elyears.aclass(h);
			else {
				self.years();
				elyears.rclass(h);
			}

			elbody.tclass(h, !elyears.hclass(h));
			e.preventDefault();
			e.stopPropagation();
		});

		self.years = function() {
			var dom = self.find(cls2 + '-years').find(cls2 + '-year');
			var year = current.getFullYear();
			var index = 12;
			for (var i = 0; i < 25; i++) {
				var val = year - (index--);
				$(dom[i]).tclass(cls + '-today', val === year).attrd('year', val).find('div')[0].innerHTML = val;
			}
		};

		self.find(cls2 + '-date').on('click', function() {
			var dt = $(this).attrd('date').split('-');
			self.setdate(new Date(+dt[0], +dt[1], +dt[2], 12, 0, 0));
			self.hide();
		});

		self.find(cls2 + '-now').on('click', function() {
			self.setdate(new Date());
			self.hide();
		});

		self.find(cls2 + '-clear').on('click', function() {
			self.setdate(null);
			self.hide();
		});

		self.find(cls2 + '-next').on('click', function(e) {

			if (elyears.hclass('hidden')) {
				current.setMonth(current.getMonth() + 1);
				self.date(current, true);
			} else {
				current.setFullYear(current.getFullYear() + 25);
				self.years();
			}

			e.preventDefault();
			e.stopPropagation();
		});

		self.find(cls2 + '-prev').on('click', function(e) {

			if (elyears.hclass('hidden')) {
				current.setMonth(current.getMonth() - 1);
				self.date(current, true);
			} else {
				current.setFullYear(current.getFullYear() - 25);
				self.years();
			}

			e.preventDefault();
			e.stopPropagation();
		});
	};

	self.date = function(value, skipday) {

		var clssel = cls + '-selected';

		self.makehtml && self.makehtml();

		if (typeof(value) === 'string')
			value = value.parseDate();

		var year = value == null ? null : value.getFullYear();
		if (year && (year < self.years_from || year > self.years_to))
			return;

		if (!value || isNaN(value.getTime())) {
			self.find('.' + clssel).rclass(clssel);
			value = NOW;
		}

		var empty = !value;

		if (skipday) {
			skipday = false;
			empty = true;
		}

		if (skip) {
			skip = false;
			return;
		}

		value = new Date((value || NOW).getTime());

		var output = self.calculate(value.getFullYear(), value.getMonth(), value);
		var dom = self.find(cls2 + '-date');

		self.find(cls2 + '-body').rclass('hidden');
		self.find(cls2 + '-months,' + cls2 + '-years').aclass('hidden');

		current = value;

		for (var i = 0; i < 42; i++) {

			var item = output.days[i];
			var classes = [cls + '-date'];

			if (item.empty)
				classes.push(cls + '-disabled');

			if (!empty && item.selected)
				classes.push(cls + '-selected');

			if (item.today)
				classes.push(cls + '-day-today');

			var el = $(dom[i]);
			el.attrd('date', item.year + '-' + item.month + '-' + item.number);
			el.find('div').html(item.number);
			el.find('i').remove();
			el.rclass().aclass(classes.join(' '));
		}

		if (!skipday) {

			dom = self.find(cls2 + '-week').find('div');
			for (var i = 0; i < 7; i++)
				dom[i].innerHTML = output.header[i].name;

			dom = self.find(cls2 + '-months').find(cls2 + '-month');
			for (var i = 0; i < 12; i++)
				$(dom[i]).find('div').attrd('index', i)[0].innerHTML = self.months_short[i];
		}

		self.opt.badges && self.opt.badges(current, function(date) {

			if (!(date instanceof Array))
				date = [date];

			for (var i = 0; i < date.length; i++) {
				var dt = date[i].getFullYear() + '-' + date[i].getMonth() + '-' + date[i].getDate();
				var el = self.find(cls2 + '-date[data-date="{0}"]'.format(dt));
				if (el.length && !el.find('i').length)
					el.append('<i class="ti ti-circle"></i>');
			}

		});

		var info = self.find(cls2 + '-info');
		info.find(cls2 + '-month').html(self.months[current.getMonth()]);
		info.find(cls2 + '-year').html(current.getFullYear());

	};
});

COMPONENT('directory', 'minwidth:200', function(self, config, cls) {

	var cls2 = '.' + cls;
	var container, timeout, icon, plus, skipreset = false, skipclear = false, ready = false, input = null, issearch = false;
	var is = false, selectedindex = 0, resultscount = 0;
	var templateE = '{{ name | encode | ui_directory_helper }}';
	var templateR = '{{ name | raw }}';
	var template = '<li data-index="{{ $.index }}" data-search="{{ $.search }}" class="{{ $.classes }}">{{ if $.checkbox }}<span class="' + cls + '-checkbox"><i class="ti ti-check"></i></span>{{ fi }}{0}</li>';
	var templateraw = template.format(templateR);
	var regstrip = /(&nbsp;|<([^>]+)>)/ig;
	var parentclass = null;
	var skiphide = false;
	var skipmouse = false;
	var main;

	template = template.format(templateE);

	Thelpers.ui_directory_helper = function(val) {
		var t = this;
		return t.template ? (typeof(t.template) === 'string' ? t.template.indexOf('{{') === -1 ? t.template : Tangular.render(t.template, this) : t.render(this, val)) : self.opt.render ? self.opt.render(this, val) : val;
	};

	self.template = Tangular.compile(template);
	self.templateraw = Tangular.compile(templateraw);

	self.readonly();
	self.singleton();
	self.nocompile();

	self.configure = function(key, value, init) {
		if (init)
			return;
		switch (key) {
			case 'placeholder':
				self.find('input').prop('placeholder', value);
				break;
		}
	};

	self.make = function() {

		self.aclass('hidden ' + cls + '-area');
		self.append('<div class="{1}"><div class="{1}-search"><span class="{1}-add hidden"><i class="ti ti-plus"></i></span><span class="{1}-button"><i class="ti ti-search"></i></span><div><input type="text" placeholder="{0}" class="{1}-search-input" name="dir{2}" autocomplete="new-password" /></div></div><div class="{1}-container"><ul></ul></div></div>'.format(config.placeholder, cls, Date.now()));

		main = self.find(cls2);
		container = self.find('ul');
		input = self.find('input');
		icon = self.find(cls2 + '-button').find('.ti');
		plus = self.find(cls2 + '-add');

		self.event('mouseenter mouseleave', 'li', function() {
			if (ready && !issearch && !skipmouse) {
				container.find('li.current').rclass('current');
				$(this).aclass('current');
				var arr = container.find('li:visible');
				for (var i = 0; i < arr.length; i++) {
					if ($(arr[i]).hclass('current')) {
						selectedindex = i;
						break;
					}
				}
			}
		});

		self.element.on('click', function(e) {
			if (e.target === self.dom)
				self.hide(1);
		});

		var skiphidedelay;
		var skipmousedelay;
		var skipmousefalse = function() {
			skipmousedelay = null;
			skipmouse = false;
		};
		var skipmouseforce = function() {
			skipmouse = true;
			skipmousedelay && clearTimeout(skipmousedelay);
			skipmousedelay = setTimeout(skipmousefalse, 500);
		};

		self.event('focus', 'input', function() {

			skiphide = true;
			skiphidedelay && clearTimeout(skiphidedelay);
			skiphidedelay = setTimeout(function() {
				skiphide = false;
			}, 800);

			if (self.opt.search === false)
				$(this).blur();
		});

		self.event('click', cls2 + '-button', function(e) {
			skipclear = false;
			input.val('');
			self.search();
			e.stopPropagation();
			e.preventDefault();
		});

		self.event('click', cls2 + '-add', function() {
			if (self.opt.custom && self.opt.callback) {
				self.opt.scope && M.scope(self.opt.scope);
				self.opt.callback(input.val(), self.opt.element, true);
				self.hide();
			}
		});

		self.event('click', 'li', function(e) {

			var el = $(this);
			if (el.hclass('ui-disabled'))
				return;

			if (self.opt.callback) {

				self.opt.scope && M.scope(self.opt.scope);
				var item = self.opt.items[+el.attrd('index')];

				if (self.opt.checkbox) {
					item.selected = !item.selected;

					if (item.selected)
						item.selectedts = Date.now();
					else
						delete item.selectedts;

					el.tclass('selected', item.selected);

					if (self.opt.checked) {
						var tmpindex = self.opt.checked.indexOf(item.id);
						if (item.selected) {
							if (tmpindex === -1)
								self.opt.checked.push(item.id);
						} else if (tmpindex !== -1)
							self.opt.checked.splice(tmpindex, 1);
					}

					var response = null;

					if (self.opt.checked) {
						response = self.opt.checked.slice(0);
					} else {
						response = [];
						for (var i = 0; i < self.opt.items.length; i++) {
							var m = self.opt.items[i];
							if (m.selected)
								response.push(m);
						}
					}

					response.quicksort('selectedts');
					self.opt.callback(response, self.opt.element, false, e);
				} else
					self.opt.callback(item, self.opt.element, false, e);
			}

			is = true;

			if (!self.opt.checkbox) {
				self.hide(0);
				e.preventDefault();
				e.stopPropagation();
			}

		});

		var e_resize = function() {
			is && self.hide(0);
		};

		self.bindedevents = false;

		self.bindevents = function() {
			if (!self.bindedevents) {
				$(W).on('resize', e_resize);
				self.bindedevents = true;
			}
		};

		self.unbindevents = function() {
			if (self.bindedevents) {
				self.bindedevents = false;
				$(W).off('resize', e_resize);
			}
		};

		self.event('keydown', 'input', function(e) {
			var o = false;
			switch (e.which) {
				case 8:
					skipclear = false;
					break;
				case 27:
					o = true;
					self.hide();
					break;
				case 13:
					o = true;
					var sel = self.find('li.current');
					if (sel.hclass('ui-disabled'))
						return;
					if (self.opt.callback) {
						self.opt.scope && M.scope(self.opt.scope);
						var index = +sel.attrd('index');
						if (self.opt.custom && (!sel.length || index === -1))
							self.opt.callback(this.value, self.opt.element, true);
						else
							self.opt.callback(self.opt.items[index], self.opt.element);
					}
					self.hide();
					break;
				case 38: // up
					o = true;
					selectedindex--;
					if (selectedindex < 0)
						selectedindex = 0;
					self.move();
					break;
				case 40: // down
					o = true;
					selectedindex++;
					if (selectedindex >= resultscount)
						selectedindex = resultscount;
					self.move();
					break;
			}

			if (o) {
				skipmouseforce();
				e.preventDefault();
				e.stopPropagation();
			}

		});

		self.event('input', 'input', function() {
			issearch = true;
			setTimeout2(self.ID, self.search, 100, null, this.value);
		});

		var fn = function() {
			is && !skiphide && self.hide(1);
		};

		self.on('reflow + scroll + resize + resize2', fn);
		$(W).on('scroll', fn);
	};

	self.move = function() {

		var counter = 0;
		var scroller = container.parent();
		var li = container.find('li');
		var hli = 0;
		var was = false;
		var last = -1;
		var lastselected = 0;
		var plus = 0;

		for (var i = 0; i < li.length; i++) {

			var el = $(li[i]);

			if (el.hclass('hidden')) {
				el.rclass('current');
				continue;
			}

			var is = selectedindex === counter;
			el.tclass('current', is);

			if (is) {
				hli = (el.innerHeight() || 30) + 1;
				plus = (hli * 2);
				was = true;
				var t = (hli * (counter || 1));
				scroller[0].scrollTop = t - plus;
			}

			counter++;
			last = i;
			lastselected++;
		}

		if (!was && last >= 0) {
			selectedindex = lastselected;
			li.eq(last).aclass('current');
		}
	};

	var nosearch = function() {
		issearch = false;
	};

	self.nosearch = function() {
		setTimeout2(self.ID + 'nosearch', nosearch, 500);
	};

	self.search = function(value) {

		if (!self.opt)
			return;

		icon.tclass('ti-times', !!value).tclass('ti-search', !value);
		self.opt.custom && plus.tclass('hidden', !value);

		if (!value && !self.opt.ajax) {
			if (!skipclear)
				container.find('li').rclass('hidden');
			if (!skipreset)
				selectedindex = 0;
			resultscount = self.opt.items ? self.opt.items.length : 0;
			self.move();
			self.nosearch();
			return;
		}

		resultscount = 0;
		selectedindex = 0;

		if (self.opt.ajax) {
			var val = value || '';
			if (self.ajaxold !== val) {
				self.ajaxold = val;
				setTimeout2(self.ID, function(val) {
					self.opt && self.opt.ajax(val, function(items) {
						var builder = [];
						var indexer = {};
						var item;
						var key = (self.opt.search == true ? self.opt.key : (self.opt.search || self.opt.key)) || 'name';

						for (var i = 0; i < items.length; i++) {

							item = items[i];

							if (self.opt.exclude && self.opt.exclude(item))
								continue;

							if (self.opt.checked)
								item.selected = self.opt.checked.indexOf(item.id) !== -1;

							indexer.index = i;
							indexer.search = item[key] ? item[key].replace(regstrip, '') : '';
							indexer.checkbox = self.opt.checkbox === true;
							resultscount++;

							builder.push(self.opt.ta(item, indexer));
						}

						if (self.opt.empty) {
							item = {};
							var tmp = self.opt.raw ? '<b>{0}</b>'.format(self.opt.empty) : self.opt.empty;
							item[self.opt.key || 'name'] = tmp;
							if (!self.opt.raw)
								item.template = '<b>{0}</b>'.format(self.opt.empty);
							indexer.index = -1;
							builder.unshift(self.opt.ta(item, indexer));
						}

						skipclear = true;
						self.opt.items = items;
						container.html(builder);
						self.move();
						self.nosearch();
					});
				}, 300, null, val);
			}
		} else if (value) {
			value = value.toSearch().split(' ');
			var arr = container.find('li');
			for (var i = 0; i < arr.length; i++) {
				var el = $(arr[i]);
				var val = el.attrd('search').toSearch();
				var is = false;

				for (var j = 0; j < value.length; j++) {
					if (val.indexOf(value[j]) === -1) {
						is = true;
						break;
					}
				}

				el.tclass('hidden', is);

				if (!is)
					resultscount++;
			}
			skipclear = true;
			self.move();
			self.nosearch();
		}
	};

	self.show = function(opt) {

		// opt.element
		// opt.items
		// opt.callback(value, el)
		// opt.offsetX     --> offsetX
		// opt.offsetY     --> offsetY
		// opt.offsetWidth --> plusWidth
		// opt.placeholder
		// opt.render
		// opt.custom
		// opt.minwidth
		// opt.maxwidth
		// opt.key
		// opt.exclude    --> function(item) must return Boolean
		// opt.search
		// opt.selected   --> only for String Array "opt.items"
		// opt.classname
		// opt.checkbox
		// opt.checked;

		if (opt.checked == true)
			opt.checked = [];

		var el = opt.element instanceof jQuery ? opt.element[0] : opt.element;

		if (opt.items == null)
			opt.items = EMPTYARRAY;

		self.tclass(cls + '-default', !opt.render);

		if (parentclass) {
			self.rclass(parentclass);
			parentclass = null;
		}

		if (opt.classname) {
			main.aclass(opt.classname);
			parentclass = opt.classname;
		}

		if (!opt.minwidth)
			opt.minwidth = config.minwidth;

		if (is) {
			clearTimeout(timeout);
			if (self.target === el) {
				self.hide(1);
				return;
			}
		}

		self.initializing = true;
		self.target = el;
		opt.ajax = null;
		self.ajaxold = null;

		var element = opt.element ? $(opt.element) : null;
		var callback = opt.callback;
		var items = opt.items;
		var type = typeof(items);
		var item;

		if (type === 'string') {
			items = opt.items = GET(items);
			type = typeof(items);
		}

		if (type === 'function' && callback) {
			type = '';
			opt.ajax = items;
			items = null;
		}

		if (!items && !opt.ajax) {
			self.hide(0);
			return;
		}

		setTimeout(self.bindevents, 500);
		self.tclass(cls + '-search-hidden', opt.search === false);

		self.opt = opt;
		opt.class && main.aclass(opt.class);

		input.val('');

		var builder = [];
		var selected = null;

		opt.ta = opt.key ? Tangular.compile((opt.raw ? templateraw : template).replace(/\{\{\sname/g, '{{ ' + opt.key)) : opt.raw ? self.templateraw : self.template;

		if (!opt.ajax) {
			var indexer = {};
			var key = (opt.search == true ? opt.key : (opt.search || opt.key)) || 'name';
			for (var i = 0; i < items.length; i++) {

				item = items[i];

				if (typeof(item) === 'string')
					item = { name: item, id: item, selected: item === opt.selected };

				if (opt.exclude && opt.exclude(item))
					continue;

				if (item.selected || opt.selected === item) {
					selected = i;
					skipreset = true;
					item.selected = true;
				} else
					item.selected = false;

				if (opt.checked && item.selected)
					opt.checked.push(item.id);

				var c = '';

				if (item.selected)
					c += (c ? ' ' : 'selected current');

				if (item.classname)
					c += (c ? ' ' : item.classname);

				if (item.disabled)
					c += (c ? ' ' : 'ui-disabled');

				indexer.classes = c;
				indexer.checkbox = opt.checkbox === true;
				indexer.index = i;
				indexer.search = item[key] ? item[key].replace(regstrip, '') : '';
				builder.push(opt.ta(item, indexer));
			}

			if (opt.empty) {
				item = {};
				var tmp = opt.raw ? '<b>{0}</b>'.format(opt.empty) : opt.empty;
				item[opt.key || 'name'] = tmp;
				if (!opt.raw)
					item.template = '<b>{0}</b>'.format(opt.empty);
				indexer.index = -1;
				builder.unshift(opt.ta(item, indexer));
			}
		}

		self.target = element ? element[0] : null;

		var w = element ? element.width() : config.minwidth;
		var offset = element ? element.offset() : EMPTYOBJECT;
		var width = w + (opt.offsetWidth || 0);

		if (opt.minwidth && width < opt.minwidth)
			width = opt.minwidth;
		else if (opt.maxwidth && width > opt.maxwidth)
			width = opt.maxwidth;

		ready = false;
		opt.ajaxold = null;
		plus.aclass('hidden');
		self.find('input').prop('placeholder', opt.placeholder || config.placeholder);
		var scroller = self.find(cls2 + '-container').css('width', width + 30);
		container.html(builder);

		var options = { left: 0, top: 0, width: width };

		if (opt.element) {
			switch (opt.align) {
				case 'center':
					options.left = Math.ceil((offset.left - width / 2) + (opt.element.innerWidth() / 2));
					break;
				case 'right':
					options.left = (offset.left - width) + opt.element.innerWidth();
					break;
				default:
					options.left = offset.left;
					break;
			}

			options.top = opt.position === 'bottom' ? ((offset.top - self.height()) + element.height()) : offset.top;
		} else {
			options.top = opt.y;
			options.left = opt.x;
		}

		options.scope = M.scope ? M.scope() : '';

		if (opt.offsetX)
			options.left += opt.offsetX;

		if (opt.offsetY)
			options.top += opt.offsetY;

		var mw = width;
		var mh = self.height();

		if (options.left < 0)
			options.left = 10;
		else if ((mw + options.left) > WW)
			options.left = (WW - mw) - 10;

		var dom = opt.element ? opt.element[0].parentNode : null;
		var restrict = true;

		while (dom) {

			if (dom.tagName === 'BODY') {
				restrict = false;
				break;
			}

			if (dom.classList.contains('ui-scrollbar-area'))
				break;

			dom = dom.parentNode;
		}

		if (options.top < 0)
			options.top = 10;
		else if (restrict && (mh + options.top) > WH)
			options.top = (WH - mh) - 10;

		main.css(options);

		!isMOBILE && setTimeout(function() {
			ready = true;
			if (opt.search !== false)
				input.focus();
		}, 200);

		setTimeout(function() {
			self.initializing = false;
			is = true;

			if (selected) {
				var h = container.find('li:first-child').innerHeight() + 1;
				var y = (container.find('li.selected').index() * h) - (h * 2);
				scroller[0].scrollTop = y < 0 ? 0 : y;
			} else
				scroller[0].scrollTop = 0;

			self.rclass('invisible');

		}, 100);

		if (is) {
			self.search();
			return;
		}

		selectedindex = selected || 0;
		resultscount = items ? items.length : 0;
		skipclear = true;

		self.search();
		self.aclass('invisible');
		self.rclass('hidden');

		setTimeout(function() {
			if (self.opt && ((self.opt.x != null && self.opt.y != null) || (self.target && self.target.offsetParent)))
				main.aclass(cls + '-visible');
			else
				self.hide(1);
		}, 100);

		skipreset = false;
	};

	self.hide = function(sleep) {
		if (!is || self.initializing)
			return;
		clearTimeout(timeout);
		timeout = setTimeout(function() {
			self.unbindevents();
			self.rclass(cls + '-visible').aclass('hidden');
			if (self.opt) {
				self.opt.close && self.opt.close();
				self.opt.class && self.rclass(self.opt.class);
				self.opt = null;
			}
			is = false;
		}, sleep ? sleep : 100);
	};
});

COMPONENT('dropdownlist', 'limit:3;check:true', function(self, config, cls) {

	var cls2 = '.' + cls;
	var items;
	var nocheck = false;

	self.template = Tangular.compile('<div class="{0}-item" data-id="{{ id }}"><span class="{0}-control {0}-remove"><i class="ti ti-times"></i></span><div class="name">{{ if icon }}<i class="{{ icon }}"></i>{{ fi }}{{ name }}</div></div>'.format(cls));
	self.getter = null;

	self.validate = function(value) {
		return (!config.required || config.disabled) ? true : (value && value.length > 0);
	};

	self.uncheck = function() {
		var items = self.get();
		nocheck = false;
		self.tclass(cls + '-limited', items && config.limit ? items.length >= config.limit : false);
	};

	self.make = function() {

		var label = self.element.text() || config.label;
		self.aclass(cls + (config.required ? (' ' + cls + '-required') : ''));
		self.html('<label>{2}:</label><div class="{0}-values"><div class="{0}-add"><span class="{0}-control"><i class="ti ti-angle-down"></i></span>{1}</div><div class="{0}-items"></div></div>'.format(cls, config.placeholder, label));
		items = self.find(cls2 + '-items');
		self.event('click', cls2 + '-add', function() {

			if (self.hclass(cls + '-limited') || config.disabled)
				return;

			var items = self.get();
			var datasource = typeof(config.datasource) === 'string' ? GET(config.datasource) : config.datasource;
			var opt = {};

			opt.element = $(this);

			if (config.dirplaceholder)
				opt.placeholder = config.dirplaceholder;

			if (config.dirsearch)
				opt.search = config.dirsearch;

			opt.offsetX = -1;
			opt.offsetY = -1;
			opt.offsetWidth = 12;
			opt.items = datasource.slice(0);

			if ((items && items.length)) {
				opt.items = opt.items.remove(function(item) {
					return items && items.length && items.findIndex('id', item.id) !== -1;
				});
			}

			opt.callback = function(value) {

				value = CLONE(value);

				delete value.selected;
				delete value.checked;
				delete value.template;

				var items = self.get() || [];

				if (items.findItem('id', value.id))
					return;

				items.unshift(value);

				if (config.limit && items.length > config.limit)
					items.splice(config.limit);

				nocheck = true;
				self.set(items);
				self.change(true);
				setTimeout(self.uncheck, 100);
			};

			SETTER('directory/show', opt);
		});

		self.event('click', cls2 + '-remove', function() {

			if (config.disabled)
				return;

			var el = $(this).closest(cls2 + '-item');
			var id = ATTRD(el);
			var arr = self.get();
			var index = arr.findIndex('id', id);
			arr.splice(index, 1);
			nocheck = true;
			self.update(true);
			self.change(true);
			setTimeout(self.uncheck, 100);
		});
	};

	self.configure = function(key, value) {
		if (key === 'datasource') {
			if (config.datasource.indexOf(',') !== -1)
				config.datasource = self.parsesource(config.datasource);
		} else if (key === 'disabled')
			self.tclass('ui-disabled', value);
	};

	self.check = function() {
		var items = self.get() || [];
		var check = typeof(config.datasource) === 'string' ? GET(config.datasource) : config.datasource;
		items.wait(function(item, next) {
			var m = check.findItem('id', item.id);
			if (m) {
				item.name = m.name;
				item.icon = m.icon;
				item.unit = m.unit;
			} else
				item.id = '';
			next();
		}, function() {
			nocheck = true;
			self.set(items.remove('id', ''));
			self.change(true);
			setTimeout(self.uncheck, 100);
		});
	};

	self.redraw = function() {

		var value = self.get() || [];
		var builder = [];

		for (var item of value)
			builder.push(self.template(item));

		items.html(builder.join(''));
		setTimeout(self.uncheck, 100);
	};

	self.setter = function() {
		if (nocheck || !config.check)
			self.redraw();
		else
			self.check();
	};

});

COMPONENT('edit', 'dateformat:yyyy-MM-dd;padding:10;floating:0', function(self, config, cls) {

	var cls2 = '.' + cls;
	var events = {};
	var floating;

	self.readonly();
	self.singleton();

	self.parse = function(el) {

		var t = el[0];

		if (t.$edit)
			return t.$edit;

		var opt = (el.attrd('edit') || '').parseConfig();
		opt.scope = el.scope();
		opt.html = el.html();

		if (opt.type)
			opt.type = opt.type.toLowerCase();

		if (opt.type === 'date' && !opt.format)
			opt.format = config.dateformat;

		if (opt.offsetX == null)
			opt.offsetX = config.offsetX;

		if (opt.offsetY == null)
			opt.offsetY = config.offsetY;

		if (opt.floating == null)
			opt.floating = config.floating;

		if (opt.check) {
			opt.checkforce = function(el) {
				var opt = el[0].$edit;
				var path = opt.scope ? opt.scope.makepath(opt.check) : opt.check;
				return GET(path)(opt, el);
			};
		}

		t.$edit = opt;
		return opt;
	};

	self.movecursor = function(el, beg) {
		var range, selection, doc = document;
		if (doc.createRange) {
			range = doc.createRange();
			range.selectNodeContents(el[0]);
			range.collapse(beg ? true : false);
			selection = W.getSelection();
			selection.removeAllRanges();
			selection.addRange(range);
		} else if (doc.selection) {
			range = doc.body.createTextRange();
			range.moveToElementText(el[0]);
			range.collapse(beg ? true : false);
			range.select();
		}
	};

	self.focusnext = function(el, e) {

		el = $(el);

		var parent = el[0];
		for (var i = 0; i < 12; i++) {
			parent = parent.parentNode;
			if (parent === document.body)
				break;
		}

		var arr = $(parent).find('.edit,.edit2');
		for (var i = 0; i < arr.length; i++) {
			if (arr[i] === el[0]) {
				var next = arr[i + 1];
				e && e.preventDefault();
				next && self.edit($(next));
				return true;
			}
		}

	};

	self.make = function() {

		self.aclass(cls);
		self.append('<div class="{0}-window hidden"></div>'.format(cls));
		floating = self.find(cls2 + '-window');
		$(document).on('click', '.edit', self.edit).on('dblclick', '.edit2', self.edit);

		events.keydown = function(e) {

			var t = this;

			if (!t.$editevents)
				return;

			var meta = t.$edit;

			if (meta.clear) {
				t.innerHTML = '';
				meta.clear = 0;
			}

			if (!meta.keypressed) {
				meta.keypressed = 1;
				$(t).aclass('edit-keypressed');
			}

			if ((e.metaKey || e.ctrlKey) && (e.which === 66 || e.which === 76 || e.which === 73 || e.which === 85)) {
				if (meta.type !== 'html') {
					e.preventDefault();
					e.stopPropagation();
				}
			}

			var el;

			if (e.which === 27) {
				el = $(t);
				t.$edit.is = false;
				self.detach(el);
				return;
			}

			if (e.which === 13 || e.which === 9) {

				if (e.which === 13 && meta.multiline)
					return;

				e.preventDefault();

				el = $(t);

				if (self.approve(el)) {
					self.detach(el);
					el.rclass('edit-keypressed');
					if (e.which === 9 && self.focusnext(t, e))
						return;
				} else
					self.detach(el);
			}
		};

		events.blur = function() {
			var t = this;
			if (t.$editevents) {
				var el = $(t);
				el.rclass('edit-keypressed');
				t.$edit.is && self.approve(el);
				self.detach(el);
			}
		};

		events.paste = function(e) {
			e.preventDefault();
			e.stopPropagation();
			var meta = this.$edit;
			var text = e.originalEvent.clipboardData.getData(self.attrd('clipboard') || 'text/plain');
			text && document.execCommand('insertText', false, meta.multiline ? text.trim() : text.replace(/\n|\r/g, '').trim());
		};

	};

	self.edit = function(e) {

		var is = e instanceof jQuery;
		var t = is ? e : this;

		if (!is) {
			e.preventDefault();
			e.stopPropagation();
		}

		if (t.$edit && t.$edit.is)
			return;

		var el = $(t);

		var opt = self.parse(el);
		if (!opt || (opt.checkforce && !opt.checkforce(el)))
			return;

		if (opt.prevent) {
			e.preventDefault();
			e.stopPropagation();
		}

		var value = el.html();
		var empty = false;

		var jcbind = el[0].$jcbind || {};
		if (jcbind.empty && jcbind.empty == el[0].innerText) {
			empty = true;
		}

		if (opt.floating) {

			var target = opt.parent ? (opt.parent === 'parent' ? el.parent() : el.closest(opt.parent)) : el;
			var offset = opt.floating === 'position' ? target.position() : target.offset();
			var width = opt.width || (target.width() + (config.padding * 2) + (opt.offsetWidth || 0));

			if (width < config.minwidth)
				width = config.minwidth;

			floating.css({ width: width, left: (offset.left - config.padding) + (opt.offsetX || 0), top: (offset.top - config.padding) + (opt.offsetY || 0), font: el.css('font') });
			floating.html(empty ? '' : value);
			floating.rclass('hidden');
			floating[0].$edit = opt;

		} else {
			floating.aclass('hidden');
			delete floating[0].$edit;
			empty && el.empty();
		}

		opt.is = true;
		opt.keypressed = 0;
		opt.html = value;
		opt.element = el;

		self.attach(opt.floating ? floating : el);
	};

	self.approve = function(el) {

		var opt = el[0].$edit;
		var cur = el.html();

		if (opt.html === cur)
			return true;

		var val = cur;

		if (opt.type !== 'html') {
			var area = document.createElement('TEXTAREA');
			area.innerHTML = val;
			val = $(area).text();
			val = val.replace(/<br(\s\/)?>/g, opt.multiline ? '\n' : '').trim();
		}

		if (opt.maxlength && val.length > opt.maxlength)
			val = val.substring(0, opt.maxlength);

		opt.value = val;

		switch (opt.type) {
			case 'number':
				opt.value = opt.value ? opt.value.parseFloat() : 0;
				if ((opt.minvalue != null && opt.value < opt.minvalue) || (opt.maxvalue != null && opt.value > opt.maxvalue))
					return false;
				break;
			case 'phone':
				if (opt.required) {
					if (!opt.value.isPhone())
						return false;
				} else if (opt.value && !opt.value.isPhone())
					return false;
				break;
			case 'url':
				if (opt.required) {
					if (!opt.value.isURL())
						return false;
				} else if (opt.value && !opt.value.isURL())
					return false;
				break;
			case 'email':
				if (opt.required) {
					if ((!opt.value || !opt.value.isEmail()))
						return false;
				} else if (opt.value && !opt.value.isEmail())
					return false;
				break;
			case 'date':
				if (!opt.empty) {
					opt.value = opt.value ? opt.value.parseDate(opt.format) : null;
					if (opt.required && !opt.value)
						return false;
				}
				break;
			default:
				if (opt.required && !opt.value)
					return false;
				break;
		}

		self.save(el);
		return true;
	};

	self.save = function(el) {

		var opt = el[0].$edit;
		var fn = opt.exec || opt.save || config.exec;
		if (fn) {
			fn = GET(opt.scope ? opt.scope.makepath(fn) : fn);
			if (typeof(fn) === 'function') {
				opt.detached = true;
				fn(opt, function(body) {
					if (body == null || body === false)
						opt.value = opt.html;
					else if (body !== true)
						opt.value = body + '';
					opt.element.html(opt.value + '');
					opt.notify && EXEC(opt.scope ? opt.scope.makepath(opt.notify) : opt.notify, opt);
				});
				return;
			}
		}

		if (!opt.nobind && opt.bind !== true) {
			setTimeout(function() {
				var b = opt.element.binder();
				if (b) {
					b.disabled = true;
					b.exec(opt.value, b.path);
					SET(b.path, opt.value, 2);
					b.disabled = false;
					opt.notify && EXEC(opt.scope ? opt.scope.makepath(opt.notify) : opt.notify, opt);
				}
			}, 100);
		}
	};

	self.attach = function(el) {
		if (!el[0].$editevents) {
			var o = el[0].$edit;
			el[0].$editevents = true;
			el.aclass('edit-open' + (o.multiline ? ' edit-multiline' : ''));
			el.on('keydown', events.keydown);
			el.on('blur', events.blur);
			el.on('paste', events.paste);
			el.attr('contenteditable', true);
			el.focus();

			if (o.clear || o.cursor === 'beg' || o.cursor === 'begin')
				setTimeout(self.movecursor, 10, el, 1);
			else
				self.movecursor(el, 0);

			if (o.select || o.selectall) {
				setTimeout(function() {
					document.execCommand('selectAll', false, null);
				}, 20);
			}
		}
	};

	self.detach = function(el) {
		if (el[0].$editevents) {
			el.off('keydown', events.keydown);
			el.off('blur', events.blur);
			el.off('paste', events.paste);
			el[0].$editevents = false;

			if (el[0] === floating[0])
				floating.aclass('hidden');

			var opt = el[0].$edit;

			if (!opt.detached && opt.html != null)
				opt.element.html(opt.html);

			delete opt.detached;
			opt.is = false;
			el.rclass('edit-open edit-multiline');
			el.attr('contenteditable', false);
		}
	};

});

COMPONENT('empty', 'icon:ti ti-database;parent:parent;margin:0;wait:1', function(self, config, cls) {

	var visible = false;
	var special = false;
	var table;

	self.readonly();

	self.make = function() {

		self.aclass(cls);

		var scr = self.find('> scri' + 'pt,> template');
		var text = scr.length ? scr.html() : self.html();
		var html = '<div class="{0}-table hidden"><div class="{0}-cell"><i class="{1}"></i><div>{2}</div></div></div>'.format(cls, config.icon, text);

		if (scr.length) {
			special = true;
			scr.remove();
			self.element.prepend(html);
		} else
			self.html(html);

		table = self.find('> .' + cls + '-table');

		self.on('resize2 + resize', function() {
			if (!visible)
				self.resize();
		});

		self.rclass('hidden invisible');
	};

	self.resize = function() {
		setTimeout2(self.ID, self.resizeforce, 300);
	};

	self.resizeforce = function() {

		if (visible)
			return;

		if (config.height) {
			table.css('height', config.height);
			table.tclass('hidden', visible);
			return;
		}

		var parent = self.parent(config.parent);
		var wh = parent.height() - 10;

		if (config.topoffset)
			wh -= self.element.offset().top;

		if (config.topposition)
			wh -= self.element.position().top;

		table.css('height', wh < 100 ? 'auto' : wh - config.margin);
		table.rclass('hidden');
	};

	self.setter = function(value, path, type) {

		if (!value && type === 0 && config.wait)
			return;

		visible = false;

		if (value instanceof Array)
			visible = !!value.length;
		else if (value)
			visible = value.items && !!value.items.length;

		if (visible)
			table.aclass('hidden');
		else
			self.resize();

		if (special) {
			for (var i = 1; i < self.dom.children.length; i++)
				$(self.dom.children[i]).tclass('hidden', !visible);
		}

	};

});

COMPONENT('errorhandler', 'keywords:401=login', function(self, config) {

	self.readonly();
	self.singleton();
	self.nocompile();
	self.blind();

	self.make = function() {

		var keywords = config.keywords ? config.keywords.split(',') : EMPTYARRAY;
		for (var i = 0; i < keywords.length; i++)
			keywords[i] = keywords[i].split('=');

		self.on('ERROR', function(err) {

			if (err instanceof Error)
				err = [{ error: err.message }];
			else if (!(err instanceof Array))
				err = [{ error: err.error || err.message || err.err }];

			var arr = [];
			var response = {};

			for (var m of err) {

				if (!m.error)
					continue;

				for (var k of keywords) {
					if ((m.name && m.name.indexOf(k[0]) !== -1) || m.error.indexOf(k[0]) !== -1)
						response[k[1]] = true;
				}

				arr.push(m.error);
			}

			response.items = arr;

			if (config.exec) {
				response.message = arr.join('<br />');
				self.SEEX(config.exec, response);
			} else {
				var name = self.caniuse('message') ? 'message' : self.caniuse('notify') ? 'notify' : self.caniuse('notifybar') ? 'notifybar' : self.caniuse('snackbar') ? 'snackbar' : '';
				if (name)
					SETTER(name + '/warning', response.items.join('<br />'));
				else if (W.console)
					console.error('ERROR():', response.items.join('<br />'));
			}

			SETTER('!loading/hide', 100);
		});
	};

});

COMPONENT('exec', function(self, config) {

	var regparent = /\?\d/;
	var extensions = [];

	self.readonly();
	self.blind();

	self.register = function(fn) {
		extensions.push(fn);
	};

	self.make = function() {

		var scope = null;

		var scopepath = function(el, val) {
			if (!scope)
				scope = el.scope();
			return val == null ? scope : scope ? scope.makepath ? scope.makepath(val) : val.replace(/\?/g, el.scope().path) : val;
		};

		var fn = function(plus, forceprevent) {
			return function(e) {

				var el = $(this);
				var attr = el.attrd('exec' + plus);
				var path = el.attrd('path' + plus);
				var href = el.attrd('href' + plus);
				var def = el.attrd('def' + plus);
				var reset = el.attrd('reset' + plus);

				scope = null;

				var prevent = forceprevent ? '1' : el.attrd('prevent' + plus);
				if (prevent === 'true' || prevent === '1') {
					e.preventDefault();
					e.stopPropagation();
				}

				if (attr) {

					if (extensions.length) {
						for (var ext of extensions) {
							if (ext(attr, el, e, plus))
								return;
						}
					}

					// Run for the current component
					if (attr.charAt(0) === '@') {
						attr = attr.substring(1);
						var com = el.component();
						if (com && typeof(com[attr]) === 'function')
							com[attr](el, e);
						return;
					}

					if (attr.indexOf('?') !== -1) {
						var tmp = scopepath(el);
						if (tmp) {
							var isparent = regparent.test(attr);
							attr = tmp.makepath ? tmp.makepath(attr) : attr.replace(/\?/g, tmp.path);
							if (isparent && attr.indexOf('/') !== -1)
								M.scope(attr.split('/')[0]);
							else
								M.scope(tmp.path);
						}

						if (scope && scope.plugin) {
							var index = attr.indexOf('/');
							if (index !== -1) {
								var method = attr.substring(index + 1).trim();
								if (method) {
									scope.plugin[method].call(scope.plugin, el, e);
									return;
								}
							}
						}
					}

					EXEC(attr, el, e);
				}

				href && REDIRECT(href);

				if (def) {
					if (def.indexOf('?') !== -1)
						def = scopepath(el, def);
					DEFAULT(def);
				}

				if (reset) {
					if (reset.indexOf('?') !== -1)
						reset = scopepath(el, reset);
					RESET(reset);
				}

				if (path) {
					var val = el.attrd('value');
					if (val) {
						if (path.indexOf('?') !== -1)
							path = scopepath(el, path);
						var v = GET(path);
						SET(path, new Function('value', 'return ' + val)(v), true);
					}
				}
			};
		};

		self.event('contextmenu', config.selector3 || '.exec3', fn('3', true));
		self.event('dblclick', config.selector2 || '.exec2', fn('2'));
		self.event('click', config.selector || '.exec', fn(''));
	};
});

COMPONENT('fileuploader', function(self) {

	var input;

	self.singleton();
	self.readonly();
	self.nocompile();

	self.upload = self.browse = function(opt) {

		// opt.url
		// opt.callback {Function(response, err)}
		// opt.progress {Function(progress)}
		// opt.multiple {Boolean}
		// opt.accept {String}
		// opt.prefix = 'file{0}'
		// opt.data = { key: value };

		self.opt = opt;

		if (opt.files) {
			self.uploadfiles(opt.files);
		} else {
			self.find('input').attr('accept', opt.accept || '*/*').prop('multiple', !!opt.multiple);
			input[0].value = '';
			input.click();
		}
	};

	self.make = function() {
		self.aclass('hidden');
		self.append('<input type="file" multiple />');
		input = self.find('input');
		self.event('change', 'input', function(e) {
			self.uploadfiles(e.target.files);
			this.value = '';
		});
	};

	self.uploadfiles = function(files) {

		var data = new FormData();

		for (var i = 0; i < files.length; i++) {

			var filename = files[i].name;
			var index = filename.lastIndexOf('/');

			if (index === -1)
				index = filename.lastIndexOf('\\');

			if (index !== -1)
				filename = filename.substring(index + 1);

			data.append((self.opt.prefix || 'file{0}').format(i), files[i], filename);
		}

		if (self.opt.data) {
			for (var key in self.opt.data)
				data.append(key, self.opt.data[key]);
		}

		SETTER('loading/show');
		UPLOAD(self.opt.url, data, function(response, err) {

			input[0].value = '';
			SETTER('loading/hide', 500);

			if (!response && err)
				self.opt.callback(null, err);
			else if (response instanceof Array && response[0] && response[0].error)
				self.opt.callback(null, response[0].error);
			else
				self.opt.callback(response);

		}, self.opt.progress);
	};

});

COMPONENT('flow', 'width:6000;height:6000;grid:25;markers:1;curvedlines:1;horizontal:1;steplines:1;snapping:0;animationradius:5;outputoffsetY:0;outputoffsetX:0;inputoffsetY:0;inputoffsetX:0;history:100;multiple:1;animationlimit:100;animationlimitconnection:5;allowpause:1', function(self, config, cls) {

	// config.infopath {String}, output: { zoom: Number, selected: Object }
	// config.undopath {String}, output: {Object Array}
	// config.redopath {String}, output: {Object Array}

	var D = '__';
	var drag = {};

	// self.bindvisible();
	self.readonly();

	self.meta = {};
	self.el = {};     // elements
	self.op = {};     // operations
	self.cache = {};  // cache
	self.paused = {};
	self.animations = {};
	self.animations_token = 0;
	self.info = { zoom: 100 };
	self.undo = [];
	self.redo = [];
	self.focused = null;
	self.groupid = '';

	self.make = function() {

		// @TODO: add support again for a vertical mode
		config.horizontal = 1;

		self.aclass(cls);
		self.html(('<div class="{0}-selection hidden"></div><div class="{0}-groups"></div><svg width="{width}" height="{height}" xmlns="http://www.w3.org/2000/svg" class="{0}-connections"><defs><marker id="{0}-arrow" viewbox="0 0 10 10" refX="5" refY="5" markerwidth="4" markerheight="4" orient="auto-start-reverse"><path d="M 0 0 L 10 5 L 0 10 z" /></marker></defs><g class="lines"></g><g class="anim"></g></svg><svg width="{width}" height="{height}" xmlns="http://www.w3.org/2000/svg">' + (config.grid ? '<defs><pattern id="jflowgrid" width="{grid}" height="{grid}" patternunits="userSpaceOnUse"><path d="M {grid} 0 L 0 0 0 {grid}" fill="none" class="{0}-grid" shape-rendering="crispEdges" /></pattern></defs><rect width="100%" height="100%" fill="url(#jflowgrid)" shape-rendering="crispEdges" />' : '') + '</svg>').format(cls).arg(config));

		var svg = self.find('svg');
		self.el.svg = svg.eq(0);
		self.el.grid = svg.eq(1);
		self.el.selection = self.find('.' + cls + '-selection');
		self.el.anim = self.el.svg.find('g.anim');
		self.el.lines = self.el.svg.find('g.lines');
		self.el.groups = self.find('.' + cls + '-groups');
		self.template = Tangular.compile('<div class="component invisible{{ if inputs && inputs.length }} hasinputs{{ fi }}{{ if outputs && outputs.length }} hasoutputs{{ fi }}{{ if component }} f-{{ component }}{{ fi }}" data-id="{{ id }}" style="top:{{ y }}px;left:{{ x }}px"><div class="area"><div class="content">{{ html | raw }}</div>{{ if inputs && inputs.length }}<div class="inputs">{{ foreach m in inputs }}<div class="input" data-index="{{ if m.id }}{{ m.id }}{{ else }}{{ $index }}{{ fi }}"><i class="component-io"></i><span>{{ if m.name }}{{ m.name | raw }}{{ else }}{{ m | raw }}{{ fi }}</span></div>{{ end }}</div>{{ fi }}{{ if outputs && outputs.length }}<div class="outputs">{{ foreach m in outputs }}<div class="output{{ if m.type }} output-{{ m.type }}{{ fi }}" data-index="{{ if m.id }}{{ m.id }}{{ else }}{{ $index }}{{ fi }}"><i class="component-io"></i><span>{{ if m.name }}{{ m.name | raw }}{{ else }}{{ m | raw }}{{ fi }}</span></div>{{ end }}</div>{{ fi }}</div></div>');
		self.aclass(cls + '-' + (config.horizontal ? 'h' : 'v'));

		drag.touchmove = function(e) {
			var evt = e.touches[0];
			drag.lastX = evt.pageX;
			drag.lastY = evt.pageY;
		};

		drag.touchend = function(e) {

			drag.unbind();

			if (!drag.lastX || !drag.lastY)
				return;

			e.target = document.elementFromPoint(drag.lastX, drag.lastY);

			if (e.target && e.target.tagName !== 'SVG')
				e.target = $(e.target).closest('svg')[0];

			if (e.target) {
				var pos = self.op.position();
				e.pageX = drag.lastX;
				e.pageY = drag.lastY;
				e.offsetX = e.pageX - pos.left;
				e.offsetY = e.pageY - pos.top;
				setTimeout(drag.drop, 100, e);
			}
		};

		drag.bind = function() {
			$(document).on('touchmove', drag.touchmove).on('touchend', drag.touchend);
		};

		drag.unbind = function() {
			$(document).off('touchmove', drag.touchmove).off('touchend', drag.touchend);
		};

		drag.handler = function(e) {
			if (!HIDDEN(self.element)) {
				drag.el = $(e.target);
				self.aclass(cls + '-dragged');
				e.touches && drag.bind();
				var dt = e.originalEvent.dataTransfer;
				dt && dt.setData('text', '1');
			}
			drag.lastX = 0;
			drag.lastY = 0;
			drag.clickX = e.offsetX;
			drag.clickY = e.offsetY;
		};

		drag.handler_end = function() {
			self.rclass(cls + '-dragged');
		};

		drag.drop = function(e) {
			var meta = {};
			meta.pageX = e.pageX;
			meta.pageY = e.pageY;
			meta.offsetX = e.offsetX;
			meta.offsetY = e.offsetY;
			meta.clickX = drag.clickX;
			meta.clickY = drag.clickY;
			meta.el = drag.el;
			meta.target = $(e.target);
			config.ondrop && self.EXEC(config.ondrop, meta, self);
		};

		var doc = $(document);
		doc.on('dragstart touchstart', '[draggable]', drag.handler);
		doc.on('dragend touchend', '[draggable]', drag.handler_end);

		self.el.grid.on('dragenter dragover dragexit drop dragleave', function(e) {
			switch (e.type) {
				case 'drop':
					drag.drop(e);
					break;
			}
			e.preventDefault();
		});
	};

	self.destroy = function() {
		$(document).off('dragstart touchstart', drag.handler).off('dragend touchend', drag.handler_end);
	};

	self.getOffset = function() {
		return self.element.offset();
	};

	var rebuilding = false;
	var rebuildagain = false;

	self.setter = function(value, path, type) {

		if (rebuilding) {
			rebuildagain = true;
			return;
		}

		if (type === 2 || !value)
			return;

		var keys = Object.keys(value);
		var onmake = config.onmake ? GET(self.makepath(config.onmake)) : null;
		var ondone = config.ondone ? GET(self.makepath(config.ondone)) : null;
		var onremove = config.onremove ? GET(self.makepath(config.onremove)) : null;
		var prev = self.cache;
		var ischanged = false;
		var recompile = false;
		var tmp;
		var el;

		rebuilding = true;

		self.cache = {};
		self.paused = {};
		self.animations_token = Date.now();
		self.animations = {};

		for (var i = 0; i < keys.length; i++) {

			var key = keys[i];

			if (key === 'paused') {
				self.paused = value[key];
				continue;
			}

			if (key === 'tabs')
				continue;

			if (key === 'groups') {
				self.refresh_groups();
				continue;
			}

			var com = value[key];
			var checksum = self.helpers.checksum(com);

			// com.id = key
			// com.outputs = ['0 output', '1 output', '2 output'] or [{ id: 'X', name: 'Output X' }]
			// com.inputs = ['0 input', '1 input', '2 input'] or [{ id: 'X', name: 'Input X' }]
			// com.connections = { 0: { ID: COMPONENT_ID, index: 'INDEX' } };
			// com.x
			// com.y
			// com.actions = { select: true, move: true, disabled: false, remove: true, connet: true };

			// Delegates
			// com.onmake = function(el, com)
			// com.ondone = function(el, com)
			// com.onmove = function(el, com)
			// com.onremove = function(el, com)
			// com.onconnect = function(meta)
			// com.ondisconnect = function(meta)

			// done && done(el, com);
			// make && make(el, com);

			var tmp = prev[key];
			var rebuild = true;

			com.id = key;

			if (tmp) {
				if (tmp.checksum === checksum)
					rebuild = false;
				else
					tmp.checksum = checksum;
				delete prev[key];
				el = tmp.el;
			}

			if (rebuild) {
				tmp && tmp.el.aclass('removed').attrd('id', 'removed');
				var html = self.template(com);

				if (!recompile && html && html.COMPILABLE())
					recompile = true;

				html = $(html);
				self.append(html);
				el = self.find('.component[data-id="{id}"]'.arg(com));

				if (com.tab) {
					el.aclass('tab-' + com.tab);
					el[0].$flowtab = com.tab;
				} else
					el[0].$flowtab = '';

				com.onmake && com.onmake(el, com);
				onmake && onmake(el, com);
				com.element = html.find('.content').eq(0);
				if (!ischanged && com.connections && Object.keys(com.connections).length)
					ischanged = true;
				if (type === 1)
					self.op.undo({ type: 'component', id: com.id, instance: com });
			} else if (el) {
				var tab = el[0].$flowtab;
				if (tab !== com.tab) {
					tab && el.rclass2(tab);
					if (com.tab) {
						el.aclass('tab-' + com.tab);
						el[0].$flowtab = com.tab;
					} else
						el[0].$flowtab = '';
				}
				el.css({ left: com.x, top: com.y });
			}

			if (!com.connections)
				com.connections = {};

			self.cache[key] = { id: key, instance: com, el: el, checksum: checksum, actions: com.actions || {}};
		}

		if (!value.groups)
			self.el.groups.find('> div').remove();

		var removedconn = [];

		// Remove unused components
		for (var key in prev) {
			tmp = prev[key];
			tmp.instance.onremove && tmp.instance.onremove(tmp.el, tmp.instance);
			onremove && onremove(tmp.el, tmp.instance);
			var conn = self.el.lines.find('.from' + D + key + ',.to' + D + key).aclass('connection removed hidden');
			for (var i = 0; i < conn.length; i++) {
				var dom = conn[i];
				removedconn.push({ fromid: dom.getAttribute('data-from'), fromindex: dom.getAttribute('data-fromindex'), toid: dom.getAttribute('data-to'), toindex: dom.getAttribute('data-toindex') });
			}
			tmp.el.remove();
		}

		for (var key in self.cache) {
			tmp = self.cache[key];
			tmp.instance.ondone && tmp.instance.ondone(tmp.el, tmp.instance);
			ondone && ondone(tmp.el, tmp.instance);
		}

		self.el.lines.find('path').aclass('removed');
		keys = Object.keys(self.cache);

		var reconnect = function() {

			for (var i = 0; i < keys.length; i++) {
				var key = keys[i];
				tmp = self.cache[key];
				tmp.el.rclass('invisible');
				tmp.width = tmp.el.width();
				tmp.instance.connections && self.reconnect(tmp);
			}

			self.find('.removed').remove();
			rebuilding = false;

			for (var i = 0; i < removedconn.length; i++) {
				var conn = removedconn[i];
				self.helpers.checkconnectedinput(conn.toid, conn.toindex);
				self.helpers.checkconnectedoutput(conn.fromid, conn.fromindex);
				var com = self.find('.component[data-id="' + conn.fromid + '"]');
				com.tclass('connected', self.el.lines.find('.from' + D + '_' + conn.fromid).length > 0);
			}

			if (rebuildagain)
				self.refresh();

			rebuildagain = false;

		};

		if (type === 'refresh') {
			reconnect();
		} else {
			setTimeout(reconnect, 300);
			self.undo = [];
			self.redo = [];
			self.op.undo();
			self.op.redo();
		}

		self.op.refreshinfo();
		COMPILE();
	};

	self.configure = function(key, value, init) {
		if (!init) {
			if (key === 'curvedlines')
				setTimeout(self.op.reposition, 100);
		}
	};

	self.reconnect = function(m) {

		for (var index in m.instance.connections) {
			var output = m.el.find('.output[data-index="{0}"]'.format(index));
			var inputs = m.instance.connections[index];
			var problem = false;
			for (var j = 0; j < inputs.length; j++) {
				var com = inputs[j];
				var el = self.find('.component[data-id="{0}"]'.format(com.id));
				var input = el.find('.input[data-index="{0}"]'.format(com.index));
				if (!self.el.connect(output, input, true, com)) {
					inputs[j] = null;
					problem = true;
				}
			}
			if (problem) {
				index = 0;
				while (true) {
					var item = inputs[index];
					if (item === undefined)
						break;
					if (item === null)
						inputs.splice(index, 1);
					else
						index++;
				}
			}
		}
	};

	self.selected = function(callback) {

		var output = {};
		var arr;
		var tmp;
		var el;

		output.components = [];
		output.connections = [];

		arr = self.find('.component-selected');
		for (var i = 0; i < arr.length; i++) {
			el = arr[i];
			tmp = self.cache[el.getAttribute('data-id')];
			tmp && output.components.push(tmp);
		}

		arr = self.find('.connection-selected');
		for (var i = 0; i < arr.length; i++) {

			el = arr[i];
			var cls = el.getAttribute('class').split(' ');
			for (var j = 0; j < cls.length; j++) {
				var c = cls[j];
				if (c.substring(0, 4 + D.length) === 'conn' + D) {
					var a = c.split(D);
					var tmp = {};
					tmp.output = self.cache[a[1]].instance;
					tmp.input = self.cache[a[2]].instance;
					tmp.fromid = a[1];
					tmp.toid = a[2];
					tmp.fromindex = a[3];
					tmp.toindex = a[4];
					output.connections.push(tmp);
				}
			}
		}

		callback && callback(output);
		return output;
	};
});

// Designer: Helpers
EXTENSION('flow:helpers', function(self, config) {

	var D = '__';

	self.helpers = {};

	self.helpers.checksum = function(obj) {
		var checksum = JSON.stringify({ a: obj.outputs || EMPTYARRAY, b: obj.inputs || EMPTYARRAY, c: obj.html });
		return HASH(checksum, true).toString(36);
	};

	self.helpers.connect = function(x1, y1, x4, y4, findex, tindex, reverse) {

		if (config.markers && tindex !== -1 && findex !== -1) {
			if (reverse)
				x1 += 11;
			x4 -= 14;
		}

		if (tindex === -1)
			tindex = 0;

		if (findex === -1)
			findex = 0;

		var y = (y4 - y1) / 2;
		var x2 = x1;
		var y2 = y1 + y;
		var x3 = x4;
		var y3 = y1 + y;
		var s = ' ';

		if (config.curvedlines)
			return self.helpers.diagonal(x1, y1, x4, y4);

		var paddingO = config.steplines ? Math.ceil(15 * ((findex + 1) / 100) * 50) : 15;
		var paddingI = config.steplines ? Math.ceil(15 * ((tindex + 1) / 100) * 50) : 15;
		var can = config.steplines && Math.abs(x1 - x4) > 50 && Math.abs(y1 - y4) > 50;
		var builder = [];

		builder.push('M' + (x1 >> 0) + s + (y1 >> 0));

		if (config.horizontal) {

			if (can)
				x2 += paddingO;

			x2 += paddingO * 2;

			builder.push('L' + (x2 >> 0) + s + (y1 >> 0));

			if (can) {
				if ((x1 !== x4 || y1 !== y4)) {
					var d = Math.abs(paddingO - paddingI) / 2 >> 0;
					y2 += d;
					builder.push('L' + (x2 >> 0) + s + (y2 >> 0));
					y3 += d;
					x3 -= paddingI * 3;
					builder.push('L' + (x3 >> 0) + s + (y3 >> 0));
				}
				x4 -= paddingI;
			}

			if (can)
				x4 -= paddingI * 2;
			else
				x4 -= paddingI;

			builder.push('L' + (x4 >> 0) + s + (y4 >> 0));

			if (can)
				x4 += paddingI * 2;

			x4 += paddingI;

		} else if (can) {
			if ((x1 !== x4 || y1 !== y4)) {
				builder.push('L' + (x2 >> 0) + s + (y2 >> 0));
				builder.push('L' + (x3 >> 0) + s + (y3 >> 0));
			}
		}

		builder.push('L' + (x4 >> 0) + s + (y4 >> 0));
		return builder.join(s);
	};

	self.helpers.move1 = function(x1, y1, conn, findex, tindex) {
		var pos = conn.attrd('offset').split(',');
		conn.attr('d', self.helpers.connect(x1, y1, +pos[2], +pos[3], findex, tindex, conn.hclass('connection-type-transform')));
		conn.attrd('offset', x1 + ',' + y1 + ',' + pos[2] + ',' + pos[3]);
	};

	self.helpers.checkconnected = function(meta) {
		meta.el.tclass('connected', Object.keys(meta.instance.connections).length > 0);
	};

	self.helpers.checkconnectedoutput = function(id, index) {
		var is = !!self.el.lines.find('.from' + D + id + D + index).length;
		self.find('.component[data-id="{0}"]'.format(id)).find('.output[data-index="{0}"]'.format(index)).tclass('connected', is);
	};

	self.helpers.checkconnectedinput = function(id, index) {
		var is = !!self.el.lines.find('.to' + D + id + D + index).length;
		self.find('.component[data-id="{0}"]'.format(id)).find('.input[data-index="{0}"]'.format(index)).tclass('connected', is);
	};

	self.helpers.move2 = function(x4, y4, conn, findex, tindex) {
		var pos = conn.attrd('offset').split(',');
		conn.attr('d', self.helpers.connect(+pos[0], +pos[1], x4, y4, findex, tindex, conn.hclass('connection-type-transform')));
		conn.attrd('offset', pos[0] + ',' + pos[1] + ',' + x4 + ',' + y4);
	};

	self.helpers.isconnected = function(output, input) {

		var co = output.closest('.component');
		var ci = input.closest('.component');
		var coid = self.cache[co.attrd('id')];
		var ciid = self.cache[ci.attrd('id')];

		if (coid.id === ciid.id)
			return true;

		if (coid.actions.disabled || coid.actions.connect === false || ciid.actions.disabled || ciid.actions.connect === false)
			return true;

		var el = $('.conn' + D + co.attrd('id') + D + ci.attrd('id') + D + output.attrd('index') + D + input.attrd('index'));
		return el.length > 0;
	};

	self.helpers.position = function(el, isout) {

		var component = self.op.cacheclosest(el, '.component');
		var conn = self.op.cacheclosest(el, isout ? '.output' : '.input');
		var container = self.op.cacheclosest(el, isout ? '.outputs' : '.inputs');
		var pos = component.position();
		var offset = conn.position();
		var containeroffset = container.position();

		var x = self.op.zoom(pos.left + offset.left, true) + (isout ? config.outputoffsetX : config.inputoffsetX);
		var y = self.op.zoom(pos.top + containeroffset.top + offset.top, true) + (isout ? config.outputoffsetY : config.inputoffsetY) + (el.height() / 2 + 2);

		var plusX = 0;

		if (config.horizontal) {
			if (isout)
				plusX = conn.innerWidth() + 2;
			else
				plusX += self.op.zoom(6);
		}

		var id = component.attrd('id');
		var indexid = el.attrd('index');
		return { x: (x + plusX) >> 0, y: y >> 0, id: id, index: indexid, indexoffset: el.index() };
	};

	self.helpers.parseconnection = function(line) {
		var arr = line.attr('class').split(' ');
		for (var i = 0; i < arr.length; i++) {
			if (arr[i].substring(0, 4 + D.length) === 'conn' + D) {
				var info = arr[i].split(D);
				var obj = {};
				obj.fromid = info[1];
				obj.toid = info[2];
				obj.fromindex = info[3];
				obj.toindex = info[4];
				return obj;
			}
		}
	};

	self.helpers.diagonal = function(x1, y1, x2, y2) {
		var minx = Math.min(x1, x2);
		var miny = Math.min(y1, y2);
		var mx = minx + (Math.abs(x1 - x2) / 2);
		var my = miny + (Math.abs(y1 - y2) / 2);
		var distx = mx - minx;
		var disty = my - miny;
		if (config.horizontal) {
			var dist = range(range(20, 70, disty), range(70, 180, mx), distx);
			if (disty < distx) {
				var d = distx - disty;
				d = distx / d;
				dist = dist - (dist / d);
			}
			return 'M' + x1 + ',' + y1 +' Q ' + (x1+dist) + ' ' + (y1) + ' ' + mx + ' ' + my + ' T ' + x2 + ' ' + y2;
		} else {
			var dist = range(range(20, 70, distx), range(70, 180, my), disty);
			return 'M' + x1 + ',' + y1 +' Q ' + x1 + ' ' + (y1+dist) + ' ' + mx + ' ' + my + ' Q ' + x2 + ' ' + (y2-dist) + ' ' + x2 + ' ' + y2;
		}
	};

	function range(min, max, val) {
		if (val < min)
			return min;
		if (val > max)
			return max;
		return val;
	}
});

EXTENSION('flow:operations', function(self, config, cls) {

	var D = '__';

	// Internal method
	var removeconnections = function(next, removed) {

		var connections = next.instance.connections;
		var meta = {};
		var onremove = function(conn) {

			var is = conn.id === removed.id;
			if (is) {
				meta.output = next.instance;
				meta.input = removed.instance;
				meta.fromid = next.id;
				meta.toid = removed.id;
				meta.toindex = conn.index;
				next.instance.ondisconnect && next.instance.ondisconnect.call(next.instance, meta);
				removed.instance.ondisconnect && removed.instance.ondisconnect.call(removed.instance, meta);
				config.ondisconnect && self.EXEC(config.ondisconnect, meta);
			}

			return is;
		};

		for (var index in connections) {
			var conn = connections[index];
			meta.fromindex = index;
			connections[index] = conn = conn.remove(onremove);
			if (conn.length === 0) {
				delete connections[index];
				self.helpers.checkconnectedoutput(next.id, index);
			}
		}

		self.helpers.checkconnected(next);
	};

	var isoutcache = {};

	self.op.deselect = function() {
		var selection = W.getSelection ? W.getSelection() : null;
		selection && selection.removeAllRanges();
	};

	self.op.isoutcache = function() {
		var parent = self.parent('auto');
		var offset = parent[0] === W ? null : parent.offset();
		if (offset) {
			if (!offset.left && !offset.top)
				offset = parent.position();
			isoutcache.is = parent[0] !== W && parent[0].tagName !== 'BODY' && parent[0].tagName !== 'HTML';
			isoutcache.left = offset.left + 10;
			isoutcache.top = offset.top + 10;
			isoutcache.width = parent.width() - 10;
			isoutcache.height = parent.height() - 10;
		} else
			isoutcache.is = false;
	};

	self.op.isout = function(e) {
		if (isoutcache.is) {
			if (e.pageX < isoutcache.left || e.pageY < isoutcache.top)
				return true;
			if (isoutcache.width && isoutcache.height) {
				if (e.pageX > (isoutcache.left + isoutcache.width) || e.pageY > (isoutcache.top + isoutcache.height))
					return true;
			}
		}
	};

	self.op.unselect = function(type, id) {

		var cls = 'connection-selected';

		if (type == null || type === 'connections') {
			self.el.lines.find('.' + cls).rclass(cls);
			self.el.lines.find('.highlight').rclass('highlight');
		}

		cls = 'component-selected';

		if (type == null || type === 'component') {
			var el = id ? self.find('.' + cls + '[data-id="' + id + '"]') : self.find('.' + cls);
			el.rclass(cls);
		}

		cls = 'group-selected';

		if (type == null || type === 'group') {
			var el = id ? self.find('.' + cls + '[data-id="' + id + '"]') : self.find('.' + cls);
			el.rclass(cls);
		}

		if (self.info.selected && (!id || self.info.selected.id === id)) {
			self.info.selected = null;
			self.info.type = '';
			self.op.refreshinfo();
		}

	};

	self.op.modified = function() {
		self.change(true);
		self.update(true, 2);
	};

	self.op.clean = function() {

		var model = self.get();

		for (var key in model) {

			if (key === 'paused') {
				var count = 0;
				for (var subkey in model.paused) {
					var tmp = subkey.split(D);
					var rem = false;
					var m = model[tmp[1]];

					if (!m)
						rem = true;

					if (!rem) {
						var arr = tmp[0] === 'input' ? m.inputs : m.outputs;
						if (arr && arr.length > 0) {
							if (typeof(arr[0]) === 'object') {
								if (!arr.findItem('id', tmp[2]))
									rem = true;
							} else if (!arr[+tmp[2]])
								rem = true;
						} else
							rem = true;
					}

					if (rem)
						delete model.paused[subkey];
					else
						count++;
				}
				if (!count)
					delete model.paused;
				continue;
			}

			// check connections
			var com = model[key];
			for (var subkey in com.connections) {

				var tmp = model[key].connections[subkey];
				var index = 0;

				while (true) {
					var conn = tmp[index];
					if (conn == null)
						break;

					if (!model[conn.id] || !model[conn.id].inputs) {
						tmp.splice(index, 1);
						continue;
					}

					index++;
				}

				if (!tmp.length)
					delete model[key].connections;
			}
		}
	};

	self.op.remove = function(id, noundo) {

		var tmp = self.cache[id];
		if (tmp == null) {
			var arr = (self.get().groups || EMPTYARRAY);
			tmp = arr.findItem('id', id);
			if (tmp && (!tmp.actions || tmp.actions.remove === false)) {
				tmp.onremove && tmp.onremove(null, tmp);
				config.onremove && self.EXEC(config.onremove, null, tmp, 'group');
				arr.splice(arr.indexOf(tmp), 1);
				self.op.modified();
				self.find('.' + cls + '-group[data-id="{0}"]'.format(id)).remove();
				self.op.unselect();

				if (!noundo)
					self.op.undo({ type: 'remove', id: id, instance: tmp, place: 'group' });

				return true;
			}
			return false;
		}

		if (tmp.actions.remove === false)
			return false;

		tmp.instance.onremove && tmp.instance.onremove(tmp.el, tmp.instance);
		config.onremove && self.EXEC(config.onremove, tmp.el, tmp.instance, 'component');

		delete self.cache[id];
		delete self.get()[id];

		self.el.lines.find('.from' + D + id).remove();
		self.el.lines.find('.to' + D + id).remove();

		// browse all components and find dependencies to this component
		for (var key in self.cache)
			removeconnections(self.cache[key], tmp);

		var connections = tmp.instance.connections;

		for (var index in connections) {
			var conns = connections[index];
			for (var j = 0; j < conns.length; j++) {
				var conn = conns[j];
				self.helpers.checkconnectedinput(conn.id, conn.index);
			}
		}

		if (!noundo)
			self.op.undo({ type: 'remove', id: id, instance: tmp.instance });

		self.find('.component[data-id="{0}"]'.format(id)).remove();
		self.op.modified();
		return true;
	};

	self.op.select = function(id, noremove) {

		var com = self.cache[id];
		if (com == null) {
			var group = self.find('.' + cls + '-group[data-id="{0}"]'.format(id));
			if (group) {
				self.find('.group-selected,.connection-selected,.component-selected').rclass('group-selected connection-selected component-selected');
				group.aclass('group-selected');
				self.info.selected = (self.get().groups || EMPTYARRAY).findItem('id', group.attrd('id'));
				self.info.type = 'group';
				self.op.refreshinfo();
				return true;
			} else
				return false;
		}

		var selected = 'component-selected';

		if (!noremove)
			self.find('.' + selected).rclass(selected);

		self.find('.component[data-id="{0}"]'.format(id)).aclass(selected);
		self.find('.group-selected,.connection-selected').rclass('group-selected connection-selected');

		var connections = self.el.lines.find('.from{0},.to{0}'.format(D + id)).aclass('highlight');
		var parent = self.el.lines[0];

		for (var i = 0; i < connections.length; i++) {
			var dom = connections[i];
			parent.removeChild(dom);
			parent.appendChild(dom);
		}

		self.info.selected = com.instance;
		self.info.type = 'component';
		self.op.refreshinfo();
		self.op.deselect();
		return true;
	};

	self.op.modify = function(instance, type) {
		if (!instance.changes)
			instance.changes = {};
		instance.changes[type] = 1;
	};

	self.op.disconnect = function(fromid, toid, fromindex, toindex, noundo) {

		if (typeof(fromid) === 'object') {
			var meta = fromid;
			toid = meta.toid;
			fromindex = meta.fromindex;
			toindex = meta.toindex;
			fromid = meta.fromid;
		}

		var a = self.cache[fromid];
		var b = self.cache[toid];

		if (!a || !b)
			return false;

		var ac = a.instance;

		self.op.modify(a.instance, 'disconnect');
		self.op.modify(b.instance, 'disconnect');

		toindex += '';
		fromindex += '';

		var conn = ac.connections[fromindex].findItem(function(conn) {
			return conn.id === toid && conn.index === toindex;
		});

		if (!conn || conn.disabled)
			return false;

		ac.connections[fromindex].splice(ac.connections[fromindex].indexOf(conn), 1);

		if (!ac.connections[fromindex].length)
			delete ac.connections[fromindex];

		if (!noundo)
			self.op.undo({ type: 'disconnect', fromid: fromid, toid: toid, fromindex: fromindex, toindex: toindex });

		self.el.lines.find('.conn{0}{1}{2}{3}'.format(D + fromid, D + toid, D + fromindex, D + toindex)).remove();
		self.op.modified();
		self.helpers.checkconnected(a);
		self.helpers.checkconnectedoutput(fromid, fromindex);
		self.helpers.checkconnectedinput(toid, toindex);
		return true;
	};

	var repositionpending = false;
	var reposition = function() {

		if (self.$removed)
			return;

		if (HIDDEN(self.element)) {
			repositionpending = true;
			setTimeout(reposition, 300);
			return;
		}

		repositionpending = false;

		var arr = self.el.lines.find('.connection');

		for (var i = 0; i < arr.length; i++) {

			var path = $(arr[i]);
			if (path.hclass('removed'))
				continue;

			var meta = self.helpers.parseconnection(path);

			if (!meta)
				continue;

			var output = self.find('.component[data-id="{0}"]'.format(meta.fromid)).find('.output[data-index="{0}"]'.format(meta.fromindex));
			if (!output.length)
				continue;

			var input = self.find('.component[data-id="{0}"]'.format(meta.toid)).find('.input[data-index="{0}"]'.format(meta.toindex));
			if (!input.length)
				continue;

			var a = self.helpers.position(output, true);
			var b = self.helpers.position(input);

			var tmp = self.cache[meta.fromid];

			if (tmp && tmp.instance) {

				var instance = tmp.instance;
				var output = instance.outputs && typeof(instance.outputs[0]) === 'object' ? instance.outputs.findItem('id', meta.fromindex) : null;
				var marker = '';

				path.rclass2('connection-type-');

				if (output && output.type) {
					path.aclass('connection-type-' + output.type);
					if (config.markers && output.type === 'transform')
						marker = 'url(#{0}-arrow)'.format(cls);
				}

				path.attr('marker-start', marker);
			} else
				continue;

			path.attrd('offset', a.x + ',' + a.y + ',' + b.x + ',' + b.y);
			path.attrd('from', a.id);
			path.attrd('to', b.id);
			path.attrd('fromindex', a.index);
			path.attrd('toindex', b.index);
			path.attrd('fromindexoffset', a.indexoffset);
			path.attrd('toindexoffset', b.indexoffset);
			path.attr('d', self.helpers.connect(a.x, a.y, b.x, b.y, a.indexoffset, b.indexoffset, path.hclass('connection-type-transform')));
			path.rclass('hidden');
		}
	};

	self.op.cacheclosest = function(el, selector) {
		var cache = el[0].$flowcache;
		if (!cache)
			cache = el[0].$flowcache = {};
		return cache[selector] ? cache[selector] : cache[selector] = el.closest(selector);
	};

	self.op.reposition = function() {
		if (!repositionpending) {
			repositionpending = true;
			reposition();
		}
	};

	self.op.zoom = function(val, nooffset) {
		if (self.info.zoom === 100)
			return val;
		var zoom = self.info.zoom / 100;
		var offset = nooffset ? 0 : (((100 - self.info.zoom) / 10) + (self.info.zoom > 100 ? 1 : -1));
		return Math.ceil(val / zoom) - offset;
	};

	self.op.zoom_reverse = function(val) {
		if (self.info.zoom === 100)
			return val;
		var zoom = self.info.zoom / 100;
		return Math.ceil(val * zoom);
	};

	self.op.position = function() {
		var obj = {};
		var scroll = self.op.cacheclosest(self.element, '.ui-scrollbar-area')[0];

		if (scroll) {
			obj.scrollTop = scroll.scrollTop;
			obj.scrollLeft = scroll.scrollLeft;
		} else {
			obj.scrollTop = 0;
			obj.scrollLeft = 0;
		}

		var offset = self.el.svg.offset();
		obj.left = offset.left;
		obj.top = offset.top;
		return obj;
	};

	var notifytimeout = null;
	var notifyinfo = function() {
		notifytimeout = null;
		config.infopath && self.SEEX(config.infopath, self.info);
	};

	self.op.refreshinfo = function() {
		notifytimeout && clearTimeout(notifytimeout);
		notifytimeout = setTimeout(notifyinfo, 100);
	};

	self.op.undo = function(value) {

		if (value) {

			if (self.groupid)
				value.groupid = self.groupid;

			self.undo.push(value);

			if (self.undo.length > config.history)
				self.undo.shift();
		}

		config.undopath && self.SEEX(config.undopath, self.undo);
	};

	self.op.redo = function(value) {
		if (value) {
			self.redo.push(value);
			if (self.redo.length > config.history)
				self.redo.shift();
		}
		config.redopath && self.SEEX(config.redopath, self.redo);
	};

	self.op.resize = function() {
		setTimeout2(self.ID + 'reposition', self.op.reposition, 300);
	};

	self.on('resize + resize2', self.op.resize);
});

EXTENSION('flow:map', function(self, config, cls) {

	var events = {};
	var drag = {};
	var css = {};

	events.move = function(e) {

		if (!drag.is) {
			self.aclass(cls + '-drag');
			drag.is = true;
		}

		var x = (drag.x + drag.offset.left) - (e.pageX + drag.offset.left);
		var y = (drag.y + drag.offset.top) - (e.pageY + drag.offset.top);

		if (drag.meta) {

			if (x < 0) {
				css.left = self.op.zoom(drag.x);
				css.width = self.op.zoom((x * -1));
			} else {
				css.left = self.op.zoom(drag.x - x);
				css.width = self.op.zoom(drag.x) - css.left;
			}

			if (y < 0) {
				css.top = self.op.zoom(drag.y);
				css.height = self.op.zoom(y * -1);
			} else {
				css.top = self.op.zoom(drag.y - y);
				css.height = self.op.zoom(drag.y) - css.top;
			}

			css.left -= self.op.zoom(drag.offset.left);
			css.top -= self.op.zoom(drag.offset.top);
			self.el.selection.css(css);

		} else if (drag.target[0]) {

			var plusY = (y / drag.zoom) >> 0;
			var plusX = (x / drag.zoom) >> 0;

			drag.target[0].scrollLeft = drag.left + plusX;
			drag.target[0].scrollTop = drag.top + plusY;
		}
	};

	events.movetouch = function(e) {
		events.move(e.touches[0]);
	};

	events.up = function() {

		self.rclass(cls + '-drag');

		if (drag.meta) {

			var sel = self.el.selection;
			var pos = sel.position();

			var fromX = (self.op.zoom(pos.left)) >> 0;
			var fromY = (self.op.zoom(pos.top)) >> 0;

			var toX = fromX + sel.css('width').parseInt();
			var toY = fromY + sel.css('height').parseInt();

			sel.aclass('hidden');

			for (var key in self.cache) {
				var instance = self.cache[key].instance;

				var fx = instance.x;
				var fy = instance.y;
				var el = instance.element.closest('.component');
				var tx = instance.x + el.width();
				var ty = instance.y + el.height();

				if (fromX < fx && toX > tx && fromY < fy && toY > ty)
					self.op.select(key, true);
			}

		}

		events.unbind();
	};

	events.leave = function(e) {
		if (!e.relatedTarget)
			events.up(e);
	};

	events.bind = function() {
		if (!events.is) {
			events.is = true;
			self.element.on('mouseup', events.up);
			self.element.on('mousemove', events.move);
			self.element.on('touchend', events.up);
			self.element.on('touchmove', events.movetouch);
			$(W).on('mouseleave', events.leave);
		}
	};

	events.unbind = function() {
		if (events.is) {
			events.is = false;
			self.element.off('mouseup', events.up);
			self.element.off('mousemove', events.move);
			self.element.off('touchend', events.up);
			self.element.off('touchmove', events.movetouch);
			$(W).off('mouseleave', events.leave);
		}
	};

	self.event('contextmenu', function(e) {
		self.op.deselect();
		events.is && events.up();
		config.contextmenu && self.SEEX(config.contextmenu, e, 'map');
		e.preventDefault();
		e.stopPropagation();
	});

	self.event('mousedown touchstart', function(e) {

		if (events.is) {
			events.up();
			return;
		}

		if (e.button || e.target.tagName !== 'rect')
			return;

		// Unselects all selected components/connections
		self.op.unselect();
		self.op.deselect();

		var evt = e.touches ? e.touches[0] : e;
		var et = $(e.target);
		var target = et.closest('.ui-scrollbar-area');

		drag.is = false;
		drag.target = target;
		drag.zoom = self.info.zoom / 100;
		drag.x = evt.pageX;
		drag.y = evt.pageY;
		drag.left = 0;
		drag.top = 0;
		drag.meta = evt.metaKey || e.metaKey || evt.ctrlKey || e.ctrlKey;
		drag.offset = self.getOffset();

		if (drag.meta) {

			if (target[0]) {
				drag.top = drag.target[0].scrollTop;
				drag.left = drag.target[0].scrollLeft;
			}

			css.left = self.op.zoom(drag.x);
			css.top = self.op.zoom(drag.y);
			css.width = 0;
			css.height = 0;

			self.el.selection.rclass('hidden').css(css);
		} else if (drag.target[0]) {
			drag.top = drag.target[0].scrollTop;
			drag.left = drag.target[0].scrollLeft;
		}

		events.bind();
		e.preventDefault();
		e.stopPropagation();
		self.el.svg.focus();
		self.op.deselect();
	});

});

EXTENSION('flow:components', function(self, config) {

	var D = '__';
	var events = {};
	var drag = {};

	drag.css = {};

	self.components_reposition = function(obj) {

		// move all output connection
		for (var j = 0; j < obj.selected.length; j++) {
			var node = obj.selected[j];
			for (var i = 0; i < node.output.length; i++) {
				var conn = $(node.output[i]);
				var pos = self.helpers.position(conn, true);
				var arr = self.el.lines.find('.from' + D + pos.id + D + pos.index);
				for (var k = 0; k < arr.length; k++) {
					var ce = $(arr[k]);
					var findex = +ce.attrd('fromindexoffset');
					var tindex = +ce.attrd('toindexoffset');
					self.helpers.move1(pos.x, pos.y, ce, findex, tindex);
				}
			}

			// move all input connections
			for (var i = 0; i < node.input.length; i++) {
				var conn = $(node.input[i]);
				var pos = self.helpers.position(conn);
				var arr = self.el.lines.find('.to' + D + pos.id + D + pos.index);
				var findex = +conn.attrd('fromindexoffset');
				var tindex = +conn.attrd('toindexoffset');
				for (var k = 0; k < arr.length; k++) {
					var ce = $(arr[k]);
					var findex = +ce.attrd('fromindexoffset');
					var tindex = +ce.attrd('toindexoffset');
					self.helpers.move2(pos.x, pos.y, ce, findex, tindex);
				}
			}
		}
	};

	events.move = function(e) {

		if (self.op.isout(e)) {
			events.up(e);
			return;
		}

		var x = (e.pageX - drag.x);
		var y = (e.pageY - drag.y);

		for (var i = 0; i < drag.selected.length; i++) {
			var instance = drag.selected[i];
			instance.node.css({ left: self.op.zoom(instance.pos.left + x), top: self.op.zoom(instance.pos.top + y) });
		}

		if (!drag.is)
			drag.is = true;

		self.components_reposition(drag);
	};

	events.movetouch = function(e) {
		events.move(e.touches[0]);
	};

	self.components_moved = events.up = function(e, obj, nosnapping) {

		if (!obj)
			obj = drag;

		if (obj.is) {

			var undo = [];

			for (var i = 0; i < obj.selected.length; i++) {
				var instance = obj.selected[i];
				var pos = instance.node.position();

				if (config.snapping && nosnapping !== true) {
					pos.left = self.op.zoom(pos.left);
					pos.top = self.op.zoom(pos.top);
					pos.left += pos.left % self.op.zoom_reverse(config.snapping);
					pos.top += pos.top % self.op.zoom_reverse(config.snapping);
					instance.node.css(pos);
				} else {
					pos.left = self.op.zoom(pos.left);
					pos.top = self.op.zoom(pos.top);
				}

				var data = self.get()[instance.id];
				undo.push({ id: instance.id, x: data.x, y: data.y, newx: pos.left, newy: pos.top, groupid: self.groupid });
				data.x = pos.left;
				data.y = pos.top;
				data.onmove && data.onmove(instance.node, data);
				config.onmove && self.EXEC(config.onmove, instance.node, data, 'component');
				self.op.modify(data, 'move');
			}

			self.op.undo({ type: 'move', multiple: undo });
			self.components_reposition(obj);
			setTimeout(self.op.modified, 1);
		}

		events.unbind();

		var tmp = self.preventreposition;
		delete self.preventreposition;
		switch (tmp) {
			case 2:
			case 3:
				self.op.reposition();
				break;
		}
	};

	events.leave = function(e) {
		events.up(e);
	};

	events.bind = function() {
		if (!events.is) {
			events.is = true;
			self.op.isoutcache();
			self.element.on('mouseup', events.up);
			self.element.on('mousemove', events.move);
			self.element.on('touchend', events.up);
			self.element.on('touchmove', events.movetouch);
		}
	};

	events.unbind = function() {
		if (events.is) {
			events.is = false;
			self.element.off('mouseup', events.up);
			self.element.off('mousemove', events.move);
			self.element.off('touchend', events.up);
			self.element.off('touchmove', events.movetouch);
		}
	};

	self.event('contextmenu', '.area', function(e) {
		var selected = document.getSelection().toString();
		if (!selected) {

			events.is && events.up();

			var tagName = e.target.tagName;
			if (tagName === 'INPUT' || tagName === 'TEXTAREA' || tagName === 'SELECT')
				return;

			var el = $(this);
			var id = el.closest('.component').attrd('id');
			config.contextmenu && self.SEEX(config.contextmenu, e, 'component', self.cache[id].instance);
			e.preventDefault();
		}
		e.stopPropagation();
	});

	self.event('dblclick', '.area', function(e) {

		var parent = e.target;
		var target;

		while (true) {

			var cl = parent.classList;

			if (parent === self.dom || cl.contains('selectable') || parent.tagName === 'BUTTON' || parent.tagName === 'A' || cl.contains('output') || cl.contains('input'))
				return;

			if (cl.contains('component')) {
				target = $(parent);
				break;
			}

			parent = parent.parentNode;
		}

		config.dblclick && self.SEEX(config.dblclick, self.cache[target.attrd('id')].instance, e);
	});

	self.event('mousedown touchstart', '.area', function(e) {

		if (events.is) {
			events.up();
			return;
		}

		var parent = e.target;
		var clssel = 'component-selected';
		var target;

		while (true) {

			var cl = parent.classList;

			if (parent === self.dom || cl.contains('selectable') || parent.tagName === 'BUTTON' || parent.tagName === 'A')
				return;

			if (cl.contains('component')) {
				target = $(parent);
				break;
			}

			parent = parent.parentNode;
		}

		var selectconnections = function() {
			var clscon = 'highlight';
			var more = self.find('.' + clssel);
			self.el.lines.find('.' + clscon).rclass(clscon);
			for (var i = 0; i < more.length; i++) {
				var sel = $(more[i]);
				var selid = sel.attrd('id');
				var selector = '.from__{0},.to__{0}'.format(selid);
				self.el.lines.find(selector).aclass(clscon);
			}
		};

		drag.id = target.attrd('id');

		var more = self.find('.' + clssel);
		var ismeta = config.multiple && (e.metaKey || e.ctrlKey || e.shiftKey);
		if (ismeta) {
			if (target.hclass(clssel)) {
				self.op.unselect('component', more.length > 1 ? drag.id : null);
				setTimeout(selectconnections, 5);
				return;
			}
		}

		e.preventDefault();

		var evt = e.touches ? e.touches[0] : e;
		var tmp = self.cache[drag.id];

		self.op.unselect('connections');

		if (tmp.actions.select !== false) {
			var is = ismeta;
			if (!is)
				is = target.hclass(clssel);
			self.op.select(drag.id, is);
		}

		setTimeout(selectconnections, 5);

		if (tmp.actions.move === false)
			return;

		self.preventreposition = true;

		var nodes = self.find('.' + clssel);
		drag.target = target;
		drag.x = evt.pageX;
		drag.y = evt.pageY;
		drag.zoom = self.info.zoom / 100;
		drag.zoomoffset = ((100 - self.info.zoom) / 10) + (self.info.zoom > 100 ? 1 : -1);
		drag.is = false;
		drag.selected = [];

		for (var i = 0; i < nodes.length; i++) {
			var node = $(nodes[i]);
			drag.selected.push({ id: node.attrd('id'), node: node, pos: node.position(), output: node.find('.output'), input: node.find('.input') });
		}

		self.focused && self.focused.rclass('component-focused');
		self.focused = target.aclass('component-focused');
		events.bind();
		self.op.deselect();
	});

});

EXTENSION('flow:connections', function(self, config, cls) {

	var D = '__';
	var events = {};
	var drag = {};
	var prevselected = null;

	drag.css = {};

	events.move = function(e) {

		if (self.op.isout(e)) {
			events.up(e);
			return;
		}

		var x = drag.offsetX + (e.pageX - drag.x);
		var y = drag.offsetY + (e.pageY - drag.y);

		drag.path.attr('d', drag.input ? self.helpers.connect(self.op.zoom(x), self.op.zoom(y), drag.pos.x, drag.pos.y, -1, drag.realindex) : self.helpers.connect(drag.pos.x, drag.pos.y, self.op.zoom(x), self.op.zoom(y), drag.realindex, -1));

		if (drag.click)
			drag.click = false;
	};

	events.movetouch = function(e) {
		var evt = e.touches[0];
		drag.lastX = evt.pageX;
		drag.lastY = evt.pageY;
		events.move(evt);
	};

	events.up = function(e) {

		drag.path.remove();
		events.unbind();

		if (config.allowpause && e.target.tagName === 'I' && drag.click && (Date.now() - drag.ticks) < 150) {
			var icon = drag.target.find('.component-io');
			var clsp = 'disabled';
			icon.tclass(clsp);

			var key = (drag.input ? 'input' : 'output') + D + drag.pos.id + D + drag.pos.index;
			var model = self.get();

			if (!model.paused)
				model.paused = {};

			if (icon.hclass(clsp))
				model.paused[key] = 1;
			else
				delete model.paused[key];

			self.op.modify(model[drag.pos.id], 'pause');
			config.onpause && self.SEEX(config.onpause, key, model.paused[key] === 1);
			setTimeout2(self.ID + 'clean', self.op.clean, 2000);
			self.op.modified();
			return;
		}

		if (drag.lastX != null && drag.lastY != null)
			e.target = document.elementFromPoint(drag.lastX, drag.lastY);

		drag.target.add(drag.targetcomponent).rclass('connecting');

		if (drag.input) {

			// DRAGGED FROM INPUT
			var output = $(e.target).closest('.output');
			if (!output.length)
				return;

			// Checks if the connection is existing
			if (self.helpers.isconnected(output, drag.target))
				return;

			self.el.connect(output, drag.target);

		} else {

			// DRAGGED FROM OUTPUT
			var input = $(e.target).closest('.input');
			if (!input.length)
				return;

			// Checks if the connection is existing
			if (self.helpers.isconnected(drag.target, input))
				return;

			self.el.connect(drag.target, input);
		}
	};

	events.bind = function() {
		if (!events.is) {
			events.is = true;
			self.op.isoutcache();
			self.element.on('mouseup', events.up);
			self.element.on('mousemove', events.move);
			self.element.on('touchend', events.up);
			self.element.on('touchmove', events.movetouch);
		}
	};

	events.unbind = function() {
		if (events.is) {
			events.is = false;
			self.element.off('mouseup', events.up);
			self.element.off('mousemove', events.move);
			self.element.off('touchend', events.up);
			self.element.off('touchmove', events.movetouch);
		}
	};

	self.event('mousedown touchstart', '.output,.input', function(e) {

		if (e.button)
			return;

		e.preventDefault();
		e.stopPropagation();

		drag.click = true;
		drag.ticks = Date.now();

		var target = $(this);
		var evt = e.touches ? e.touches[0] : e;
		var com = target.closest('.component');
		var tmp = self.cache[com.attrd('id')];

		if (tmp.actions.disabled || tmp.actions.connect === false)
			return;

		var offset = self.getOffset();

		drag.input = target.hclass('input');
		drag.target = target;
		drag.index = +target.attrd('index');
		drag.realindex = target.index();
		drag.reverse = target.hclass('connection-type-transform');
		drag.x = evt.pageX;
		drag.y = evt.pageY;

		drag.pos = self.helpers.position(target, !drag.input);
		drag.target.add(com).aclass('connecting');
		drag.targetcomponent = com;

		// For touch devices
		drag.lastX = null;
		drag.lastY = null;

		if (evt.offsetX == null || evt.offsetY == null) {
			var off = self.op.position();
			drag.offsetX = drag.x - off.left;
			drag.offsetY = drag.y - off.top;
		} else {
			drag.offsetX = drag.x - offset.left;
			drag.offsetY = drag.y - offset.top;
		}

		drag.path = self.el.lines.asvg('path');
		drag.path.aclass('connection connection-draft');

		if (config.markers) {
			if (drag.input)
				drag.path.attr('marker-start', 'url(#{0}-arrow)'.format(cls));
			else
				drag.path.attr('marker-end', 'url(#{0}-arrow)'.format(cls));
		}

		events.bind();
	});

	self.el.connect = function(output, input, init, conn) {

		if (!output[0] || !input[0])
			return false;

		var a = self.helpers.position(output, true);
		var b = self.helpers.position(input);
		var path = self.el.lines.asvg('path');

		path.aclass('connection from' + D + a.id + ' to' + D + b.id + ' from' + D + a.id + D + a.index + ' to' + D + b.id + D + b.index + ' conn' + D + a.id + D + b.id + D + a.index + D + b.index + (HIDDEN(self.element) ? ' hidden' : ''));
		path.attrd('offset', a.x + ',' + a.y + ',' + b.x + ',' + b.y);
		path.attrd('fromindex', a.index);
		path.attrd('toindex', b.index);
		path.attrd('fromindexoffset', a.indexoffset);
		path.attrd('toindexoffset', b.indexoffset);
		path.attrd('from', a.id);
		path.attrd('to', b.id);

		if (config.markers)
			path.attr('marker-end', 'url(#{0}-arrow)'.format(cls));

		if (conn) {
			var color = conn.color || '';
			path.attrd('color', color);
			path.css({ stroke: color });
		}

		input.add(output).aclass('connected');

		if (init) {
			var kp = 'input' + D + b.id + D + b.index;
			input.find('.component-io').tclass('disabled', !!self.paused[kp]);
			kp = 'output' + D + a.id + D + a.index;
			output.find('.component-io').tclass('disabled', !!self.paused[kp]);
		}

		var data = self.get();
		var ac = data[a.id];
		var bc = data[b.id];
		var key = a.index + '';

		var outputmeta = typeof(ac.outputs[0]) === 'object' ? ac.outputs.findItem('id', a.index) : null;
		if (outputmeta) {
			path.aclass('connection-type-' + outputmeta.type);
			if (config.markers && outputmeta.type === 'transform')
				path.attr('marker-start', 'url(#{0}-arrow)'.format(cls));
		}

		path.attr('d', self.helpers.connect(a.x, a.y, b.x, b.y, a.indexoffset, b.indexoffset, outputmeta && outputmeta.type === 'transform'));

		ac.tab && path.aclass('tab-' + ac.tab);
		bc.tab && path.aclass('tab-' + bc.tab);

		if (ac.connections == null)
			ac.connections = {};

		if (ac.connections[key] == null)
			ac.connections[key] = [];

		if (!init) {
			self.op.modify(ac, 'connect');
			self.op.modify(bc, 'connect');
		}

		var arr = ac.connections[key];
		var bindex = b.index + '';
		var is = true;

		for (var i = 0; i < arr.length; i++) {
			var tmp = arr[i];
			if (tmp.id === b.id && tmp.index === bindex) {
				is = false;
				break;
			}
		}

		if (is)
			ac.connections[key].push({ id: b.id + '', index: bindex });

		output.closest('.component').aclass('connected');

		var meta = {};
		meta.output = ac;
		meta.input = data[b.id];
		meta.fromid = a.id;
		meta.toid = b.id;
		meta.fromindex = a.index;
		meta.toindex = b.index;
		meta.path = path;
		meta.init = init;
		ac.onconnect && ac.onconnect.call(ac, meta);
		bc.onconnect && bc.onconnect.call(bc, meta);
		config.onconnect && self.EXEC(config.onconnect, meta);

		if (!init) {
			self.op.undo({ type: 'connect', fromid: meta.fromid, toid: meta.toid, fromindex: meta.fromindex + '', toindex: meta.toindex + '' });
			self.op.modified();
		}

		return true;
	};

	self.event('contextmenu', '.connection', function(e) {

		events.is && events.up();

		var el = $(this);
		var meta = {};
		var classes = el.attr('class').split(' ');

		for (var i = 0; i < classes.length; i++) {
			var cls = classes[i];
			if (cls.substring(0, 6) === 'conn__') {
				var arr = cls.split('__');
				meta.fromid = arr[1];
				meta.toid = arr[2];
				meta.fromindex = arr[3];
				meta.toindex = arr[4];
				meta.from = self.cache[meta.fromid].instance;
				meta.to = self.cache[meta.toid].instance;
				break;
			}
		}

		meta.fromid && config.contextmenu && self.SEEX(config.contextmenu, e, 'connection', meta);

		e.preventDefault();
		e.stopPropagation();

	});

	self.event('mousedown touchstart', '.connection', function(e) {

		var el = $(this);
		var cls = 'connection-selected';

		self.op.unselect();

		if (el.hclass(cls))
			return;

		prevselected && prevselected.rclass(cls);
		el.aclass(cls);
		prevselected = el;

		var conn = self.helpers.parseconnection(el);
		conn.isconnection = true;
		conn.frominstance = self.cache[conn.fromid].instance;
		conn.toinstance = self.cache[conn.toid].instance;

		self.info.selected = conn;
		self.info.type = 'connection';
		self.op.refreshinfo();

		var dom = el[0];
		var parent = el.parent()[0];

		parent.removeChild(dom);
		parent.appendChild(dom);
		e.preventDefault();

	});

});

EXTENSION('flow:commands', function(self, config, cls) {

	var zoom = 1;
	var animationcount = 0;

	var disconnect = function() {
		var arr = self.el.lines.find('.connection-selected');
		for (var i = 0; i < arr.length; i++) {
			var obj = self.helpers.parseconnection($(arr[i]));
			obj && self.op.disconnect(obj.fromid, obj.toid, obj.fromindex, obj.toindex);
		}
	};

	var remove = function() {
		var arr = self.find('.component-selected,.group-selected');
		for (var i = 0; i < arr.length; i++)
			self.op.remove($(arr[i]).attrd('id'));
	};

	self.command('flow.check', function() {
		for (var key in self.cache) {
			var instance = self.cache[key];
			var width = instance.el.width();
			if (instance.width !== width) {
				instance.width = width;
				if (self.preventreposition) {
					if (self.preventreposition === 1)
						self.preventreposition = 2;
				} else
					self.op.reposition();
				break;
			}
		}
	});

	self.command('flow.refresh', function() {
		if (self.preventreposition) {
			if (self.preventreposition < 3)
				self.preventreposition = 3;
		} else {
			self.op.reposition();
			self.refresh_groups();
		}
	});

	var flow_find_groups = function(id) {
		var item = self.groups.findItem('id', id);
		if (item) {
			var pos = self.el.groups.find('> div[data-id="{0}"]'.format(id)).offset();
			var scroll = self.closest('.ui-scrollbar-area');
			if (scroll) {
				var offset = self.element.offset();
				scroll.animate({ scrollLeft: pos.left - 200 - offset.left, scrollTop: pos.top - 150 - offset.top }, 300);
				self.op.unselect();
				self.op.select(id);
			}
		}
	};

	var flow_find_component = function(id) {
		var com = self.cache[id];
		if (com) {
			var pos = com.el.offset();
			var scroll = self.closest('.ui-scrollbar-area');
			if (scroll) {
				var offset = self.element.offset();
				scroll.animate({ scrollLeft: pos.left - 200 - offset.left, scrollTop: pos.top - 150 - offset.top }, 300);
				self.op.unselect();
				self.op.select(id);
			}
		}
	};

	self.command('flow.groups.find', flow_find_groups);
	self.command('flow.components.find', flow_find_component);

	self.command('flow.find', function(id) {
		if (self.groups.findItem('id', id))
			flow_find_groups(id);
		else
			flow_find_component(id);
	});

	self.command('flow.selected.disconnect', function() {
		disconnect();
		self.op.unselect();
	});

	self.command('flow.selected.remove', function() {
		remove();
		self.op.unselect();
	});

	function translate_path(count, path, reverse) {

		if (reverse)
			count = 100 - count;

		var l = path.getTotalLength();
		var t = (l / 100) * count;
		var p = path.getPointAtLength(t);
		return 'translate(' + (p.x >> 0) + ',' + (p.y >> 0) + ')';
	}

	self.command('flow.traffic', function(id, opt) {

		var color = '';
		var index = id.lastIndexOf('#');
		if (index !== -1) {
			color = id.substring(index);
			id = id.substring(0, index);
		}

		if (!opt)
			opt = { speed: 3, count: 1, delay: 50 };

		if (!opt.limit)
			opt.limit = 20;

		if (id.charAt(0) === '_') {
			// reverse
			opt.reverse = true;
			id = id.substring(1);
		}

		var path = self.el.lines.find('.from__' + id);
		var dark = document.body.classList.contains('ui-dark');

		if (opt.count > opt.limit)
			opt.count = opt.limit;

		if (!path.length || (self.animations[id] > opt.limit) || document.hidden)
			return;

		var add = function(next) {
			for (var i = 0; i < path.length; i++) {

				if ((config.animationlimit && animationcount >= config.animationlimit))
					break;

				var line = path[i];
				var linecolor = line.getAttribute('data-color') || '';

				if (linecolor && color && linecolor !== color)
					continue;

				if (line.$flowanimcount > config.animationlimitconnection)
					break;

				var el = self.el.anim.asvg('circle').aclass('traffic').attr('r', opt.radius || config.animationradius);
				var dom = el[0];
				el.attr({ stroke: color || (dark ? '#FFF' : '#000') });

				animationcount++;

				if (line.$flowanimcount)
					line.$flowanimcount++;
				else
					line.$flowanimcount = 1;

				dom.$path = line;
				dom.$count = 0;
				dom.$token = self.animations_token;

				if (self.animations[id])
					self.animations[id]++;
				else
					self.animations[id] = 1;

				(function(self, el, dom, opt, line2) {

					var fn = function() {

						dom.$count += (opt.speed || 3);

						if (document.hidden || !dom.$path || !dom.$path.parentNode || dom.$token !== self.animations_token) {
							el.remove();
							el = null;
							if (self.animations[id])
								self.animations[id]--;
							if (animationcount > 0)
								animationcount--;
							if (line2.$flowanimcount > 0)
								line2.$flowanimcount--;
							return;
						}

						if (dom.$count >= 100) {
							if (animationcount > 0)
								animationcount--;
							if (self.animations[id] > 0)
								self.animations[id]--;
							if (line2.$flowanimcount > 0)
								line2.$flowanimcount--;
							el.remove();
							el = null;
							return;
						} else
							el.attr('transform', translate_path(dom.$count, dom.$path, opt.reverse));

						requestAnimationFrame(fn);
					};
					requestAnimationFrame(fn);
				})(self, el, dom, opt, line);
			}

			next && setTimeout(next, opt.delay || 50);
		};

		if (!opt.count || opt.count === 1) {
			add();
			return;
		}

		var arr = [];
		for (var i = 0; i < opt.count; i++)
			arr.push(add);

		arr.wait(function(fn, next) {
			fn(next);
		});

	});

	self.command('flow.selected.clear', function() {
		self.groupid = GUID(5);
		disconnect();
		remove();
		self.op.unselect();
		self.groupid = '';
	});

	self.command('flow.clean', function() {
		self.op.clean();
	});

	self.command('flow.components.add', function(com) {
		if (!com.id)
			com.id = 'f' + Date.now().toString(36);
		var data = self.get();
		data[com.id] = com;
		self.op.modify(com, 'newbie');
		self.op.modified();
		self.refresh(true);
		self.op.undo({ type: 'component', id: com.id });
	});

	self.command('flow.groups.add', function(item) {
		if (!item.id)
			item.id = 'g' + Date.now().toString(36);
		var data = self.get();
		if (data.groups)
			data.groups.push(item);
		else
			data.groups = [item];
		self.op.modified();
		self.refresh(true);
		self.op.undo({ type: 'group', id: item.id });
	});

	self.command('flow.zoom', function(type, value) {

		if (typeof(type) === 'number') {
			zoom = type / 100;
		} else {
			switch (type) {
				case 'in':
					if (value)
						zoom = value / 100;
					else
						zoom += 0.05;
					break;
				case 'out':
					if (value)
						zoom = value / 100;
					else
						zoom -= 0.05;
					break;
				case 'reset':
					zoom = 1;
					break;
			}
		}

		if (zoom >= 0.3 || zoom <= 1.7) {
			self.info.zoom = 100 * zoom;
			self.op.refreshinfo();
			self.element.css('transform', 'scale({0})'.format(zoom));
		}

	});

	self.command('flow.undo', function() {

		var item;
		var prev;
		var is = false;

		while (true) {

			prev = self.undo.pop();

			if (!prev) {
				is && COMPILE();
				return;
			}

			self.op.undo();
			self.op.redo(prev);

			if (prev.type === 'disconnect') {
				var output = self.find('.component[data-id="{0}"]'.format(prev.fromid)).find('.output[data-index="{0}"]'.format(prev.fromindex));
				var input = self.find('.component[data-id="{0}"]'.format(prev.toid)).find('.input[data-index="{0}"]'.format(prev.toindex));
				self.el.connect(output, input, true);
			} else if (prev.type === 'connect') {
				self.op.disconnect(prev.fromid, prev.toid, prev.fromindex, prev.toindex, true);
			} else if (prev.type === 'component' || prev.type === 'group') {
				self.op.remove(prev.id, true);
				is = true;
			} else if (prev.type === 'move') {
				var arr = prev.multiple || [prev];
				for (var i = 0; i < arr.length; i++) {
					var tmp = arr[i];
					if (tmp.type === 'group') {
						item = (self.get().groups || EMPTYARRAY).findItem('id', tmp.id);
						if (item) {
							var el = self.find('.' + cls + '-group[data-id="{0}"]'.format(tmp.id)).css({ left: tmp.x, top: tmp.y, width: tmp.width, height: tmp.height });
							item.x = tmp.x;
							item.y = tmp.y;
							item.width = tmp.width;
							item.height = tmp.height;
							item.onmove && item.onmove(el, item);
							config.onmove && self.EXEC(config.onmove, el, item, 'group');
						}
					} else {
						self.find('.component[data-id="{0}"]'.format(tmp.id)).css({ left: tmp.x, top: tmp.y });
						item = self.get()[tmp.id];
						item.x = tmp.x;
						item.y = tmp.y;
						item.onmove && item.onmove(item.element, item);
						config.onmove && self.EXEC(config.onmove, item.element, item, 'component');
					}
				}
				self.op.reposition();
				is = true;
			} else if (prev.type === 'remove') {
				var com = prev.instance;
				com.id = prev.id;
				var data = self.get();

				if (prev.place === 'group') {
					if (!data.groups)
						data.groups = {};
					data.groups.push(com);
				} else
					data[com.id] = com;

				self.op.modified();
				self.update('refresh');
				is = true;
			}

			if (!prev.groupid || (!self.undo.length || prev.groupid !== self.undo[self.undo.length - 1].groupid)) {
				is && COMPILE();
				return;
			}
		}

	});

	self.command('flow.redo', function() {

		var next;
		var item;
		var is = false;

		while (true) {

			next = self.redo.pop();

			if (next == null) {
				is && COMPILE();
				return;
			}

			self.op.redo();
			self.op.undo(next);
			self.op.refreshinfo();

			if (next.type === 'disconnect') {
				self.op.disconnect(next.fromid, next.toid, next.fromindex, next.toindex, true);
			} else if (next.type === 'connect') {
				var output = self.find('.component[data-id="{0}"]'.format(next.fromid)).find('.output[data-index="{0}"]'.format(next.fromindex));
				var input = self.find('.component[data-id="{0}"]'.format(next.toid)).find('.input[data-index="{0}"]'.format(next.toindex));
				self.el.connect(output, input, true);
			} else if (next.type === 'component') {
				var com = next.instance;
				com.id = next.id;
				var data = self.get();
				data[com.id] = com;
				self.op.modified();
				self.refresh(true);
				is = true;
			} else if (next.type === 'group') {
				var com = next.instance;
				com.id = next.id;
				var data = self.get().groups;
				data.push(com);
				self.op.modified();
				self.refresh(true);
				is = true;
			} else if (next.type === 'move') {
				var arr = next.multiple || [next];
				for (var i = 0; i < arr.length; i++) {
					var tmp = arr[i];
					if (tmp.type === 'group') {
						item = (self.get().groups || EMPTYARRAY).findItem('id', tmp.id);
						if (item) {
							var el = self.find('.' + cls + '-group[data-id="{0}"]'.format(tmp.id)).css({ left: tmp.newx, top: tmp.newy, width: tmp.newwidth, height: tmp.newheight });
							item.x = tmp.newx;
							item.y = tmp.newy;
							item.width = tmp.newwidth;
							item.height = tmp.newheight;
							item.onmove && item.onmove(el, item);
							config.onmove && self.EXEC(config.onmove, el, item, 'group');
						}
					} else {
						self.find('.component[data-id="{0}"]'.format(tmp.id)).css({ left: tmp.newx, top: tmp.newy });
						item = self.get()[tmp.id];
						item.x = tmp.newx;
						item.y = tmp.newy;
						item.onmove && item.onmove(item.element, item);
						config.onmove && self.EXEC(config.onmove, item.element, item, 'component');
					}
				}
				self.op.reposition();
				is = true;
			} else if (next.type === 'remove') {
				self.op.remove(next.id, true);
				is = true;
			}

			if (!next.groupid || (!self.redo.length || next.groupid !== self.redo[self.redo.length - 1].groupid)) {
				is && COMPILE();
				return;
			}
		}
	});

	// Resets editor
	self.command('flow.reset', function() {
		self.refresh();
		self.info.selected = null;
		self.info.type = '';
		self.op.refreshinfo();
		self.undo = [];
		self.redo = [];
		self.op.undo();
		self.op.redo();
	});

});

EXTENSION('flow:groups', function(self, config, cls) {

	var events = {};
	var drag = {};

	events.bind = function() {
		if (!events.is) {
			self.op.isoutcache();
			events.is = true;
			self.element.on('mousemove touchmove', events.move).on('mouseup touchend', events.up);
			self.element.on('mouseleave', events.leave);
		}
	};

	events.unbind = function() {
		if (events.is) {
			events.is = false;
			self.element.off('mousemove touchmove', events.move).off('mouseup touchend', events.up);
			self.element.off('mouseleave', events.leave);
		}
	};

	events.leave = function(e) {
		events.up(e);
	};

	events.move = function(e) {

		var evt = e.type === 'touchmove' ? e.touches[0] : e;

		var x = (evt.pageX + drag.plusX) - drag.pageX;
		var y = (evt.pageY + drag.plusY) - drag.pageY;

		if (drag.type === 'move') {

			if (self.op.isout(evt)) {
				events.up(evt);
				return;
			}

			drag.element.css({ left: self.op.zoom(drag.pos.left + x), top: self.op.zoom(drag.pos.top + y) });

			if (drag.selected.length) {
				for (var i = 0; i < drag.selected.length; i++) {
					var instance = drag.selected[i];
					instance.node.css({ left: self.op.zoom(instance.pos.left + x), top: self.op.zoom(instance.pos.top + y) });
				}
				self.components_reposition(drag);
			}

		} else if (drag.type === 'resize') {

			var obj = {};
			var w;
			var h;

			switch (drag.dir) {

				case 'tl':

					w = drag.width - self.op.zoom(x);
					h = drag.height - self.op.zoom(y);

					if (w < drag.min || h < drag.min)
						break;

					obj.left = self.op.zoom(drag.pos.left + x);
					obj.top = self.op.zoom(drag.pos.top + y);
					obj.width = w;
					obj.height = h;
					drag.element.css(obj);
					break;

				case 'tr':

					w = drag.width + self.op.zoom(x);
					h = drag.height - self.op.zoom(y);

					if (w < drag.min || h < drag.min)
						break;

					obj.top = self.op.zoom(drag.pos.top + y);
					obj.width = w;
					obj.height = h;
					drag.element.css(obj);
					break;

				case 'bl':

					w = drag.width + self.op.zoom(x);
					h = drag.height + self.op.zoom(y);

					if (w < drag.min || h < drag.min)
						break;

					obj.left = self.op.zoom(drag.pos.left + x);
					obj.width = drag.width - self.op.zoom(x);
					obj.height = h;
					drag.element.css(obj);
					break;

				case 'br':

					w = drag.width + self.op.zoom(x);
					h = drag.height + self.op.zoom(y);

					if (w < drag.min || h < drag.min)
						break;

					obj.width = w;
					obj.height = h;
					drag.element.css(obj);
					break;
			}

		}

		if (!drag.is)
			drag.is = true;

	};

	events.up = function(e) {
		var evt = e.type === 'touchend' ? e.touches[0] : e;
		if (drag.is) {
			var id = drag.element.attrd('id');
			var group = self.groups.findItem('id', id);
			var pos = drag.element.position();
			var w = drag.element.width();
			var h = drag.element.height();
			var history = { id: id, x: group.x, y: group.y, newx: pos.left, newy: pos.top, width: group.width, height: group.height, newwidth: w, newheight: h, type: 'group' };

			/*
			if (config.snapping) {
				pos.left = self.op.zoom(pos.left);
				pos.top = self.op.zoom(pos.top);
				pos.left += pos.left % self.op.zoom_reverse(config.snapping);
				pos.top += pos.top % self.op.zoom_reverse(config.snapping);
				drag.element.css(pos);
			}*/

			if (drag.selected.length) {
				self.components_moved(evt, drag, true);
				self.undo.last().multiple.push(history);
			} else
				self.op.undo({ type: 'move', multiple: [history] });

			group.x = self.op.zoom(pos.left);
			group.y = self.op.zoom(pos.top);
			group.width = w;
			group.height = h;
			group.onmove && group.onmove(drag.element, group);
			config.onmove && self.EXEC(config.onmove, drag.element, group, 'group');
		}

		events.unbind();

		var tmp = self.preventreposition;
		delete self.preventreposition;
		switch (tmp) {
			case 2:
			case 3:
				self.op.reposition();
				break;
		}
	};

	self.event('dblclick',  '.' + cls + '-group', function(e) {
		var item = (self.get().groups || EMPTYARRAY).findItem('id', $(this).attrd('id'));
		item && config.dblclickgroup && self.SEEX(config.dblclickgroup, item, e);
	});

	self.event('mousedown touchstart', '.' + cls + '-group', function(e) {

		var evt = e.type === 'touchstart' ? e.touches[0] : e;

		self.preventreposition = true;
		self.op.unselect();
		e.preventDefault();

		var parent = self.op.position();
		var plusX = (parent.scrollLeft || 0) + parent.left;
		var plusY = (parent.scrollTop || 0) + parent.top;

		events.bind();
		drag.element = $(this);
		drag.id = drag.element.attrd('id');

		drag.element.aclass('group-selected');
		self.info.selected = (self.get().groups || EMPTYARRAY).findItem('id', drag.id);
		self.info.type = 'group';
		self.op.refreshinfo();

		drag.css = {};
		drag.is = false;
		drag.plusX = plusX;
		drag.plusY = plusY;
		drag.pageX = evt.pageX + plusX;
		drag.pageY = evt.pageY + plusY;
		drag.type = '';
		drag.offset = self.getOffset();
		drag.zoom = self.info.zoom / 100;
		drag.zoomoffset = ((100 - self.info.zoom) / 10) + (self.info.zoom > 100 ? 1 : -1);
		drag.min = 100;
		drag.pos = drag.element.position();
		drag.ismeta = (evt.metaKey || evt.ctrlKey || evt.shiftKey);
		drag.selected = [];

		var rect1 = { x: self.op.zoom(drag.pos.left), y: self.op.zoom(drag.pos.top), width: drag.element.width(), height: drag.element.height() };

		if (evt.target.tagName === 'SPAN') {

			if (self.info.selected.actions && self.info.selected.actions.resize === false)
				return;

			drag.type = 'resize';
			drag.width = rect1.width;
			drag.height = rect1.height;
			drag.dir = evt.target.getAttribute('class').replace(cls + '-resize-', '');
			return;
		}

		if (self.info.selected.actions && self.info.selected.actions.move === false)
			return;

		drag.type = 'move';

		if (!drag.ismeta) {
			for (var key in self.cache) {
				var item = self.cache[key];
				var w = item.el.width();
				var h = item.el.height();
				var node = item.el;
				var pos = node.position();
				var rect2 = { x: self.op.zoom(pos.left), y: self.op.zoom(pos.top), width: w, height: h };
				if (rect1.x < rect2.x + rect2.width && rect1.x + rect1.width > rect2.x && rect1.y < rect2.y + rect2.height && rect1.y + rect1.height > rect2.y) {
					if (!item.actions || item.actions.move !== false)
						drag.selected.push({ id: node.attrd('id'), node: node, pos: pos, output: node.find('.output'), input: node.find('.input') });
				}
			}
		}
	});

	self.refresh_groups = function() {

		self.groups = self.get().groups || EMPTYARRAY;
		var groups = self.el.groups.find('> div');
		var db = {};

		for (var i = 0; i < groups.length; i++) {
			var tmp = $(groups[i]);
			db[tmp.attrd('id')] = tmp;
		}

		for (var i = 0; i < self.groups.length; i++) {
			var g = self.groups[i];
			var css = [];

			if (!g.id)
				g.id = 'g' + GUID(10);

			css.push('left:{0}px'.format(g.x));
			css.push('top:{0}px'.format(g.y));
			css.push('width:{0}px'.format(g.width));
			css.push('height:{0}px'.format(g.height));
			g.background && css.push('background:{0}'.format(g.background));
			g.color && css.push('color:{0}'.format(g.color));
			g.border && css.push('border-color:{0}'.format(g.border));

			if (db[g.id]) {
				db[g.id].attr('style', css.join(';')).find('label').text(g.name);
				delete db[g.id];
			} else
				self.el.groups.append('<div class="{0}-group{4}" style="{1}" data-id="{3}"><div><span class="{0}-resize-tl"></span><span class="{0}-resize-tr"></span><span class="{0}-resize-bl"></span><span class="{0}-resize-br"></span><label>{2}</label></div></div>'.format(cls, css.join(';'), g.name.encode(), g.id, g.tab ? (' tab-' + g.tab) : ''));
		}

		for (var key in db)
			db[key].remove();

	};

});

COMPONENT('icons', 'search:Search;scrollbarshadow:0', function(self, config, cls) {

	var cls2 = '.' + cls;
	var template = '<span data-search="{0}"><i class="{1}"></i></span>';
	var events = {};
	var container;
	var is = false;
	var cachekey;

	self.singleton();
	self.readonly();
	self.blind();
	self.nocompile();

	self.redraw = function() {
		self.html('<div class="{0}"><div class="{0}-header"><div class="{0}-search"><span><i class="ti ti-search clearsearch"></i></span><div><input type="text" placeholder="{1}" class="{0}-search-input"></div></div></div><div class="{0}-scrollbar"><div class="{0}-content"></div></div></div>'.format(cls, config.search));
		container = self.find(cls2 + '-content');
		self.scrollbar = SCROLLBAR(self.find(cls2 + '-scrollbar'), { visibleY: 1, shadow: config.scrollbarshadow });
	};

	self.rendericons = function(empty) {

		var key = empty ? '1' : '0';
		if (cachekey === key)
			return;

		cachekey = key;
		var builder = [];

		empty && builder.push(template.format('', ''));

		AJAX('GET https://cdn.componentator.com/icons-db.html', function(response) {
			response = response.split(',');
			for (var icon of response)
				builder.push(template.format(icon.toSearch(), 'ti ti-' + icon));
			self.find(cls2 + '-content').html(builder.join(''));
		});
	};

	self.search = function(value) {

		var search = self.find('.clearsearch');
		search.rclass2('ti-');

		if (!value.length) {
			search.aclass('ti-search');
			container.find('.hidden').rclass('hidden');
			return;
		}

		value = value.toSearch();
		search.aclass('ti-times');
		self.scrollbar.scrollTop(0);
		var icons = container.find('span');
		for (var i = 0; i < icons.length; i++) {
			var el = $(icons[i]);
			el.tclass('hidden', el.attrd('search').indexOf(value) === -1);
		}
	};

	self.make = function() {

		self.aclass(cls + '-container hidden');

		self.event('keydown', 'input', function() {
			var t = this;
			setTimeout2(self.ID, function() {
				self.search(t.value);
			}, 300);
		});

		self.event('click', '.ti-times', function() {
			self.find('input').val('');
			self.search('');
		});

		self.event('click', cls2 + '-content span', function() {
			self.opt.scope && M.scope(self.opt.scope);
			self.opt.callback && self.opt.callback($(this).find('i').attr('class'));
			self.hide();
		});

		events.click = function(e) {
			var el = e.target;
			var parent = self.dom;
			do {
				if (el == parent)
					return;
				el = el.parentNode;
			} while (el);
			self.hide();
		};

		self.on('reflow + resize + resize2', self.hide);
		self.on('scroll', function(e) {
			if (e && e[0] !== self.scrollbar.area[0])
				self.hide();
		});

		self.redraw();
	};

	self.bindevents = function() {
		if (!events.is) {
			events.is = true;
			$(document).on('click', events.click);
		}
	};

	self.unbindevents = function() {
		if (events.is) {
			events.is = false;
			$(document).off('click', events.click);
		}
	};

	self.show = function(opt) {

		var tmp = opt.element ? opt.element instanceof jQuery ? opt.element[0] : opt.element.element ? opt.element.dom : opt.element : null;

		if (is && tmp && self.target === tmp) {
			self.hide();
			return;
		}

		var search = self.find(cls2 + '-search-input');
		search.val('');
		self.find('.clearsearch').rclass2('ti-').aclass('ti-search');

		if (M.scope)
			opt.scope = M.scope();

		self.target = tmp;
		self.opt = opt;
		var css = {};

		if (is) {
			css.left = 0;
			css.top = 0;
			self.css(css);
		} else
			self.rclass('hidden');

		var target = $(opt.element);
		var w = self.element.width();
		var offset = target.offset();

		if (opt.element) {
			switch (opt.align) {
				case 'center':
					css.left = Math.ceil((offset.left - w / 2) + (target.innerWidth() / 2));
					break;
				case 'right':
					css.left = (offset.left - w) + target.innerWidth();
					break;
				default:
					css.left = offset.left;
					break;
			}

			css.top = opt.position === 'bottom' ? (offset.top - self.element.height() - 10) : (offset.top + target.innerHeight() + 10);

		} else {
			css.left = opt.x;
			css.top = opt.y;
		}

		if (opt.offsetX)
			css.left += opt.offsetX;

		if (opt.offsetY)
			css.top += opt.offsetY;

		is = true;
		self.rendericons(opt.empty);
		self.css(css);
		if (opt.scrolltop == null || opt.scrolltop)
			self.scrollbar.scrollTop(0);
		search.focus();
		setTimeout(self.bindevents, 50);
		clearTimeout2(self.ID);
	};

	self.clear = function() {
		container.empty();
		cachekey = null;
	};

	self.hide = function() {
		is = false;
		self.target = null;
		self.opt = null;
		self.unbindevents();
		self.aclass('hidden');
		container.find('.hidden').rclass('hidden');
		setTimeout2(self.ID, self.clear, 1000 * 10);
	};
});

COMPONENT('importer', function(self, config) {

	var init = false;
	var clid = null;
	var pending = false;
	var content = '';

	var replace = function(value) {
		return self.scope ? self.makepath(value) : value.replace(/\?/g, config.path || config.if);
	};

	var replace2 = function(value) {
		var path = config.path || config.if;
		return value ? value.replace(/~PATH~/g, path).replace(/~ID~/g, config.id || '').replace('PLUGIN(function(', 'PLUGIN(\'{0}\', function('.format(path)) : value;
	};

	self.readonly();

	self.make = function() {
		var scr = self.find('script');
		content = scr.length ? scr.html() : '';
	};

	self.reload = function(recompile) {
		config.reload && EXEC(replace(config.reload));
		recompile && COMPILE();
		setTimeout(function() {
			pending = false;
			init = true;
		}, 1000);
	};

	self.setter = function(value) {

		if (pending)
			return;

		if (config.if !== value) {
			if (config.cleaner && init && !clid)
				clid = setTimeout(self.clean, config.cleaner * 60000);
			return;
		}

		pending = true;

		if (clid) {
			clearTimeout(clid);
			clid = null;
		}

		if (init) {
			self.reload();
			return;
		}

		if (content) {
			self.html(replace2(content));
			setTimeout(self.reload, 50, true);
		} else
			self.import(config.url, self.reload, true, replace2);
	};

	self.clean = function() {
		config.clean && EXEC(replace(config.clean));
		setTimeout(function() {
			self.empty();
			init = false;
			clid = null;
		}, 1000);
	};
});

COMPONENT('input', 'maxlength:200;innerlabel:0;tabindex:0;dirkey:name;dirvalue:id;increment:1;format:auto;autovalue:name;direxclude:false;checkicon:ti ti-check;forcevalidation:1;searchalign:1;height:80;tabs:1;after:\\:', function(self, config, cls) {

	var cls2 = '.' + cls;
	var input, placeholder, dirsource, binded, customvalidator, mask, rawvalue, isdirvisible = false, nobindcamouflage = false, focused = false;

	self.nocompile();

	self.init = function() {
		Thelpers.ui_input_icon = function(val) {
			return val.charAt(0) === '!' || val.indexOf(' ') !== -1 ? ('<span class="ui-input-icon-custom">' + (val.charAt(0) === '!' ? val.substring(1) : ('<i class="' + val) + '"></i>') + '</span>') : ('<i class="ti ti-' + val + '"></i>');
		};
		W.ui_input_template = Tangular.compile(('{{ if label }}<div class="{0}-label">{{ if icon }}<i class="{{ icon }}"></i>{{ fi }}{{ label | raw }}{{ after | raw }}</div>{{ fi }}<div class="{0}-control{{ if licon }} {0}-licon{{ fi }}{{ if ricon || (type === \'number\' && increment) }} {0}-ricon{{ fi }}">{{ if ricon || (type === \'number\' && increment) }}<div class="{0}-icon-right{{ if type === \'number\' && increment && !ricon }} {0}-increment{{ else if riconclick || type === \'date\' || type === \'time\' || (type === \'search\' && searchalign === 1) || type === \'password\' }} {0}-click{{ fi }}">{{ if type === \'number\' && !ricon }}<i class="ti ti-caret-up"></i><i class="ti ti-caret-down"></i>{{ else }}{{ ricon | ui_input_icon }}{{ fi }}</div>{{ fi }}{{ if licon }}<div class="{0}-icon-left{{ if liconclick || (type === \'search\' && searchalign !== 1) }} {0}-click{{ fi }}">{{ licon | ui_input_icon }}</div>{{ fi }}<div class="{0}-input{{ if align === 1 || align === \'center\' }} center{{ else if align === 2 || align === \'right\' }} right{{ fi }}">{{ if placeholder }}<div class="{0}-placeholder">{{ placeholder }}</div>{{ fi }}{{ if dirsource || type === \'icon\' || type === \'emoji\' || type === \'color\' }}<div class="{0}-value" tabindex="{{ tabindex }}"></div>{{ else }}{{ if type === \'multiline\' }}<textarea data-jc-bind="" style="height:{{ height }}px" tabindex="{{ tabindex }}"></textarea>{{ else }}<input type="{{ if type === \'password\' }}password{{ else }}text{{ fi }}" tabindex="{{ tabindex }}" {{ if autofill }} autocomplete="on" name="{{ NAME }}"{{ else }} name="input' + Date.now() + '" autocomplete="new-password"{{ fi }} data-jc-bind=""{{ if maxlength > 0}} maxlength="{{ maxlength }}"{{ fi }}{{ if autofocus }} autofocus{{ fi }} />{{ fi }}{{ fi }}</div></div>{{ if error }}<div class="{0}-error hidden"><i class="ti ti-warning"></i> {{ error }}</div>{{ fi }}').format(cls));
	};

	self.make = function() {

		if (config.innerlabel && config.after)
			config.after = '';

		if (!config.label)
			config.label = self.html();

		if (isMOBILE && config.autofocus)
			config.autofocus = false;

		if (config.placeholder == 0)
			config.placeholder = '0';

		if (config.autofill) {
			if (typeof(config.autofill) === 'string') {
				config.NAME = config.autofill;
			} else {
				var index = self.path.lastIndexOf('.');
				config.NAME = index === -1 ? self.path : self.path.substring(index + 1);
			}
		}

		self.aclass(cls + ' invisible');
		self.rclass('invisible', 100);
		self.redraw();

		self.event('input change', function() {
			if (nobindcamouflage)
				nobindcamouflage = false;
			else
				self.check();
		});

		self.event('click', cls2 + '-checkbox', function() {

			if (config.disabled) {
				$(this).blur();
				return;
			}

			self.change(true);
			var val = self.get();

			if (val === 1)
				val = 0;
			else if (val === 0)
				val = 1;
			else if (val === true)
				val = false;
			else
				val = true;
			self.set(val, 2);
		});

		self.event('focus', 'input,textarea,' + cls2 + '-value', function() {

			if (config.disabled) {
				$(this).blur();
				return;
			}

			focused = true;
			self.camouflage(false);
			self.aclass(cls + '-focused');
			config.autocomplete && self.EXEC(config.autocomplete, self, input.parent());
			if (config.autosource) {
				var opt = {};
				opt.element = self.element;
				opt.search = GET(self.makepath(config.autosource));
				opt.callback = function(value) {
					var val = typeof(value) === 'string' ? value : value[config.autovalue];
					if (config.autoexec) {
						self.EXEC(config.autoexec, value, function(val) {
							self.set(val, 2);
							self.change();
							self.bindvalue();
						});
					} else {
						self.set(val, 2);
						self.change();
						self.bindvalue();
					}
				};
				SETTER('autocomplete', 'show', opt);
			} else if (config.mask) {
				setTimeout(function(input) {
					input.selectionStart = input.selectionEnd = 0;
				}, 50, this);
			} else if (config.dirsource && (config.autofocus != false && config.autofocus != 0)) {
				if (!isdirvisible)
					self.find(cls2 + '-control').trigger('click');
			} else if (config.type === 'date' || config.type === 'time') {
				setTimeout(function() {
					self.element.find(cls2 + '-icon-right').trigger('click');
				}, 300);
			}
		});

		self.event('paste', 'input,textarea', function(e) {

			if (config.mask) {
				var val = (e.originalEvent.clipboardData || window.clipboardData).getData('text');
				self.set(val.replace(/\s|\t/g, ''));
				e.preventDefault();
			}

			self.check();
		});

		self.event('keydown', 'input,textarea', function(e) {

			var t = this;
			var code = e.which;

			if (t.readOnly || config.disabled) {
				// TAB
				if (e.keyCode !== 9) {
					if (config.dirsource) {
						self.find(cls2 + '-control').trigger('click');
						return;
					}
					e.preventDefault();
					e.stopPropagation();
				}
				return;
			}

			if (config.tabs && t.tagName === 'TEXTAREA' && e.keyCode === 9) {
				t.setRangeText('\t', t.selectionStart, t.selectionEnd, 'end');
				self.check();
				e.preventDefault();
				return;
			}

			if (!config.disabled && config.dirsource && (code === 13 || code > 30)) {
				self.find(cls2 + '-control').trigger('click');
				return;
			}

			if (config.mask) {

				if (e.metaKey) {
					if (code === 8 || code === 127) {
						e.preventDefault();
						e.stopPropagation();
					}
					return;
				}

				if (code === 32) {
					e.preventDefault();
					e.stopPropagation();
					return;
				}

				var beg = e.target.selectionStart;
				var end = e.target.selectionEnd;
				var val = t.value;
				var c;

				if (code === 8 || code === 127) {

					if (beg === end) {
						c = config.mask.substring(beg - 1, beg);
						t.value = val.substring(0, beg - 1) + c + val.substring(beg);
						self.curpos(beg - 1);
					} else {
						for (var i = beg; i <= end; i++) {
							c = config.mask.substring(i - 1, i);
							val = val.substring(0, i - 1) + c + val.substring(i);
						}
						t.value = val;
						self.curpos(beg);
					}

					e.preventDefault();
					return;
				}

				if (code > 40) {

					var cur = String.fromCharCode(code);

					if (mask && mask[beg]) {
						if (!mask[beg].test(cur)) {
							e.preventDefault();
							return;
						}
					}

					c = config.mask.charCodeAt(beg);
					if (c !== 95) {
						beg++;
						while (true) {
							c = config.mask.charCodeAt(beg);
							if (c === 95 || isNaN(c))
								break;
							else
								beg++;
						}
					}

					if (c === 95) {

						val = val.substring(0, beg) + cur + val.substring(beg + 1);
						t.value = val;
						beg++;

						while (beg < config.mask.length) {
							c = config.mask.charCodeAt(beg);
							if (c === 95)
								break;
							else
								beg++;
						}

						self.curpos(beg);
					} else
						self.curpos(beg + 1);

					e.preventDefault();
					e.stopPropagation();
				}
			}

		});

		self.event('blur', 'input,textarea,' + cls2 + '-value', function() {
			focused = false;
			self.camouflage(true);
			self.rclass(cls + '-focused');
		});

		self.event('click', cls2 + '-control', function() {

			if (config.disabled || isdirvisible)
				return;

			if (config.type === 'icon') {
				opt = {};
				opt.element = self.element;
				opt.value = self.get();
				opt.empty = true;
				opt.callback = function(val) {
					self.change(true);
					self.set(val, 2);
					self.check();
					rawvalue[0].focus();
				};
				SETTER((self.caniuse('icons') ? 'icons' : 'faicons') + '/show', opt);
				return;
			} else if (config.type === 'color') {
				opt = {};
				opt.element = self.element;
				opt.value = self.get();
				opt.empty = true;
				opt.callback = function(al) {
					self.change(true);
					self.set(al, 2);
					self.check();
					rawvalue[0].focus();
				};
				SETTER('colorpicker/show', opt);
				return;
			} else if (config.type === 'emoji') {
				opt = {};
				opt.element = self.element;
				opt.value = self.get();
				opt.empty = true;
				opt.callback = function(al) {
					self.change(true);
					self.set(al, 2);
					self.check();
					rawvalue[0].focus();
				};
				SETTER('emoji/show', opt);
				return;
			}

			if (!config.dirsource)
				return;

			isdirvisible = true;
			setTimeout(function() {
				isdirvisible = false;
			}, 500);

			var opt = {};
			opt.element = self.find(cls2 + '-control');
			opt.items = dirsource || GET(self.makepath(config.dirsource));
			opt.offsetY = -1 + (config.diroffsety || 0);
			opt.offsetX = 0 + (config.diroffsetx || 0);
			opt.placeholder = config.dirplaceholder;
			opt.render = config.dirrender ? GET(self.makepath(config.dirrender)) : null;
			opt.custom = !!config.dircustom;
			opt.offsetWidth = 2;
			opt.minwidth = config.dirminwidth || 200;
			opt.maxwidth = config.dirmaxwidth;
			opt.key = config.dirkey || config.key;
			opt.empty = config.dirempty;
			opt.checkbox = !!config.multiple;

			var val = self.get();

			if (config.multiple) {
				for (var i = 0; i < opt.items.length; i++) {
					var item = opt.items[i];
					if (val instanceof Array) {
						item.selectedts = val.indexOf(item[config.dirvalue || config.value]);
						item.selected = item.selectedts !== -1;
					} else
						item.selected = false;
				}
			} else
				opt.selected = val;

			if (config.dirraw)
				opt.raw = true;

			if (config.dirsearch != null)
				opt.search = config.dirsearch;

			if (dirsource && config.direxclude == false && !config.multiple) {
				for (var i = 0; i < dirsource.length; i++) {
					var item = dirsource[i];
					if (item)
						item.selected = typeof(item) === 'object' && item[config.dirvalue] === val;
				}
			} else if (config.direxclude) {
				opt.exclude = function(item) {
					return item ? item[config.dirvalue] === val : false;
				};
			}

			opt.callback = function(item, el, custom) {

				// empty
				if (item == null || (config.multiple && !item.length)) {
					rawvalue.html('');
					self.set(config.multiple ? [] : null, 2);
					self.change();
					self.check();
					return;
				}

				if (config.multiple) {

					var arr = [];

					for (var i = 0; i < item.length; i++) {
						var m = item[i];
						arr.push(m[config.dirvalue || config.value]);
					}

					self.set(arr, 2);
					self.change(true);
					// self.bindvalue();
					return;
				}

				var val = custom || typeof(item) === 'string' ? item : item[config.dirvalue || config.value];
				if (custom && typeof(config.dircustom) === 'string') {
					var fn = GET(self.makepath(config.dircustom));
					fn(val, function(val) {
						self.set(val, 2);
						self.change(true);
						self.bindvalue();
					});
				} else if (custom) {
					if (val) {
						self.set(val, 2);
						self.change(true);
						if (dirsource)
							self.bindvalue();
						else
							input.val(val);
					}
				} else {
					self.set(val, 2);
					self.change(true);
					if (dirsource)
						self.bindvalue();
					else
						input.val(val);
				}

				rawvalue[0].focus();
			};

			SETTER('directory/show', opt);
		});

		self.event('click', cls2 + '-placeholder,' + cls2 + '-label', function(e) {
			if (!config.disabled) {
				if (config.dirsource) {
					e.preventDefault();
					e.stopPropagation();
					self.find(cls2 + '-control').trigger('click');
				} else if (!config.camouflage || $(e.target).hclass(cls + '-placeholder')) {
					if (input.length) {
						input[0].focus();
					} else
						rawvalue[0].focus();
				}
			}
		});

		self.event('click', cls2 + '-icon-left,' + cls2 + '-icon-right', function(e) {

			if (config.disabled)
				return;

			var el = $(this);
			var left = el.hclass(cls + '-icon-left');
			var opt;

			if (config.dirsource && left && config.liconclick) {
				e.preventDefault();
				e.stopPropagation();
			}

			if (!left && !config.riconclick) {
				if (config.type === 'date') {
					opt = {};
					opt.element = self.element;
					opt.value = self.get();
					opt.callback = function(val) {
						self.change(true);
						self.set(val);
					};
					SETTER('datepicker/show', opt);
				} else if (config.type === 'time') {
					opt = {};
					opt.element = self.element;
					opt.value = self.get();
					opt.callback = function(val) {
						self.change(true);
						self.set(val);
					};
					SETTER('timepicker/show', opt);
				} else if (config.type === 'search')
					self.set('');
				else if (config.type === 'password')
					self.password();
				else if (config.type === 'number' || config.type === 'number2') {
					var tmp = $(e.target);
					if (tmp.attr('class').indexOf('ti-') !== -1) {
						var n = tmp.hclass('ti-caret-up') ? 1 : -1;
						self.change(true);
						var val = self.preparevalue((self.get() || 0) + (config.increment * n));
						self.set(val, 2);
					}
				}
				return;
			}

			if (left && config.liconclick)
				self.EXEC(config.liconclick, self, el);
			else if (config.riconclick)
				self.EXEC(config.riconclick, self, el);
			else if (left && config.type === 'search')
				self.set('');

		});
	};

	self.camouflage = function(is) {
		if (config.camouflage) {
			if (is) {
				var t = input[0];
				var arr = t.value.split('');
				for (var i = 0; i < arr.length; i++)
					arr[i] = typeof(config.camouflage) === 'string' ? config.camouflage : '•';
				nobindcamouflage = true;
				t.value = arr.join('');
			} else {
				nobindcamouflage = true;
				var val = self.get();
				input[0].value = val == null ? '' : val;
			}
			self.tclass(cls + '-camouflaged', is);
		}
	};

	self.curpos = function(pos) {
		var el = input[0];
		if (el.createTextRange) {
			var range = el.createTextRange();
			range.move('character', pos);
			range.select();
		} else if (el.selectionStart) {
			el.focus();
			el.setSelectionRange(pos, pos);
		}
	};

	self.validate = function(value) {

		if ((!config.required || config.disabled) && !self.forcedvalidation())
			return true;

		if (config.disabled)
			return true;

		if (config.dirsource)
			return !!value;

		if (customvalidator)
			return customvalidator(value);

		if (config.type === 'date')
			return value instanceof Date && !isNaN(value.getTime());

		if (config.type === 'checkbox')
			return value === true || value === 1;

		if (value == null)
			value = '';
		else
			value = value.toString();

		if (config.mask && typeof(value) === 'string' && value.indexOf('_') !== -1)
			return false;

		if (config.minlength && value.length < config.minlength)
			return false;

		switch (config.type) {
			case 'email':
				return value.isEmail();
			case 'phone':
				return value.isPhone();
			case 'url':
				return value.isURL();
			case 'zip':
				return (/^\d{5}(?:[-\s]\d{4})?$/).test(value);
			case 'currency':
			case 'number':
			case 'number2':
				if (config.type === 'number2' && (value == null || value == ''))
					return false;
				value = value.parseFloat();
				if ((config.minvalue != null && value < config.minvalue) || (config.maxvalue != null && value > config.maxvalue))
					return false;
				return config.minvalue == null ? value > 0 : true;
		}

		return value.length > 0;
	};

	self.offset = function() {
		var offset = self.element.offset();
		var control = self.find(cls2 + '-control');
		var width = control.width() + 2;
		return { left: offset.left, top: control.offset().top + control.height(), width: width };
	};

	self.password = function(show) {
		var visible = show == null ? input.attr('type') === 'text' : show;
		input.attr('type', visible ? 'password' : 'text');
		self.find(cls2 + '-icon-right').find('i').tclass(config.ricon, visible).tclass('ti-lock', !visible);
	};

	self.preparevalue = function(value) {
		if (config.type === 'number' && (config.type !== 'number2' || value) && (config.minvalue != null || config.maxvalue != null)) {
			var tmp = typeof(value) === 'string' ? +value.replace(',', '.') : value;

			if (isNaN(tmp))
				tmp = 0;

			if (config.minvalue > tmp)
				value = config.minvalue;
			if (config.maxvalue < tmp)
				value = config.maxvalue;
		}
		return value;
	};

	self.getterin = self.getter;
	self.getter = function(value, realtime, nobind) {

		if (nobindcamouflage)
			return;

		if (config.mask && config.masktidy) {
			var val = [];
			for (var i = 0; i < value.length; i++) {
				if (config.mask.charAt(i) === '_')
					val.push(value.charAt(i));
			}
			value = val.join('');
		}

		self.getterin(self.preparevalue(value), realtime, nobind);
	};

	self.setterin = self.setter;

	self.setter = function(value, path, type) {

		if (config.mask) {
			if (value) {

				if (config.masktidy) {
					var index = 0;
					var val = [];
					for (var i = 0; i < config.mask.length; i++) {
						var c = config.mask.charAt(i);
						val.push(c === '_' ? (value.charAt(index++) || '_') : c);
					}
					value = val.join('');
				}

				// check values
				if (mask) {
					var arr = [];
					for (var i = 0; i < mask.length; i++) {
						var c = value.charAt(i);
						if (mask[i] && mask[i].test(c))
							arr.push(c);
						else
							arr.push(config.mask.charAt(i));
					}
					value = arr.join('');
				}

			} else
				value = config.mask;
		}

		self.setterin(value, path, type);
		self.bindvalue();
		config.camouflage && !focused && setTimeout(self.camouflage, type === 'show' ? 2000 : 1, true);

		if (config.type === 'password')
			self.password(true);
	};

	self.check = function() {

		var is = false;

		if (config.dirsource)
			is = !!rawvalue.text();
		else
			is = input && input.length ? !!input[0].value : !!self.get();

		if (binded === is)
			return;

		binded = is;
		placeholder && placeholder.tclass('hidden', is);
		self.tclass(cls + '-binded', is);

		if (config.type === 'search')
			self.find(cls2 + '-icon-' + (config.searchalign === 1 ? 'right' : 'left')).find('i').tclass(config.searchalign === 1 ? config.ricon : config.licon, !is).tclass('ti-times', is);
	};

	self.bindvalue = function() {

		var value = self.get();

		if (dirsource) {

			var item;
			var text = [];

			for (var i = 0; i < dirsource.length; i++) {
				item = dirsource[i];
				if (typeof(item) === 'string') {
					if (item === value)
						break;
					item = null;
				} else if (config.multiple) {
					var v = item[config.dirvalue || config.value];
					var index = value instanceof Array ? value.indexOf(v) : -1;
					if (index !== -1)
						text.push({ index: index, value: item[config.dirkey || config.key] });
				} else if (item[config.dirvalue || config.value] === value) {
					item = item[config.dirkey || config.key];
					break;
				} else
					item = null;
			}

			if (config.multiple) {

				text.quicksort('index');
				for (var i = 0; i < text.length; i++)
					text[i] = text[i].value;

				item = text.join(', ');
			} else if (value && item == null && config.dircustom)
				item = value;

			if (config.dirraw)
				rawvalue.html(item || '');
			else
				rawvalue.text(item || '');

		} else if (config.dirsource) {
			if (config.dirdetail) {
				self.EXEC(config.dirdetail, value, function(val) {
					if (config.dirraw)
						rawvalue.html(val || '');
					else
						rawvalue.text(val || '');
					self.check();
				});
				return;
			} else if (config.dirraw)
				rawvalue.html(value || '');
			else
				rawvalue.text(value || '');
		} else {
			switch (config.type) {
				case 'color':
					rawvalue.css('background-color', value || '');
					break;
				case 'icon':
					rawvalue.html('<i class="{0}"></i>'.format(value || ''));
					break;
				case 'emoji':
					rawvalue.html(value);
					break;
				case 'checkbox':
					self.tclass(cls + '-checked', value === true || value === 1);
					break;
			}
		}

		self.check();
	};

	self.redraw = function() {

		if (!config.ricon) {
			if (config.dirsource)
				config.ricon = 'angle-down';
			else if (config.type === 'date') {
				config.ricon = 'calendar';
				if (!config.align && !config.innerlabel)
					config.align = 1;
			} else if (config.type === 'icon' || config.type === 'color' || config.type === 'emoji') {
				config.ricon = 'angle-down';
				if (!config.align && !config.innerlabel)
					config.align = 1;
			} else if (config.type === 'time') {
				config.ricon = 'clock-o';
				if (!config.align && !config.innerlabel)
					config.align = 1;
			} else if (config.type === 'search')
				if (config.searchalign === 1)
					config.ricon = 'search';
				else
					config.licon = 'search';
			else if (config.type === 'password')
				config.ricon = 'eye';
			else if (config.type === 'number' || config.type === 'number2') {
				if (!config.align && !config.innerlabel)
					config.align = 1;
			}
		}

		self.tclass(cls + '-masked', !!config.mask);
		self.rclass2(cls + '-type-');

		if (config.type)
			self.aclass(cls + '-type-' + config.type);


		var html;
		var is = false;

		if (config.type === 'checkbox') {
			html = '<div class="{0}-checkbox"><span><i class="{checkicon}"></i></span><label>{label}</label></div>'.format(cls).arg(config);
		} else {
			is = true;
			var opt = CLONE(config);
			if (opt.type === 'number2')
				opt.type = 'number';
			html = W.ui_input_template(opt);
		}

		self.html(html);

		if (is) {
			input = self.find('input,textarea');
			rawvalue = self.find(cls2 + '-value');
			placeholder = self.find(cls2 + '-placeholder');
		} else
			input = rawvalue = placeholder = null;
	};

	self.configure = function(key, value) {
		switch (key) {
			case 'icon':
				if (value && value.indexOf(' ') === -1)
					config.icon = 'ti ti-' + value;
				break;
			case 'dirsource':
				if (config.dirajax || value.indexOf('/') !== -1) {
					dirsource = null;
					self.bindvalue();
				} else {
					if (value.indexOf(',') !== -1) {
						dirsource = self.parsesource(value);
						self.bindvalue();
					} else {
						self.datasource(value, function(path, value) {
							dirsource = value;
							self.bindvalue();
						});
					}
				}
				self.tclass(cls + '-dropdown', !!value);
				input.prop('readonly', !!config.disabled || !!config.dirsource);
				break;
			case 'disabled':
				self.tclass('ui-disabled', !!value);
				input && input.prop('readonly', !!value || !!config.dirsource);
				self.reset();
				break;
			case 'required':
				self.tclass(cls + '-required', !!value);
				self.reset();
				break;
			case 'type':
				self.type = value;
				break;
			case 'validate':
				customvalidator = value ? (/\(|=|>|<|\+|-|\)/).test(value) ? FN('value=>' + value) : (function(path) { path = self.makepath(path); return function(value) { return GET(path)(value); }; })(value) : null;
				break;
			case 'innerlabel':
				self.tclass(cls + '-inner', !!value);
				self.tclass(cls + '-raw', !value);
				break;
			case 'monospace':
				self.tclass(cls + '-monospace', !!value);
				break;
			case 'maskregexp':
				if (value) {
					mask = value.toLowerCase().split(',');
					for (var i = 0; i < mask.length; i++) {
						var m = mask[i];
						if (!m || m === 'null')
							mask[i] = '';
						else
							mask[i] = new RegExp(m);
					}
				} else
					mask = null;
				break;
			case 'mask':
				config.mask = value.replace(/#/g, '_');
				break;
		}
	};

	self.formatter(function(path, value) {
		if (value) {
			switch (config.type) {
				case 'lower':
					return (value + '').toLowerCase();
				case 'upper':
					return (value + '').toUpperCase();
				case 'phone':
					return (value + '').replace(/\s/g, '');
				case 'email':
					return (value + '').toLowerCase();
				case 'date':
					var format = config.format;
					if (format === 'auto')
						format = '';
					return value.format(format || DEF.dateformat || 'yyyy-MM-dd');
				case 'time':
					var format = config.format;
					if (format === 'auto')
						format = '';
					return value.format(format || 'HH:mm');
				case 'number':
					return config.format ? (config.format === 'auto' ? value.format() : value.format(config.format)) : value;
				case 'number2':
					return value == null ? '' : config.format ? (config.format === 'auto' ? value.format() : value.format(config.format)) : value;
			}
		}

		return value;
	});

	self.parser(function(path, value) {
		if (value) {
			var tmp;
			switch (config.type) {
				case 'date':
					tmp = self.get();
					if (tmp)
						tmp = tmp.format('HH:mm');
					else
						tmp = '';
					return value + (tmp ? (' ' + tmp) : '');
				case 'lower':
				case 'email':
					value = value.toLowerCase();
					break;
				case 'upper':
					value = value.toUpperCase();
					break;
				case 'phone':
					value = value.replace(/\s/g, '');
					break;
				case 'number2':
					if (value) {
						var type = typeof(value);
						if (type === 'string' && (/^[\-0-9\.\,]+$/).test(value))
							value = value.parseFloat();
						else if (type !== 'number')
							value = null;
					} else
						value = null;
					break;
				case 'time':
					tmp = value.split(':');
					var dt = self.get();
					value = dt ? new Date(dt.getTime()) : new Date();
					value.setHours((tmp[0] || '0').parseInt());
					value.setMinutes((tmp[1] || '0').parseInt());
					value.setSeconds((tmp[2] || '0').parseInt());
					break;
				case 'slug':
					value = value.slug();
					break;
			}
		} else {
			switch (config.type) {
				case 'number':
					value = 0;
					break;
				case 'number2':
				case 'date':
					value = null;
					break;
			}
		}

		return value ? config.spaces === false ? value.replace(/\s/g, '') : value : value;
	});

	self.state = function(type, what) {
		if (type) {

			if (type === 1 && what === 4) {
				self.rclass(cls + '-ok ' + cls + '-invalid');
				self.$oldstate = null;
				return;
			}

			var invalid = config.required ? self.isInvalid() : self.forcedvalidation() ? self.isInvalid() : false;
			if (invalid !== self.$oldstate) {
				self.$oldstate = invalid;
				self.tclass(cls + '-invalid', invalid);
				self.tclass(cls + '-ok', !invalid);
				config.error && self.find(cls2 + '-error').tclass('hidden', !invalid);
			}
		}
	};

	self.forcedvalidation = function() {

		if (!config.forcevalidation)
			return false;

		if (config.type === 'number' || config.type === 'number2')
			return false;

		var val = self.get();

		if (config.type === 'checkbox')
			return val === true || val === 1;

		return (config.type === 'phone' || config.type === 'email') && (val != null && (typeof(val) === 'string' && val.length !== 0));
	};

});

COMPONENT('layout', 'space:1;border:0;parent:window;margin:0;remember:1;autoresize:1;minsize:50', function(self, config, cls) {

	var cls2 = '.' + cls;
	var cache = {};
	var drag = {};
	var s = {};
	var events = {};
	var istop2 = false;
	var isbottom2 = false;
	var isright2 = false;
	var loaded = false;
	var resizecache = '';
	var settings;
	var prefkey = '';
	var prefexpire = '1 month';
	var isreset = false;
	var layout = null;

	self.readonly();

	self.init = function() {
		ON('resize2 + resize', function() {
			for (var i = 0; i < M.components.length; i++) {
				var com = M.components[i];
				if (com.name === 'layout' && com.dom.offsetParent && com.$ready && !com.$removed && com.config.autoresize)
					com.resize();
			}
		});
	};

	self.make = function() {

		self.aclass(cls);
		self.find('> section').each(function() {
			var el = $(this);
			var type = el.attrd('type');

			if (type.charAt(type.length - 1) === '2') {
				type = type.substring(0, type.length - 1);

				switch (type) {
					case 'top':
						istop2 = true;
						break;
					case 'bottom':
						isbottom2 = true;
						break;
					case 'right':
						isright2 = true;
						break;
				}
			}
			el.aclass('{0}-{1} hidden {0}-section'.format(cls, type));
			el.after('<div class="{0}-resize-{1} {0}-resize" data-type="{1}"></div>'.format(cls, type));
			el.after('<div class="{0}-lock hidden" data-type="{1}"></div>'.format(cls, type));
			s[type] = el;
		});

		self.find('> .{0}-resize'.format(cls)).each(function() {
			var el = $(this);
			s[el.attrd('type') + 'resize'] = el;
		});

		self.find('> .{0}-lock'.format(cls)).each(function() {
			var el = $(this);
			s[el.attrd('type') + 'lock'] = el;
		});

		var tmp = self.find('> script');
		if (tmp.length) {
			self.rebind(tmp.html(), true);
			tmp.remove();
		}

		events.bind = function() {
			var el = $(W);
			el.bind('mousemove', events.mmove);
			el.bind('mouseup', events.mup);
			self.element.bind('mouseleave', events.mup);
		};

		events.unbind = function() {
			var el = $(W);
			el.unbind('mousemove', events.mmove);
			el.unbind('mouseup', events.mup);
			self.element.unbind('mouseleave', events.mup);
		};

		events.mdown = function(e) {

			var target = $(e.target);
			var type = target.attrd('type');
			var w = self.width();
			var h = self.height();
			var m = 2; // size of line

			self.element.find('iframe').css('pointer-events', 'none');

			drag.cur = self.element.offset();
			drag.cur.top -= 10;
			drag.cur.left -= 8;
			drag.offset = target.position();
			drag.el = target;
			drag.x = e.pageX;
			drag.y = e.pageY;
			drag.horizontal = type === 'left' || type === 'right' ? 1 : 0;
			drag.type = type;
			drag.plusX = 10;
			drag.plusY = 10;
			drag.newx = -1;
			drag.newy = -1;
			drag.w = w;
			drag.h = h;

			var ch = cache[type];
			var min = ch.minsize ? (ch.minsize.value - 1) : 0;
			var max = ch.maxsize ? (ch.maxsize.value - 1) : 0;

			target.aclass(cls + '-drag');

			switch (type) {
				case 'top':
					drag.min = min || (ch.size - m);
					drag.max = (cache.bottom ? (h - s.bottom.height() - config.minsize) : 0);
					if (max && drag.max > max)
						drag.max = max;
					break;

				case 'right':
					drag.min = (min || ch.size);
					drag.max = (cache.left ? (w - s.left.width() - config.minsize) : 0);
					if (max && drag.max > max)
						drag.max = max;
					break;

				case 'bottom':

					drag.min = (min || ch.size);
					drag.max = (cache.top ? (h - s.top.height() - config.minsize) : 0);

					if (max && drag.max > max)
						drag.max = max;

					break;

				case 'left':

					drag.min = min || (ch.size - m);

					if (drag.min < config.minsize)
						drag.min = config.minsize;

					drag.max = (cache.right ? (w - s.right.width() - config.minsize) : 0);

					if (max && drag.max > max)
						drag.max = max;

					break;
			}

			events.bind();
		};

		events.mmove = function(e) {

			if (drag.horizontal) {

				var x = drag.offset.left + (e.pageX - drag.x);

				if (drag.type === 'right')
					x = drag.w - x;

				if (x < drag.min)
					x = drag.min + 1;

				if (drag.max && x > drag.max)
					x = drag.max - 1;

				if (drag.type === 'right')
					x = drag.w - x;

				drag.newy = x;
				drag.el.css('left', x + 'px');

			} else {

				var y = drag.offset.top + (e.pageY - drag.y);

				if (drag.type === 'bottom')
					y = drag.h - y;

				if (y < drag.min)
					y = drag.min + 1;

				if (drag.max && y > drag.max)
					y = drag.max - 1;

				if (drag.type === 'bottom')
					y = drag.h - y;

				drag.newy = y;
				drag.el.css('top', y + 'px');
			}
		};

		events.mup = function() {

			self.element.find('iframe').css('pointer-events', '');

			var offset = drag.el.position();
			var d = WIDTH();
			var pk = prefkey + '_' + layout + '_' + drag.type + '_' + d;

			drag.el.rclass(cls + '-drag');

			if (drag.horizontal) {

				var w = offset.left;

				if (!isright2 && drag.type === 'right')
					w = self.width() - w;

				s[drag.type].css('width', w);
				config.remember && PREF.set(pk, w, prefexpire);
			} else {

				var h = offset.top;

				if (drag.type === 'bottom' || drag.type === 'preview')
					h = self.height() - h;

				s[drag.type].css('height', h);
				config.remember && PREF.set(pk, h, prefexpire);
			}

			events.unbind();
			self.refresh();
		};

		self.find('> ' + cls2 + '-resize').on('mousedown', events.mdown);
	};

	self.lock = function(type, b) {
		var el = s[type + 'lock'];
		el && el.tclass('hidden', b == null ? b : !b);
	};

	self.rebind = function(code, noresize) {
		code = code.trim();
		prefkey = 'L' + HASH(code);
		resizecache = '';
		settings = new Function('return ' + code)();
		!noresize && self.resize();
	};

	var getSize = function(display, data) {

		var obj = data[display];
		if (obj)
			return obj;

		switch (display) {
			case 'md':
				return getSize('lg', data);
			case 'sm':
				return getSize('md', data);
			case 'xs':
				return getSize('sm', data);
		}

		return data;
	};

	var checktimeout = null;
	var check = function() {
		checktimeout = null;
		self.resize();
	};

	self.resize = function() {

		if (self.dom.offsetParent == null) {
			if (!checktimeout)
				checktimeout = setTimeout(check, 500);
			return;
		}

		if (checktimeout) {
			clearTimeout(checktimeout);
			checktimeout = null;
		}

		if (settings == null)
			return;

		var d = WIDTH();
		var el = self.parent(config.parent);
		var width = el.width();
		var height = el.height();
		var key = d + 'x' + width + 'x' + height;

		if (resizecache === key)
			return;

		var tmp = layout ? settings[layout] : settings;

		if (tmp == null) {
			WARN('j-Layout: layout "{0}" not found'.format(layout));
			tmp = settings;
		}

		var size = getSize(d, tmp);
		height -= config.margin;
		resizecache = key;
		self.css({ width: width, height: height });

		for (var k in s) {
			el = s[k];
			self.update(k, size[k] ? size[k] : settings[k]);
		}

		config.resize && self.EXEC(config.resize, d, width, height);
	};

	var parseSize = function(val, size) {
		var str = typeof(val) === 'string';
		var obj = { raw : str ? val.parseFloat() : val, percentage: str ? val.charAt(val.length - 1) === '%' : false };
		obj.value = obj.percentage ? ((((size / 100) * obj.raw) >> 0) - config.space) : obj.raw;
		return obj;
	};

	self.reset = function() {
		isreset = true;
		resizecache = '';
		self.resize();
	};

	self.layout = function(name) {

		if (name == null)
			name = '';

		if (layout != name) {
			layout = name;
			resizecache = '';
			self.resize();
		}
	};

	self.update = function(type, opt) {

		if (opt == null)
			return;

		if (typeof(opt) === 'string')
			opt = opt.parseConfig();

		if (s[type] == null)
			return;

		var el = s[type];
		var css = {};
		var is = 0;
		var size = null;
		var d = WIDTH();

		var c = cache[type];
		if (c == null)
			c = cache[type] = {};

		var w = self.width();
		var h = self.height();
		var pk = prefkey + '_' + layout + '_' + type + '_' + d;
		var cached = PREF.get(pk, prefexpire);

		if (isreset) {
			cached && PREF.set(pk); // remove value
			cached = 0;
		}

		var def = getSize(d, settings);
		var width = (opt.size || opt.width) || (def[type] ? def[type].width : 0);
		var height = (opt.size || opt.height) || (def[type] ? def[type].height : 0);

		if (width && (type === 'left' || type === 'right')) {
			size = parseSize(width, w);
			c.size = size.value;
			css.width = cached ? cached : size.value;
			is = 1;
		}

		if (type === 'left' || type === 'right') {
			c.minsize = opt.minsize ? parseSize(opt.minsize, w) : 0;
			c.maxsize = opt.maxsize ? parseSize(opt.maxsize, w) : 0;
		} else if (type === 'top' || type === 'bottom') {
			c.minsize = opt.minsize ? parseSize(opt.minsize, h) : 0;
			c.maxsize = opt.maxsize ? parseSize(opt.maxsize, h) : 0;
		}

		if (height && (type === 'top' || type === 'bottom')) {
			size = parseSize(height, h);
			c.size = size.value;
			css.height = (cached ? cached : size.value);
			is = 1;
		}

		if (opt.show == null)
			opt.show = true;

		el.tclass('hidden', !opt.show);
		c.show = !!opt.show;
		c.resize = opt.resize == null ? false : !!opt.resize;
		el.tclass(cls + '-resizable', c.resize);
		s[type + 'resize'].tclass('hidden', !c.show || !c.resize);

		is && el.css(css);
		setTimeout2(self.ID + 'refresh', self.refresh, 50);
	};

	var getWidth = function(el) {
		return el.hclass('hidden') ? 0 : el.width();
	};

	var getHeight = function(el) {
		return el.hclass('hidden') ? 0 : el.height();
	};

	self.refresh = function() {

		var top = 0;
		var bottom = 0;
		var right = 0;
		var left = 0;
		var hidden = 'hidden';
		var top2 = 0;
		var bottom2 = 0;
		var space = 2;
		var topbottomoffset = 0;
		var right2visible = isright2 && !s.right.hclass(hidden);

		if (s.top)
			top = top2 = getHeight(s.top);

		if (s.bottom)
			bottom = bottom2 = getHeight(s.bottom);

		var width = self.width() - (config.border * 2);
		var height = self.height() - (config.border * 2);

		if (istop2) {
			topbottomoffset++;
			top2 = 0;
		}

		if (isbottom2) {
			topbottomoffset--;
			bottom2 = 0;
		}

		if (s.left && !s.left.hclass(hidden)) {
			var cssleft = {};
			space = top && bottom ? 2 : top || bottom ? 1 : 0;
			cssleft.left = 0;
			cssleft.top = istop2 ? config.border : (top ? (top + config.space) : 0);
			cssleft.height = isbottom2 ? (height - top2 - config.border) : (height - top2 - bottom2 - (config.space * space));
			cssleft.height += topbottomoffset;
			s.left.css(cssleft);
			cssleft.width = s.left.width();
			s.leftlock.css(cssleft);
			delete cssleft.width;
			left = s.left.width();
			cssleft.left = s.left.width();
			s.leftresize.css(cssleft);
			s.leftresize.tclass(hidden, !s.left.hclass(cls + '-resizable'));
		}

		if (s.right && !s.right.hclass(hidden)) {
			right = s.right.width();
			space = top && bottom ? 2 : top || bottom ? 1 : 0;
			var cssright = {};
			cssright.left = right2visible ? (getWidth(s.left) + config.border + config.space) : (width - right);
			cssright.top = istop2 ? config.border : (top ? (top + config.space) : 0);
			cssright.height = isbottom2 ? (height - top2 - config.border) : (height - top2 - bottom2 - (config.space * space));
			cssright.height += topbottomoffset;

			s.right.css(cssright);
			cssright.width = s.right.width();

			if (!isright2 && (width - cssright.left) <= 0) {
				s.right.css('left', 0);
				cssright.width++;
			}

			s.rightlock.css(cssright);
			delete cssright.width;

			if (right2visible)
				cssright.left += s.right.width();
			else
				cssright.left = width - right - 2;

			s.rightresize.css(cssright);
			s.rightresize.tclass(hidden, !s.right.hclass(cls + '-resizable'));
		}

		if (s.top) {
			var csstop = {};
			space = left ? config.space : 0;
			csstop.left = istop2 ? (left + space) : 0;

			if (right2visible && istop2)
				csstop.left += getWidth(s.right) + config.space;

			space = left && right ? 2 : left || right ? 1 : 0;
			csstop.width = istop2 ? (width - right - left - (config.space * space)) : width;
			csstop.top = 0;
			s.top.css(csstop);
			s.topresize.css(csstop);
			csstop.height = s.top.height();
			s.toplock.css(csstop);
			delete csstop.height;
			csstop.top = s.top.height();
			s.topresize.css(csstop);
			s.topresize.tclass(hidden, !s.top.hclass(cls + '-resizable'));
		}

		if (s.bottom) {
			var cssbottom = {};
			cssbottom.top = height - bottom;
			space = left ? config.space : 0;
			cssbottom.left = isbottom2 ? (left + space) : 0;

			if (right2visible && isbottom2)
				cssbottom.left += getWidth(s.right) + config.space;

			space = left && right ? 2 : left || right ? 1 : 0;
			cssbottom.width = isbottom2 ? (width - right - left - (config.space * space)) : width;
			s.bottom.css(cssbottom);
			cssbottom.height = s.bottom.height();
			s.bottomlock.css(cssbottom);
			delete cssbottom.height;
			cssbottom.top = cssbottom.top - 2;
			s.bottomresize.css(cssbottom);
			s.bottomresize.tclass(hidden, !s.bottom.hclass(cls + '-resizable'));
		}

		var space = left && right ? 2 : left ? 1 : right ? 1 : 0;
		var css = {};
		css.left = left ? left + config.space : 0;

		if (right2visible)
			css.left += getWidth(s.right) + config.space;

		css.width = (width - left - right - (config.space * space));
		css.top = top ? top + config.space : 0;

		space = top && bottom ? 2 : top || bottom ? 1 : 0;
		css.height = height - top - bottom - (config.space * space);

		s.main && s.main.css(css);
		s.mainlock && s.mainlock.css(css);

		self.element.SETTER('*/resize');
		config.resize && self.EXEC(config.resize, WIDTH(), width, height);

		if (loaded == false) {
			loaded = true;
			self.rclass('invisible');
		}

		isreset = false;
	};

	self.setter = function(value) {
		self.layout(value);
	};

});

COMPONENT('loading', function(self, config, cls) {

	var delay;
	var prev;

	self.readonly();
	self.singleton();
	self.nocompile();

	self.make = function() {
		self.aclass(cls + ' ' + cls + '-' + (config.style || 1));
		self.append('<div><div class="' + cls + '-text hellip"></div></div>');
	};

	self.show = function(text) {
		clearTimeout(delay);

		if (prev !== text) {
			prev = text;
			self.find('.' + cls + '-text').html(text || '');
		}

		self.rclass('hidden');
		document.activeElement && document.activeElement.blur();
		return self;
	};

	self.hide = function(timeout) {
		clearTimeout(delay);
		delay = setTimeout(function() {
			self.aclass('hidden');
		}, timeout || 1);
		return self;
	};

});

COMPONENT('locale', function(self, config) {

	self.singleton();
	self.nocompile();
	self.readonly();

	self.use = function(language) {

		if (!language)
			return;

		var fdw = 0; // First day of week  : 0 sunday, 1 monday, 5 friday, 6 saturday
		var nf = 1;  // Number format      : 1 == 100 000.123, 2 == 100 000,123, 3 == 100.000,123, 4 == 100,000.123
		var tf = 24; // Time format        : 12, 24
		var df = ''; // Date format        : yyyy-MM-dd

		// fdw = First day of week
		// nf  = Number format
		// tf  = Time format
		// df  = Date format

		switch (language) {

			case 'af':
				nf = 2;
				df = 'dd/MM/yyyy';
				tf = 24;
				fdw = 0;
				break;

			case 'sq':
				nf = 2;
				df = 'dd/MM/yyyy';
				tf = 24;
				fdw = 1;
				break;

			case 'ar':
				nf = 4;
				df = 'yyyy/MM/dd';
				tf = 24;
				fdw = 6;
				break;

			case 'ar-dz':
				nf = 3;
				df = 'dd/yyyy/MM';
				tf = 24;
				fdw = 1;
				break;

			case 'ar-kw':
				nf = 4;
				df = 'dd/MM/yyyy';
				tf = 24;
				fdw = 6;
				break;

			case 'ar-ly':
				nf = 3;
				df = 'dd/yyyy/MM';
				tf = 24;
				fdw = 6;
				break;

			case 'ar-ma':
				nf = 3;
				df = 'dd/MM/yyyy';
				tf = 24;
				fdw = 1;
				break;

			case 'ar-sa':
				nf = 4;
				df = 'dd/MM/yyyy';
				tf = 24;
				fdw = 0;
				break;

			case 'ar-tn':
				nf = 3;
				df = 'dd/MM/yyyy';
				tf = 24;
				fdw = 1;
				break;

			case 'hy-am':
				nf = 2;
				df = 'dd.MM.yyyy';
				tf = 24;
				fdw = 1;
				break;

			case 'az':
				nf = 3;
				df = 'dd.MM.yyyy';
				tf = 24;
				fdw = 1;
				break;

			case 'bm':
				nf = 4;
				df = 'dd/MM/yyyy';
				tf = 24;
				fdw = 1;
				break;

			case 'eu':
				nf = 3;
				df = 'yyyy-MM-dd';
				tf = 24;
				fdw = 1;
				break;

			case 'be':
				nf = 2;
				df = 'dd.MM.yyyy';
				tf = 24;
				fdw = 1;
				break;

			case 'bn':
				nf = 4;
				df = 'dd/MM/yyyy';
				tf = 12;
				fdw = 0;
				break;

			case 'bn-bd':
				nf = 4;
				df = 'dd/MM/yyyy';
				tf = 12;
				fdw = 0;
				break;

			case 'bs':
				nf = 3;
				df = 'dd.MM.yyyy';
				tf = 24;
				fdw = 1;
				break;

			case 'br':
				nf = 2;
				df = 'dd/MM/yyyy';
				tf = 24;
				fdw = 1;
				break;

			case 'bg':
				nf = 2;
				df = 'dd.MM.yyyy';
				tf = 24;
				fdw = 1;
				break;

			case 'my':
				nf = 4;
				df = 'dd/MM/yyyy';
				tf = 24;
				fdw = 0;
				break;

			case 'km':
				nf = 3;
				df = 'dd/MM/yyyy';
				tf = 24;
				fdw = 0;
				break;

			case 'ca':
				nf = 3;
				df = 'dd/MM/yyyy';
				tf = 24;
				fdw = 1;
				break;


			case 'tzm':
				nf = 3;
				df = 'dd/MM/yyyy';
				tf = 24;
				fdw = 6;
				break;

			case 'tzm-latn':
				nf = 3;
				df = 'dd/MM/yyyy';
				tf = 24;
				fdw = 6;
				break;

			case 'zh-cn':
				nf = 4;
				df = 'yyyy/MM/dd';
				tf = 24;
				fdw = 0;
				break;

			case 'zh-hk':
				nf = 4;
				df = 'yyyy/MM/dd';
				tf = 24;
				fdw = 0;
				break;

			case 'zh-mo':
				nf = 4;
				df = 'dd/MM/yyyy';
				tf = 24;
				fdw = 0;
				break;

			case 'zh-tw':
				nf = 4;
				df = 'yyyy/MM/dd';
				tf = 24;
				fdw = 0;
				break;

			case 'cv':
				nf = 2;
				df = 'dd-MM-yyyy';
				tf = 24;
				fdw = 1;
				break;

			case 'hr':
				nf = 3;
				df = 'dd.MM.yyyy';
				tf = 24;
				fdw = 1;
				break;

			case 'cs':
				nf = 2;
				df = 'dd.MM.yyyy';
				tf = 24;
				fdw = 1;
				break;

			case 'da':
				nf = 3;
				df = 'dd.MM.yyyy';
				tf = 24;
				fdw = 1;
				break;

			case 'nl':
				nf = 3;
				df = 'dd-MM-yyyy';
				tf = 24;
				fdw = 1;
				break;

			case 'nl-be':
				nf = 3;
				df = 'dd/MM/yyyy';
				tf = 24;
				fdw = 1;
				break;

			case 'en-au':
				nf = 4;
				df = 'dd/MM/yyyy';
				tf = 12;
				fdw = 0;
				break;

			case 'en-ca':
				nf = 4;
				df = 'yyyy-MM-dd';
				tf = 12;
				fdw = 0;
				break;

			case 'en-in':
				nf = 4;
				df = 'dd/MM/yyyy';
				tf = 12;
				fdw = 0;
				break;

			case 'en-ie':
				nf = 4;
				df = 'dd/MM/yyyy';
				tf = 24;
				fdw = 1;
				break;

			case 'en-il':
				nf = 4;
				df = 'dd/MM/yyyy';
				tf = 24;
				fdw = 0;
				break;

			case 'en-nz':
				nf = 4;
				df = 'dd/MM/yyyy';
				tf = 12;
				fdw = 1;
				break;

			case 'en-sg':
				nf = 4;
				df = 'dd/MM/yyyy';
				tf = 24;
				fdw = 0;
				break;

			case 'en-gb':
				nf = 4;
				df = 'dd/MM/yyyy';
				tf = 24;
				fdw = 1;
				break;

			case 'en':
				nf = 4;
				df = 'MM/dd/yyyy';
				tf = 12;
				fdw = 0;
				break;

			case 'eo':
				nf = 2;
				df = 'yyyy-MM-dd';
				tf = 24;
				fdw = 1;
				break;

			case 'et':
				nf = 2;
				df = 'dd.MM.yyyy';
				tf = 24;
				fdw = 1;
				break;

			case 'fo':
				nf = 3;
				df = 'dd/MM/yyyy';
				tf = 24;
				fdw = 1;
				break;

			case 'fil':
				nf = 4;
				df = 'MM/dd/yyyy';
				tf = 24;
				fdw = 0;
				break;

			case 'fi':
				nf = 2;
				df = 'dd.MM.yyyy';
				tf = 24;
				fdw = 1;
				break;

			case 'fr':
				nf = 2;
				df = 'dd/MM/yyyy';
				tf = 24;
				fdw = 1;
				break;

			case 'fr-ca':
				nf = 4;
				df = 'yyyy-MM-dd';
				tf = 24;
				fdw = 0;
				break;

			case 'fr-ch':
				nf = 1;
				df = 'dd.MM.yyyy';
				tf = 24;
				fdw = 1;
				break;

			case 'fy':
				nf = 3;
				df = 'dd-MM-yyyy';
				tf = 24;
				fdw = 1;
				break;

			case 'gl':
				nf = 3;
				df = 'dd/MM/yyyy';
				tf = 24;
				fdw = 1;
				break;

			case 'ka':
				nf = 2;
				df = 'dd/MM/yyyy';
				tf = 24;
				fdw = 1;
				break;

			case 'de':
				nf = 3;
				df = 'dd.MM.yyyy';
				tf = 24;
				fdw = 1;
				break;

			case 'de-at':
				nf = 3;
				df = 'dd.MM.yyyy';
				tf = 24;
				fdw = 1;
				break;

			case 'de-ch':
				nf = 1;
				df = 'dd.MM.yyyy';
				tf = 24;
				fdw = 1;
				break;

			case 'el':
				nf = 3;
				df = 'dd/MM/yyyy';
				tf = 12;
				fdw = 1;
				break;

			case 'gu':
				nf = 4;
				df = 'dd/MM/yyyy';
				tf = 12;
				fdw = 0;
				break;

			case 'he':
				nf = 4;
				df = 'dd/MM/yyyy';
				tf = 24;
				fdw = 0;
				break;

			case 'hi':
				nf = 4;
				df = 'dd/MM/yyyy';
				tf = 24;
				fdw = 0;
				break;

			case 'hu':
				nf = 2;
				df = 'yyyy.MM.dd';
				tf = 24;
				fdw = 1;
				break;

			case 'is':
				nf = 3;
				df = 'dd.MM.yyyy';
				tf = 24;
				fdw = 1;
				break;

			case 'id':
				nf = 3;
				df = 'dd/MM/yyyy';
				tf = 24;
				fdw = 0;
				break;

			case 'ga':
				nf = 4;
				df = 'dd/MM/yyyy';
				tf = 24;
				fdw = 1;
				break;

			case 'it':
				nf = 3;
				df = 'dd/MM/yyyy';
				tf = 24;
				fdw = 1;
				break;

			case 'it-ch':
				nf = 1;
				df = 'dd.MM.yyyy';
				tf = 24;
				fdw = 1;
				break;

			case 'ja':
				nf = 4;
				df = 'yyyy/MM/dd';
				tf = 24;
				fdw = 0;
				break;

			case 'jv':
				nf = 3;
				df = 'dd/MM/yyyy';
				tf = 24;
				fdw = 0;
				break;

			case 'kn':
				nf = 4;
				df = 'dd/MM/yyyy';
				tf = 12;
				fdw = 0;
				break;

			case 'kk':
				nf = 2;
				df = 'dd.MM.yyyy';
				tf = 24;
				fdw = 1;
				break;

			case 'tlh':
				nf = 2;
				df = 'dd.MM.yyyy';
				tf = 24;
				fdw = 1;
				break;

			case 'gom-deva':
				nf = 4;
				df = 'dd-MM-yyyy';
				tf = 12;
				fdw = 0;
				break;

			case 'gom-latn':
				nf = 4;
				df = 'dd-MM-yyyy';
				tf = 12;
				fdw = 0;
				break;

			case 'ko':
				nf = 4;
				df = 'yyyy.MM.dd';
				tf = 12;
				fdw = 0;
				break;

			case 'ku':
				nf = 4;
				df = 'dd/MM/yyyy';
				tf = 24;
				fdw = 6;
				break;

			case 'ky':
				nf = 2;
				df = 'dd.MM.yyyy';
				tf = 24;
				fdw = 1;
				break;

			case 'lo':
				nf = 4;
				df = 'dd/MM/yyyy';
				tf = 24;
				fdw = 0;
				break;

			case 'lv':
				nf = 2;
				df = 'dd.MM.yyyy';
				tf = 24;
				fdw = 1;
				break;

			case 'lt':
				nf = 2;
				df = 'yyyy-MM-dd';
				tf = 24;
				fdw = 1;
				break;

			case 'lb':
				nf = 3;
				df = 'dd.MM.yyyy';
				tf = 24;
				fdw = 1;
				break;

			case 'mk':
				nf = 3;
				df = 'dd.MM.yyyy';
				tf = 24;
				fdw = 1;
				break;

			case 'ms-my':
				nf = 4;
				df = 'dd/MM/yyyy';
				tf = 24;
				fdw = 1;
				break;

			case 'ms':
				nf = 4;
				df = 'dd/MM/yyyy';
				tf = 24;
				fdw = 1;
				break;

			case 'ml':
				nf = 4;
				df = 'dd/MM/yyyy';
				tf = 12;
				fdw = 0;
				break;

			case 'dv':
				nf = 4;
				df = 'dd/MM/yyyy';
				tf = 24;
				fdw = 5;
				break;

			case 'mt':
				nf = 4;
				df = 'dd/MM/yyyy';
				tf = 24;
				fdw = 0;
				break;

			case 'mi':
				nf = 4;
				df = 'dd/MM/yyyy';
				tf = 24;
				fdw = 1;
				break;

			case 'mr':
				nf = 4;
				df = 'dd/MM/yyyy';
				tf = 12;
				fdw = 0;
				break;

			case 'mn':
				nf = 4;
				df = 'yyyy-MM-dd';
				tf = 24;
				fdw = 1;
				break;

			case 'me':
				nf = 3;
				df = 'dd.MM.yyyy';
				tf = 24;
				fdw = 1;
				break;

			case 'ne':
				nf = 4;
				df = 'dd/MM/yyyy';
				tf = 12;
				fdw = 0;
				break;

			case 'se':
				nf = 2;
				df = 'dd.MM.yyyy';
				tf = 24;
				fdw = 1;
				break;

			case 'nb':
				nf = 2;
				df = 'dd.MM.yyyy';
				tf = 24;
				fdw = 1;
				break;

			case 'nn':
				nf = 2;
				df = 'dd.MM.yyyy';
				tf = 24;
				fdw = 1;
				break;

			case 'oc-lnc':
				nf = 3;
				df = 'dd/MM/yyyy';
				tf = 24;
				fdw = 1;
				break;

			case 'fa':
				nf = 4;
				df = 'dd/MM/yyyy';
				tf = 24;
				fdw = 6;
				break;

			case 'pl':
				nf = 2;
				df = 'dd.MM.yyyy';
				tf = 24;
				fdw = 1;
				break;

			case 'pt':
				nf = 2;
				df = 'dd/MM/yyyy';
				tf = 24;
				fdw = 0;
				break;

			case 'pt-br':
				nf = 3;
				df = 'dd/MM/yyyy';
				tf = 24;
				fdw = 1;
				break;

			case 'x-pseudo':
				nf = 2;
				df = 'dd/MM/yyyy';
				tf = 12;
				fdw = 1;
				break;

			case 'pa-in':
				nf = 4;
				df = 'dd/MM/yyyy';
				tf = 12;
				fdw = 0;
				break;

			case 'ro':
				nf = 3;
				df = 'dd.MM.yyyy';
				tf = 24;
				fdw = 1;
				break;

			case 'ru':
				nf = 2;
				df = 'dd.MM.yyyy';
				tf = 24;
				fdw = 1;
				break;

			case 'gd':
				nf = 4;
				df = 'dd/MM/yyyy';
				tf = 24;
				fdw = 1;
				break;

			case 'sr':
				nf = 3;
				df = 'dd.MM.yyyy';
				tf = 24;
				fdw = 1;
				break;

			case 'sr-cyrl':
				nf = 3;
				df = 'dd.MM.yyyy';
				tf = 24;
				fdw = 1;
				break;

			case 'sd':
				nf = 4;
				df = 'dd/MM/yyyy';
				tf = 24;
				fdw = 0;
				break;

			case 'si':
				nf = 4;
				df = 'yyyy/MM/dd';
				tf = 12;
				fdw = 1;
				break;

			case 'sk':
				nf = 2;
				df = 'dd.MM.yyyy';
				tf = 24;
				fdw = 1;
				break;

			case 'sl':
				nf = 3;
				df = 'dd.MM.yyyy';
				tf = 24;
				fdw = 1;
				break;

			case 'es':
				nf = 3;
				df = 'dd/MM/yyyy';
				tf = 24;
				fdw = 1;
				break;

			case 'es-do':
				nf = 4;
				df = 'dd/MM/yyyy';
				tf = 12;
				fdw = 0;
				break;

			case 'es-mx':
				nf = 4;
				df = 'dd/MM/yyyy';
				tf = 24;
				fdw = 0;
				break;

			case 'es-us':
				nf = 4;
				df = 'MM/dd/yyyy';
				tf = 12;
				fdw = 0;
				break;

			case 'sw':
				nf = 4;
				df = 'dd.MM.yyyy';
				tf = 24;
				fdw = 1;
				break;

			case 'sv':
				nf = 2;
				df = 'yyyy-MM-dd';
				tf = 24;
				fdw = 1;
				break;

			case 'tl-ph':
				nf = 4;
				df = 'MM/dd/yyyy';
				tf = 24;
				fdw = 0;
				break;

			case 'tg':
				nf = 2;
				df = 'dd.MM.yyyy';
				tf = 24;
				fdw = 1;
				break;

			case 'tzl':
				nf = 2;
				df = 'dd.MM.yyyy';
				tf = 24;
				fdw = 1;
				break;

			case 'ta':
				nf = 4;
				df = 'dd/MM/yyyy';
				tf = 24;
				fdw = 0;
				break;

			case 'te':
				nf = 4;
				df = 'dd/MM/yyyy';
				tf = 12;
				fdw = 0;
				break;

			case 'tet':
				nf = 2;
				df = 'dd/MM/yyyy';
				tf = 24;
				fdw = 1;
				break;

			case 'th':
				nf = 4;
				df = 'dd/MM/yyyy';
				tf = 24;
				fdw = 0;
				break;

			case 'bo':
				nf = 4;
				df = 'dd/MM/yyyy';
				tf = 12;
				fdw = 0;
				break;

			case 'tr':
				nf = 3;
				df = 'dd.MM.yyyy';
				tf = 24;
				fdw = 1;
				break;

			case 'tk':
				nf = 2;
				df = 'dd.MM.yyyy';
				tf = 24;
				fdw = 1;
				break;

			case 'uk':
				nf = 2;
				df = 'dd.MM.yyyy';
				tf = 24;
				fdw = 1;
				break;

			case 'ur':
				nf = 4;
				df = 'dd/MM/yyyy';
				tf = 24;
				fdw = 0;
				break;

			case 'ug-cn':
				nf = 4;
				df = 'yyyy-MM-dd';
				tf = 24;
				fdw = 0;
				break;

			case 'uz':
				nf = 2;
				df = 'dd/MM/yyyy';
				tf = 24;
				fdw = 1;
				break;

			case 'uz-latn':
				nf = 2;
				df = 'dd/MM/yyyy';
				tf = 24;
				fdw = 1;
				break;

			case 'vi':
				nf = 3;
				df = 'dd/MM/yyyy';
				tf = 24;
				fdw = 1;
				break;

			case 'cy':
				nf = 4;
				df = 'dd/MM/yyyy';
				tf = 24;
				fdw = 1;
				break;

			case 'yo':
				nf = 4;
				df = 'dd/MM/yyyy';
				tf = 12;
				fdw = 1;
				break;

			case 'ss':
				nf = 4;
				df = 'dd/MM/yyyy';
				tf = 12;
				fdw = 1;
				break;
		}

		if (!df)
			return false;

		DEF.dateformat = df;
		DEF.timeformat = tf === 12 ? '!HH:mm a' : 'HH:mm';
		DEF.firtdayofweek = fdw;
		DEF.decimalseparator = nf === 2 || nf === 3 ? ',' : '.';
		DEF.thousandsseparator = nf === 4 ? ',' : nf === 3 ? '.' : ' ';

		ENV('ts', (tf === 12 ? '!' : '') + df + ' - ' + (tf === 12 ? DEF.timeformat.substring(1) : DEF.timeformat));
		ENV('date', DEF.dateformat);
		ENV('time', DEF.timeformat);
		CONFIG('datepicker,firstday', 'firstday:' + fdw);
		CONFIG('timepicker', 'ampm:' + tf === 12 ? 'true' : 'false');

		self.path && self.set({ df: df, tf: tf, fdw: fdw, nf: nf });
		return true;
	};

	self.make = function() {

		var language = navigator.language.toLowerCase();
		if (config.language)
			self.use(config.language);
		else if (!self.use(language))
			self.use(language.split('-')[0]);

	};

});

COMPONENT('menu', 'style:2', function(self, config, cls) {

	self.singleton();
	self.readonly();
	self.nocompile && self.nocompile();

	var cls2 = '.' + cls;

	var is = false;
	var issubmenu = false;
	var events = {};
	var ul, children, prevsub, parentclass, container;

	self.make = function() {

		self.aclass('hidden ' + cls + '-area');
		self.append('<div class="{0} {0}-style-{1}"><div class="{0}-items"><ul></ul></div><div class="{0}-submenu hidden"><ul></ul></div>'.format(cls, config.style));
		container = self.find('> ' + cls2);
		ul = self.find(cls2 + '-items').find('ul');
		children = self.find(cls2 + '-submenu');

		self.element.on('click', function(e) {
			if (e.target === self.dom)
				self.hide();
		});

		self.event('click', 'li', function(e) {

			var el = $(this);
			if (!el.hclass(cls + '-divider') && !el.hclass(cls + '-disabled')) {
				self.opt.scope && M.scope(self.opt.scope);
				var index = el.attrd('index').split('-');
				if (index.length > 1) {
					// submenu
					self.opt.callback(self.opt.items[+index[0]].children[+index[1]]);
					self.hide();
				} else if (!issubmenu) {
					self.opt.callback(self.opt.items[+index[0]]);
					self.hide();
				}
			}

			e.preventDefault();
			e.stopPropagation();
		});

		self.event('contextmenu', function(e) {
			e.preventDefault();
			e.stopPropagation();
			self.hide();
		});

		events.hide = function() {
			is && self.hide();
		};

		self.event('scroll', events.hide);
		self.on('reflow + scroll + resize + resize2', events.hide);

		events.hidechildren = function() {
			if ($(this.parentNode.parentNode).hclass(cls + '-items')) {
				if (prevsub && prevsub[0] !== this) {
					prevsub.rclass(cls + '-selected');
					prevsub = null;
					children.aclass('hidden');
					issubmenu = false;
				}
			}
		};

		events.children = function() {

			if (prevsub && prevsub[0] !== this) {
				prevsub.rclass(cls + '-selected');
				prevsub = null;
			}

			issubmenu = true;

			var el = prevsub = $(this);
			var index = +el.attrd('index');
			var item = self.opt.items[index];

			el.aclass(cls + '-selected');

			var html = self.makehtml(item.children, index);
			children.find('ul').html(html);
			children.rclass('hidden');

			var css = {};
			var offset = el.position();

			css.left = ul.width() - 5;
			css.top = offset.top - 5;

			var offsetX = offset.left;

			offset = self.element.offset();

			var w = children.width();
			var left = offset.left + css.left + w;
			if (left > (WW + 30))
				css.left = (offsetX - w) + 5;

			children.css(css);

			var leftoffset = children.offset().left;
			var childrenwidth = children.width();
			var suboffset = childrenwidth + leftoffset;
			if (suboffset > WW)
				children.css('left', -childrenwidth);
		};
	};

	self.bindevents = function() {
		events.is = true;
		$(document).on('touchstart mouseenter mousedown', cls2 + '-children', events.children);
		$(W).on('scroll', events.hide);
		self.element.on('mouseenter', 'li', events.hidechildren);
	};

	self.unbindevents = function() {
		events.is = false;
		$(document).off('touchstart mouseenter mousedown', cls2 + '-children', events.children);
		$(W).off('scroll', events.hide);
		self.element.off('mouseenter', 'li', events.hidechildren);
	};

	self.showxy = function(x, y, items, callback) {
		var opt = {};
		opt.x = x;
		opt.y = y;
		opt.items = items;
		opt.callback = callback;
		self.show(opt);
	};

	self.makehtml = function(items, index) {
		var builder = [];
		var tmp;

		for (var i = 0; i < items.length; i++) {
			var item = items[i];

			if (typeof(item) === 'string') {
				// caption or divider
				if (item === '-')
					tmp = '<hr />';
				else
					tmp = '<span>{0}</span>'.format(item);
				builder.push('<li class="{0}-divider">{1}</li>'.format(cls, tmp));
				continue;
			}

			var cn = item.classname || item.class || '';
			var icon = '';

			var color = item.color ? 'style="color:{color}"'.arg(item) : '';
			if (item.icon)
				icon = '<i class="{0}" {1}></i>'.format(item.icon.charAt(0) === '!' ? item.icon.substring(1) : item.icon.indexOf(' ') === -1 ? ('ti ti-' + item.icon) : item.icon, color);
			else
				cn = (cn ? (cn + ' ') : '') + cls + '-nofa';

			tmp = '';

			if (index == null && item.children && item.children.length) {
				cn += (cn ? ' ' : '') + cls + '-children';
				tmp += '<i class="ti ti-angle-right pull-right"></i>';
			}

			if (item.selected)
				cn += (cn ? ' ' : '') + cls + '-selected';

			if (item.disabled)
				cn += (cn ? ' ' : '') + cls + '-disabled';

			tmp += '<div class="{0}-name">{1}{2}{3}</div>'.format(cls, icon, item.name, item.shortcut ? '<b>{0}</b>'.format(item.shortcut) : '');

			if (item.note)
				tmp += '<div class="ui-menu-note">{0}</div>'.format(item.note);

			builder.push('<li class="{0}" data-index="{2}">{1}</li>'.format(cn, tmp, (index != null ? (index + '-') : '') + i));
		}

		return builder.join('');
	};

	self.show = function(opt) {

		if (typeof(opt) === 'string') {
			// old version
			opt = { align: opt };
			opt.element = arguments[1];
			opt.items = arguments[2];
			opt.callback = arguments[3];
			opt.offsetX = arguments[4];
			opt.offsetY = arguments[5];
		}

		var tmp = opt.element ? opt.element instanceof jQuery ? opt.element[0] : opt.element.element ? opt.element.dom : opt.element : null;

		if (is && tmp && self.target === tmp) {
			self.hide();
			return;
		}

		var tmp;

		self.target = tmp;
		self.opt = opt;
		opt.scope = M.scope();

		var c = opt.classname || opt.class;

		if (parentclass && c !== parentclass) {
			self.rclass(parentclass);
			parentclass = null;
		}

		self.tclass('ui-large', opt.large == true);

		issubmenu = false;
		prevsub = null;

		var css = {};
		children.aclass('hidden');
		children.find('ul').empty();

		ul.html(self.makehtml(opt.items));

		if (!parentclass && c) {
			self.aclass(c);
			parentclass = c;
		}

		if (is) {
			css.left = 0;
			css.top = 0;
			container.css(css);
		} else {
			self.rclass('hidden');
			self.aclass(cls + '-visible', 100);
			is = true;
			if (!events.is)
				self.bindevents();
		}

		var target = $(opt.element);
		var plusW = opt.offsetWidth || 0;

		if (opt.fixedwidth) {
			var tmpw = target.width() + plusW;
			container.css({ 'max-width': tmpw, width: tmpw });
			plusW = 0;
		} else
			container.css({ 'max-width': '', width: '' });

		var w = container.width();
		var offset = target.offset();

		if (opt.element) {
			switch (opt.align) {
				case 'center':
					css.left = Math.ceil((offset.left - w / 2) + (target.innerWidth() / 2));
					break;
				case 'right':
					css.left = (offset.left - w) + target.innerWidth();
					break;
				default:
					css.left = offset.left;
					break;
			}
			css.top = opt.position === 'bottom' ? (offset.top - container.height() - 10) : (offset.top + target.innerHeight() + 10);

		} else {
			css.left = opt.x;
			css.top = opt.y;
		}

		if (opt.position === 'bottom')
			css.top += 10;
		else
			css.top -= 10;

		if (opt.offsetX)
			css.left += opt.offsetX;

		if (opt.offsetY)
			css.top += opt.offsetY;

		var mw = w;
		var mh = container.height();

		if (css.left < 0)
			css.left = 10;
		else if ((mw + css.left) > WW)
			css.left = (WW - mw) - 10;

		if (css.top < 0)
			css.top = 10;
		else if ((mh + css.top) > WH)
			css.top = (WH - mh) - 10;

		container.css(css);
	};

	self.hide = function() {
		events.is && self.unbindevents();
		is = false;
		self.opt && self.opt.hide && self.opt.hide();
		self.target = null;
		self.opt = null;
		self.aclass('hidden');
		self.rclass(cls + '-visible');
	};

});


COMPONENT('message', 'button:OK;style:2', function(self, config, cls) {

	var cls2 = '.' + cls;
	var is;
	var events = {};

	self.readonly();
	self.singleton();
	self.nocompile && self.nocompile();

	self.make = function() {

		var pls = (config.style === 2 ? (' ' + cls + '2') : '');
		self.aclass(cls + ' hidden' + pls);

		if (config.closeoutside)
			self.event('click', function(e) {
				var node = e.target;
				var skip = { SPAN: 1, A: 1, I: 1 };
				if (!skip[node.tagName])
					self.hide();
			});
		else
			self.event('click', 'button', self.hide);
	};

	events.keyup = function(e) {
		if (e.which === 27)
			self.hide();
	};

	events.bind = function() {
		if (!events.is) {
			$(W).on('keyup', events.keyup);
			events.is = false;
		}
	};

	events.unbind = function() {
		if (events.is) {
			events.is = false;
			$(W).off('keyup', events.keyup);
		}
	};

	self.warning = function(message, icon, fn) {
		if (typeof(icon) === 'function') {
			fn = icon;
			icon = undefined;
		}

		if (message instanceof Array) {
			var builder = [];
			for (var i = 0; i < message.length; i++) {
				var err = message[i].error;
				err && builder.push(err);
			}
			message = builder.join('<br />');
		}

		self.callback = fn;
		self.content(cls + '-warning', message, icon || 'warning');
	};

	self.info = function(message, icon, fn) {
		if (typeof(icon) === 'function') {
			fn = icon;
			icon = undefined;
		}

		if (message instanceof Array) {
			var builder = [];
			for (var i = 0; i < message.length; i++) {
				var err = message[i].error;
				err && builder.push(err);
			}
			message = builder.join('<br />');
		}

		self.callback = fn;
		self.content(cls + '-info', message, icon || 'info-circle');
	};

	self.success = function(message, icon, fn) {

		if (typeof(icon) === 'function') {
			fn = icon;
			icon = undefined;
		}

		self.callback = fn;
		self.content(cls + '-success', message, icon || 'check-circle');
	};

	self.response = function(message, callback, response) {

		var fn;

		if (typeof(message) === 'function') {
			response = callback;
			fn = message;
			message = null;
		} else if (typeof(callback) === 'function')
			fn = callback;
		else {
			response = callback;
			fn = null;
		}

		if (response instanceof Array) {
			var builder = [];
			for (var i = 0; i < response.length; i++) {
				var err = response[i].error;
				err && builder.push(err);
			}
			self.warning(builder.join('<br />'));
			SETTER('!loading/hide');
		} else if (typeof(response) === 'string') {
			self.warning(response);
			SETTER('!loading/hide');
		} else {

			if (message) {
				if (message.length < 40 && message.charAt(0) === '?')
					SET(message, response);
				else
					self.success(message);
			}

			if (typeof(fn) === 'string')
				SET(fn, response);
			else if (fn)
				fn(response);
		}
	};

	self.hide = function() {
		events.unbind();
		self.callback && self.callback();
		self.aclass('hidden');
	};

	self.content = function(classname, text, icon) {

		if (icon.indexOf(' ') === -1)
			icon = 'ti ti-' + icon;

		!is && self.html('<div><div class="{0}-icon"><i class="{1}"></i></div><div class="{0}-body"><div class="{0}-text"></div><hr /><button>{2}</button></div></div>'.format(cls, icon, config.button));

		self.rclass2(cls + '-').aclass(classname);
		self.find(cls2 + '-body').rclass().aclass(cls + '-body');
		is && self.find(cls2 + '-icon').find('.ti').rclass2('ti').aclass(icon);
		self.find(cls2 + '-text').html(text);
		self.rclass('hidden');
		self.element.focus();
		is = true;
		events.bind();
		document.activeElement && document.activeElement.blur();
		setTimeout(function() {
			self.aclass(cls + '-visible');
			setTimeout(function() {
				self.find(cls2 + '-icon').aclass(cls + '-icon-animate');
				document.activeElement && document.activeElement.blur();
			}, 300);
		}, 100);
	};
});

COMPONENT('miniform', 'zindex:12', function(self, config, cls) {

	var cls2 = '.' + cls;
	var csspos = {};

	if (!W.$$miniform) {

		W.$$miniform_level = W.$$miniform_level || 1;
		W.$$miniform = true;

		$(document).on('click', cls2 + '-button-close', function() {
			SET($(this).attrd('path'), '');
		});

		var resize = function() {
			setTimeout2(self.name, function() {
				for (var i = 0; i < M.components.length; i++) {
					var com = M.components[i];
					if (com.name === 'miniform' && !HIDDEN(com.dom) && com.$ready && !com.$removed)
						com.resize();
				}
			}, 200);
		};

		ON('resize2', resize);

		$(document).on('click', cls2 + '-container', function(e) {

			if (e.target === this) {
				var com = $(this).component();
				if (com && com.config.closeoutside) {
					com.set('');
					return;
				}
			}

			var el = $(e.target);

			if (el.hclass(cls + '-container-cell')) {
				var form = $(this).find(cls2);
				var c = cls + '-animate-click';
				form.aclass(c).rclass(c, 300);
				var com = el.parent().component();
				if (com && com.config.closeoutside)
					com.set('');
			}
		});
	}

	self.readonly();
	self.submit = function() {
		if (config.submit)
			self.EXEC(config.submit, self.hide, self.element);
		else
			self.hide();
	};

	self.cancel = function() {
		config.cancel && self.EXEC(config.cancel, self.hide);
		self.hide();
	};

	self.hide = function() {
		if (config.independent)
			self.hideforce();
		self.esc(false);
		self.set('');
	};

	self.esc = function(bind) {
		if (bind) {
			if (!self.$esc) {
				self.$esc = true;
				$(W).on('keydown', self.esc_keydown);
			}
		} else {
			if (self.$esc) {
				self.$esc = false;
				$(W).off('keydown', self.esc_keydown);
			}
		}
	};

	self.esc_keydown = function(e) {
		if (e.which === 27 && !e.isPropagationStopped()) {
			var val = self.get();
			if (!val || config.if === val) {
				e.preventDefault();
				e.stopPropagation();
				self.hide();
			}
		}
	};

	self.hideforce = function() {
		if (!self.hclass('hidden')) {
			self.aclass('hidden');
			self.release(true);
			self.find(cls2).rclass(cls + '-animate');
			W.$$miniform_level--;
		}
	};

	self.icon = function(value) {
		var el = this.rclass2('ti');
		value.icon && el.aclass(value.icon.indexOf(' ') === -1 ? ('ti ti-' + value.icon) : value.icon);
		this.tclass('hidden', !value.icon);
	};

	self.resize = function() {

		if (!config.center || self.hclass('hidden'))
			return;

		var ui = self.find(cls2);
		var fh = ui.innerHeight();
		var wh = WH;
		var r = (wh / 2) - (fh / 2);
		csspos.marginTop = (r > 30 ? (r - 15) : 20) + 'px';
		ui.css(csspos);
	};

	self.make = function() {

		$(document.body).append('<div id="{0}" class="hidden {4}-container invisible"><div class="{4}-container-table"><div class="{4}-container-cell"><div class="{4}" style="max-width:{1}px"><div data-bind="@config__text span:value.title__change .{4}-icon:@icon" class="{4}-title"><button name="cancel" class="{4}-button-close{3}" data-path="{2}"><i class="ti ti-times"></i></button><i class="{4}-icon"></i><span></span></div></div></div></div>'.format(self.ID, config.width || 800, self.path, config.closebutton == false ? ' hidden' : '', cls));

		var scr = self.find('> script');
		self.template = scr.length ? scr.html().trim() : '';
		if (scr.length)
			scr.remove();

		var el = $('#' + self.ID);
		var body = el.find(cls2)[0];

		while (self.dom.children.length)
			body.appendChild(self.dom.children[0]);

		self.rclass('hidden invisible');
		var csscls = self.attr('class');
		csscls && el.aclass(csscls);
		self.replace(el, true);

		self.event('scroll', function() {
			EMIT('scroll', self.name);
			EMIT('reflow', self.name);
		});

		self.event('click', 'button[name]', function() {
			var t = this;
			switch (t.name) {
				case 'submit':
					self.submit(self.hide);
					break;
				case 'cancel':
					!t.disabled && self[t.name](self.hide);
					break;
			}
		});

		config.enter && self.event('keydown', 'input', function(e) {
			e.which === 13 && !self.find('button[name="submit"]')[0].disabled && setTimeout2(self.ID + 'enter', self.submit, 500);
		});
	};

	self.configure = function(key, value, init, prev) {
		if (!init) {
			switch (key) {
				case 'width':
					value !== prev && self.find(cls2).css('max-width', value + 'px');
					break;
				case 'closebutton':
					self.find(cls2 + '-button-close').tclass('hidden', value !== true);
					break;
			}
		}
	};

	self.setter = function(value) {

		setTimeout2(cls + '-noscroll', function() {
			$('html').tclass(cls + '-noscroll', !!$(cls2 + '-container').not('.hidden').length);
		}, 50);

		var isHidden = value !== config.if;

		if (self.hclass('hidden') === isHidden) {
			if (!isHidden) {
				config.reload && self.EXEC(config.reload, self);
				config.default && DEFAULT(self.makepath(config.default), true);
			}
			return;
		}

		setTimeout2(cls, function() {
			EMIT('reflow', self.name);
		}, 10);

		if (isHidden) {
			if (!config.independent)
				self.hideforce();
			return;
		}

		if (self.template) {
			var is = self.template.COMPILABLE();
			self.find(cls2).append(self.template);
			self.template = null;
			is && COMPILE();
		}

		if (W.$$miniform_level < 1)
			W.$$miniform_level = 1;

		W.$$miniform_level++;

		self.css('z-index', W.$$miniform_level * config.zindex);
		self.rclass('hidden');

		self.resize();
		self.release(false);

		config.reload && self.EXEC(config.reload, self);
		config.default && DEFAULT(self.makepath(config.default), true);

		setTimeout(function() {
			self.rclass('invisible');
			self.find(cls2).aclass(cls + '-animate');
			config.autofocus && self.autofocus(config.autofocus);
		}, 200);

		// Fixes a problem with freezing of scrolling in Chrome
		setTimeout2(self.ID, function() {
			self.css('z-index', (W.$$miniform_level * config.zindex) + 1);
		}, 400);

		config.closeesc && self.esc(true);
	};
});


COMPONENT('movable', function(self, config) {

	var events = {};
	var draggable;

	self.readonly();

	self.make = function() {
		var target = config.global ? $(document) : config.parent ? self.parent(config.parent) : self.element;
		target.on('dragenter dragover dragexit drop dragleave dragstart', config.selector, events.ondrag).on('mousedown', config.selector, events.ondown);
	};

	events.ondrag = function(e) {

		if (!draggable) {
			e.preventDefault();
			return;
		}

		if (e.type !== 'dragstart') {
			e.stopPropagation();
			e.preventDefault();
		}

		switch (e.type) {
			case 'drop':

				var parent = draggable.parentNode;
				var a = draggable;
				var b = e.target;
				var ai = -1;
				var bi = -1;
				var is = false;

				draggable = null;

				while (true) {
					if (b.parentNode === parent) {
						is = true;
						break;
					}
					b = b.parentNode;
					if (b == null || b.tagName === 'HTML')
						break;
				}

				if (a === b || !is)
					return;

				for (var i = 0; i < parent.children.length; i++) {
					var child = parent.children[i];
					if (a === child)
						ai = i;
					else if (b === child)
						bi = i;
					if (bi !== -1 && ai !== -1)
						break;
				}

				if (ai > bi)
					parent.insertBefore(a, b);
				else
					parent.insertBefore(a, b.nextSibling);

				config.exec && self.EXEC(config.exec, $(parent).find(config.selector), a, b);
				self.path && self.change(true);
				break;

			case 'dragstart':
				var eo = e.originalEvent;
				eo.dataTransfer && eo.dataTransfer.setData('text', '1');
				break;
			case 'dragenter':
			case 'dragover':
			case 'dragexit':
			case 'dragleave':
				break;
		}
	};

	events.ondown = function(e) {
		if (e.target.nodeName === 'INPUT' || e.target.nodeName === 'TEXTAREA') {
			draggable = null;
			return;
		}
		draggable = this;
	};

	self.destroy = function() {
		$(document).off('dragenter dragover dragexit drop dragleave dragstart', config.selector, events.ondrag).off('mousedown', config.selector, events.ondown);
	};
});

COMPONENT('notify', 'timeout:3000;position:top-right', function(self, config, cls) {

	var cls2 = '.' + cls;
	var istop = false;
	var autoclosing;

	self.singleton();
	self.readonly();
	self.nocompile();

	self.template = Tangular.compile('<div class="{0} {0}-{{ type }} {0}-hidden" data-id="{{ id }}"><figure><div class="{0}-dot"></div><div class="{0}-icon"><i class="ti {{ icon }}"></i></div><div class="{0}-message">{{ message | raw }}</div></figure></div>'.format(cls));
	self.items = {};

	self.make = function() {

		self.aclass(cls + '-container');

		self.event('click', cls2, function() {
			var el = $(this);
			self.close(el.attrd('id'));
			clearTimeout(autoclosing);
			autoclosing = null;
			self.autoclose();
		});
	};

	self.configure = function(key, value) {
		if (key === 'position') {
			var c = cls + '-container-';
			self.rclass2(c).aclass(c + value.replace(/_|\s/, '-'));
			istop = value.indexOf('top') !== -1;
		}
	};

	self.close = function(id) {
		var obj = self.items[id];
		if (obj) {
			delete self.items[id];
			var item = self.find('div[data-id="{0}"]'.format(id));
			item.find('figure').empty();
			item.animate({ height: 0 }, 300, function() {
				item.remove();
			});
		}
	};

	self.response = function(message, callback, response) {

		var fn;

		if (typeof(message) === 'function') {
			response = callback;
			fn = message;
			message = null;
		} else if (typeof(callback) === 'function')
			fn = callback;
		else {
			response = callback;
			fn = null;
		}

		if (response instanceof Array) {
			var builder = [];
			for (var i = 0; i < response.length; i++) {
				var err = response[i].error;
				err && builder.push(err);
			}
			self.append(builder.join('<br />'), 2);
			SETTER('!loading/hide');
		} else if (typeof(response) === 'string') {
			self.append(response, 2);
			SETTER('!loading/hide');
		} else {

			if (message) {
				if (message.length < 40 && message.charAt(0) === '?')
					SET(message, response);
				else
					self.append(message, 1);
			}

			if (typeof(fn) === 'string')
				SET(fn, response);
			else if (fn)
				fn(response);
		}
	};

	self.warning = function(message) {
		self.append(message, 2);
	};

	self.success = function(message) {
		self.append(message, 1);
	};

	self.info = function(message) {
		self.append(message, 3);
	};

	self.append = function(message, type) {

		if (!type)
			type = 1;

		switch (type) {
			case 'success':
				type = 1;
				break;
			case 'warning':
				type = 2;
				break;
			case 'info':
				type = 3;
				break;
		}

		var icon;

		if (message.charAt(0) === '"') {
			var index = message.indexOf('"', 1);
			icon = self.faicon(message.substring(1, index).trim());
			message = message.substring(index + 1).trim();
		}

		// type 1: success
		// type 2: warning
		// type 3: info

		var obj = { id: Math.floor(Math.random() * 100000).toString(36), message: message, type: type, icon: icon || (type === 1 ? 'ti-check-circle' : type === 2 ? 'ti-times-circle' : 'ti-info-circle') };
		self.items[obj.id] = obj;
		var el = $(self.template(obj));
		if (istop)
			self.element.append(el);
		else
			self.element.prepend(el);
		self.autoclose();
		setTimeout(function() {
			el.rclass(cls + '-hidden');
		}, 20);
	};

	self.autoclose = function() {

		if (autoclosing)
			return;

		autoclosing = setTimeout(function() {
			clearTimeout(autoclosing);
			autoclosing = null;
			var el = self.find(cls2);
			el.length > 1 && self.autoclose();
			el.length && self.close(el.eq(istop ? 0 : (el.length - 1)).attrd('id'));
		}, config.timeout);

	};
});

COMPONENT('objecttree', 'copydata:Copy data;copypath:Copy path', function(self, config, cls) {

	var cls2 = '.' + cls;
	var tmpl_expand = '<i class="ti ti-chevron-down"></i>';
	var tmpl_toolbox = '<div class="toolbox"><i class="ti ti-copy" title="{copydata}"></i><i class="ti ti-link" title="{copypath}"></i></div>'.arg(config);
	var tmpl_beg = '<div class="CLS-item" data-path="{0}" title="{0}"><div class="CLS-item-key"><span class="CLS-key {1}">{2}</span>{4}{3}<span class="dots hidden"> ...</span>{5}</div>'.replace(/CLS/g, cls);
	var tmpl_end = '<div>{0}{1}</div></div>';
	var tmpl_simple = '<div class="CLS-item CLS-item-key" data-path="{0}" title="{0}"><span class="CLS-key mr5">"{1}":</span><span class="CLS-{2} mr5">{3}</span>{4}</div>'.replace(/CLS/g, cls);
	var data;

	const get = (obj, path) => path.split(".").reduce((r, k) => r?.[k], obj);

	self.readonly();

	self.make = function() {

		self.aclass(cls);

		self.event('click', 'i.ti-chevron-down', function() {
			var el = $(this);
			el.tclass('ti-rotate-270');
			el.parent().find('.dots').tclass('hidden');
			el.closest(cls2 + '-item').find('> div' + cls2 + '-item').tclass('hidden');
		});

		self.event('click', '.toolbox i', function() {
			var el = $(this);
			var ispath = el.hclass('ti-link');
			var path = el.closest(cls2 + '-item').attrd('path');
			var data2;
			data2 = ispath ? path : get(data, path);
			navigator.clipboard.writeText(ispath ? data2 : STRINGIFY(data2)).catch(e => {});
			config.exec && self.EXEC(config.exec, ispath ? 'path' : 'data', data2);
		});
	};

	self.setter = function(value) {

		if (!value || typeof value !== 'object') {
			self.html(value);
			return;
		}

		data = value;
		var isArr = value instanceof Array;
		var html = ('<div class="" data-path="{0}" title="{0}"><div><span class="' + cls + '-key {1}"></span>{2}</div>').format('', '', isArr ? '[' : '{');
		html += isArr ? self.treeArray(value, '', 0) : self.tree(value, '', 0);
		html += tmpl_end.format(isArr ? ']' : '}');
		self.html(html);
	};

	self.tree = function(obj, path, indent) {
		var isArr = obj instanceof Array;
		var keys = Object.keys(obj);
		var kl = keys.length;
		if ((isArr && !obj.length) || !kl)
			return '';
		var temp = '';
		indent++;
		for (var i = 0; i < kl; i++) {
			var isNum = !isNaN(keys[i]);
			var p = path + (path === '' ? path : '.') + keys[i];
			var item = obj[keys[i]];
			var type = item instanceof Array ? 'array' : item instanceof Date ? 'date' : typeof(item);
			if (item == null)
				type = 'null';
			var length = type === 'array' ? item.length : type === 'object' ? Object.keys(item).length : 0;
			var last = i === (kl - 1);
			if (type === 'array' && length) {
				temp += tmpl_beg.format(p, 'mr5', '"{0}":'.format(keys[i]), '[', length > 0 ? tmpl_expand : '', tmpl_toolbox);
				temp += self.treeArray(item, p, indent + 1);
				temp += tmpl_end.format(']', last ? '' : ',');
			} else if (type === 'object' && length) {
				temp += tmpl_beg.format(p, 'mr5', '"{0}":'.format(keys[i]), '{', length > 0 ? tmpl_expand : '', tmpl_toolbox);
				temp += self.tree(item, p, indent);
				temp += tmpl_end.format('}', last ? '' : ',');
			} else
				temp += tmpl_simple.format(p, keys[i], type, simpleformat(type, item),tmpl_toolbox);
		}
		return temp;
	};

	self.treeArray = function(arr, path, indent) {
		var tmp = '';
		for (let i = 0; i < arr.length; i++) {
			var item = arr[i];
			var type = item instanceof Array ? 'array' : item instanceof Date ? 'date' : typeof(item);
			if (item == null)
				type = 'null';
			var value = '';
			var path2 = path + (path === '' ? path : '.') + i;
			var last = i === (arr.length - 1);
			switch (type) {
				case 'array':
					value += tmpl_beg.format(path2, 'mr5', '', '[', tmpl_expand, tmpl_toolbox);
					value += self.treeArray(item, path2, indent);
					value += tmpl_end.format(']', last ? '' : ',');
					break;
				case 'object':
					value += tmpl_beg.format(path2, 'mr5', '', '{', tmpl_expand, tmpl_toolbox);
					value += self.tree(item, path2, indent);
					value += tmpl_end.format('}', last ? '' : ',');
					break;
				default:
					value = '<div class="{5}-item {5}-item-key" data-path="{0}" title="{0}"><span class="{5}-key mr5"></span><span class="{5}-{1} mr5">{2}</span>{3}{4}</div>'.format(path2, type, simpleformat(type, item), last  ? '' : ',', tmpl_toolbox, cls);
			}
			tmp += value;
		}
		return tmp;
	};

	function simpleformat(type, val) {
		var value;
		switch (type) {
			case 'date':
				value = val;
				break;
			case 'string':
				value = '"' + val + '"';
				break;
			case 'null':
				value = 'null';
				break;
			case 'array':
				value = '[]';
				break;
			case 'object':
				value = '{}';
				break;
			default:
				value = val;
		}
		return value;
	};
});

COMPONENT('part', 'hide:1;loading:1;delay:500;delayloading:800', function(self, config, cls) {

	var init = false;
	var clid = null;
	var downloading = false;
	var isresizing = false;
	var cache = {};

	self.releasemode && self.releasemode('true');
	self.readonly();

	self.make = function() {
		self.aclass(cls);
	};

	self.resize = function() {
		if (config.absolute) {
			var pos = self.element.position();
			var obj = {};
			obj.width = WW - pos.left;
			obj.height = WH - pos.top;
			self.css(obj);
		}
	};

	var replace = function(value) {
		return value.replace(/\?/g, config.path || config.if);
	};

	self.setter = function(value) {

		if (cache[value]) {

			if (downloading)
				return;

			if (config.absolute && !isresizing) {
				self.on('resize2', self.resize);
				isresizing = true;
			}

			if (self.dom.hasChildNodes()) {

				if (clid) {
					clearTimeout(clid);
					clid = null;
				}

				self.release(false);

				var done = function() {
					config.hide && self.rclass('hidden');
					config.reload && EXEC(replace(config.reload));
					config.default && DEFAULT(replace(config.default), true);
					var invisible = self.hclass('invisible');
					invisible && self.rclass('invisible', config.delay);
					isresizing && setTimeout(self.resize, 50);
					setTimeout(self.emitresize, 200);
					config.autofocus && self.autofocus(config.autofocus);
				};

				if (config.check)
					EXEC(replace(config.check), done);
				else
					done();

			} else {

				config.loading && SETTER('loading/show');
				downloading = true;
				setTimeout(function() {

					var preparator;

					if (config.replace)
						preparator = GET(replace(config.replace));
					else {
						preparator = function(content) {
							var path = replace(config.path || config.if);
							return content.replace(/~PATH~/g, path).replace(/~ID~/g, config.id || '').replace('PLUGIN(function(', 'PLUGIN(\'{0}\', function('.format(path));
						};
					}

					self.import(replace(config.url), function() {

						if (!init) {
							config.init && EXEC(replace(config.init));
							init = true;
						}

						var done = function() {
							config.hide && self.rclass('hidden');
							self.release(false);
							config.reload && EXEC(replace(config.reload), true);
							config.default && DEFAULT(replace(config.default), true);
							config.loading && SETTER('loading/hide', config.delayloading);
							isresizing && self.resize();
							self.hclass('invisible') && self.rclass('invisible', config.delay);
							setTimeout(self.emitresize, 200);
							downloading = false;
							config.autofocus && self.autofocus(config.autofocus);
						};

						EMIT('parts.' + config.if, self.element, self);

						if (config.check)
							EXEC(replace(config.check), done);
						else
							done();

					}, true, preparator);

				}, 200);
			}
		} else {

			if (!self.hclass('hidden')) {
				config.hidden && EXEC(replace(config.hidden));
				config.hide && self.aclass('hidden' + (config.invisible ? ' invisible' : ''));
				self.release(true);
			}

			if (config.cleaner && init && !clid)
				clid = setTimeout(self.clean, config.cleaner * 60000);
		}

	};

	self.emitresize = function() {
		self.element.SETTER('*', 'resize');
	};

	self.configure = function(key, value) {
		switch (key) {
			case 'if':

				var tmp = (value + '').split(',').trim();
				cache = {};
				for (var i = 0; i < tmp.length; i++)
					cache[tmp[i]] = 1;

				break;
			case 'absolute':
				var is = !!value;
				self.tclass(cls + '-absolute', is);
				break;
		}
	};

	self.clean = function() {
		if (self.hclass('hidden')) {
			config.clean && EXEC(replace(config.clean));
			setTimeout(function() {
				self.empty();
				init = false;
				clid = null;
				setTimeout(FREE, 1000);
			}, 1000);
		}
	};
});

COMPONENT('properties', 'datetimeformat:yyyy-MM-dd HH:mm;dateformat:yyyy-MM-dd;timeformat:HH:mm;offset:0;margin:0;modalalign:center;visibleY:1;scrollbar:1', function(self, config, cls) {

	var cls2 = '.' + cls;
	var container;
	var scroller;
	var types = {};
	var prevh = -1;
	var skip = false;
	var init = false;
	var prefkey = 'jcproperties';
	var values, funcs, predefined;

	self.make = function() {

		self.aclass(cls);
		var scr = self.find('script')[0];
		if (scr)
			predefined = new Function('return (' + scr.innerHTML + ')')();

		if (!$('#propertiesupload').length)
			$(document.body).append('<input type="file" id="propertiesupload" />');

		self.append('<div class="{0}-scroller"><div class="{0}-container"></div></div>'.format(cls, config.search));
		container = self.find(cls2 + '-container');

		if (config.scrollbar) {
			scroller = self.find(cls2 + '-scroller');
			self.scrollbar = SCROLLBAR(scroller, { visibleY: config.visibleY, orientation: 'y' });
		}

		self.event('click', 'label', function() {
			var el = $(this).closest(cls2 + '-group');
			el.tclass(cls + '-hidden');

			var is = el.hclass(cls + '-hidden');
			var id = el.attrd('id');

			var prop = PREF.get(prefkey);
			if (prop) {
				if (is)
					prop[id] = 1;
				else
					delete prop[id];
			} else if (is) {
				prop = {};
				prop[id] = 1;
			}

			PREF.set(prefkey, prop, '1 month');
		});

		self.on('resize + resize2', self.resize2);
		self.resize();
		self.scrollbar && self.scrollbar.resize();

		var keys = Object.keys(types);
		for (var i = 0; i < keys.length; i++) {
			var key = keys[i];
			types[key].init && types[key].init();
		}
	};

	self.finditem = function(el) {
		var index = +$(el).closest(cls2 + '-item').attrd('index');
		return index >= 0 ? (predefined ? predefined[index] : self.get()[index]) : null;
	};

	self.findel = function(el) {
		return $(el).closest(cls2 + '-item');
	};

	self.modifyval = function(item) {

		values[item.name] = item.value;

		var items = self.get();
		var arr = predefined || items;

		if (predefined)
			items[item.name] = item.value;

		for (var i = 0; i < arr.length; i++) {
			var item = arr[i];
			if (item.show) {
				var is = funcs[item.name + '_show'](values);
				self.find(cls2 + '-item[data-index="{0}"]'.format(i)).tclass('hidden', !is);
			}
		}

		if (predefined) {
			skip = true;
			self.update(true, 2);
		}

	};

	self.register = function(name, init, render) {
		types[name] = {};
		types[name].init = init;
		types[name].render = render;
		init(self);
	};

	types.string = {};
	types.string.init = function() {
		self.event('change', '.pstring', function() {
			var t = this;
			var item = self.finditem(t);
			var val = t.value.trim();

			switch (item.transform) {
				case 'uppercase':
					val = val.toUpperCase();
					t.value = val;
					break;
				case 'lowercase':
					val = val.toLowerCase();
					t.value = val;
					break;
				case 'capitalize':
					var tmp = val.split(' ');
					for (var i = 0; i < tmp.length; i++)
						tmp[i] = tmp[i].substring(0, 1).toUpperCase() + tmp[i].substring(1);
					t.value = tmp.join(' ');
					break;
				case 'slug':
					val = val.slug();
					break;
			}

			var isvalid = item.required == true ? !!val : true;
			if (isvalid) {

				// Is RegExp?
				if (typeof(item.validate) === 'object') {
					isvalid = item.validate.test(val);
				} else {
					switch (item.validate) {
						case 'email':
							isvalid = val.isEmail();
							break;
						case 'phone':
							isvalid = val.isPhone();
							break;
						case 'url':
							isvalid = val.isURL();
							break;
					}
				}
			}

			var el = self.findel(t);

			if (isvalid) {
				item.value = val;
				item.changed = item.prev !== val;
				el.tclass(cls + '-changed', item.changed);
				config.change && self.EXEC(config.change, item);
				self.modifyval(item);
				self.change(true);
			}

			item.invalid = !isvalid;
			el.tclass(cls + '-invalid', item.invalid);
			t.$processed = true;
		});
	};
	types.string.render = function(item, next) {
		next('<div class="{0}-string"><input type="text" maxlength="{1}" placeholder="{2}" value="{3}" class="pstring" /></div>'.format(cls, item.maxlength, item.placeholder || '', Thelpers.encode(item.value)));
	};

	types.password = {};
	types.password.init = function() {
		self.event('focus', '.ppassword', function() {
			$(this).attr('type', 'text');
		});
		self.event('blur', '.ppassword', function() {
			$(this).attr('type', 'password');
		});
		self.event('change', '.ppassword', function() {
			var t = this;
			var item = self.finditem(t);
			var val = t.value.trim();

			var isvalid = item.required == true ? !!val : true;
			if (isvalid) {
				// Is RegExp?
				if (typeof(item.validate) === 'object')
					isvalid = item.validate.test(val);
			}

			var el = self.findel(t);

			if (isvalid) {
				item.value = val;
				item.changed = item.prev !== val;
				el.tclass(cls + '-changed', item.changed);
				config.change && self.EXEC(config.change, item);
				self.modifyval(item);
				self.change(true);
			}

			item.invalid = !isvalid;
			el.tclass(cls + '-invalid', item.invalid);
			t.$processed = true;
		});
	};
	types.password.render = function(item, next) {
		next('<div class="{0}-string"><input type="password" maxlength="{1}" placeholder="{2}" value="{3}" class="ppassword" /></div>'.format(cls, item.maxlength, item.placeholder || '', Thelpers.encode(item.value)));
	};

	types.number = {};
	types.number.init = function() {

		self.event('blur change', '.pnumber', function() {
			var t = this;

			if (t.$processed)
				return;

			var item = self.finditem(t);
			var val = t.value.trim();

			if (!val && item.value == null)
				return;

			var el = self.findel(t);
			var isvalid = true;

			val = val.parseFloat();

			if (item.min != null && val < item.min)
				isvalid = false;
			else if (item.max != null && val > item.max)
				isvalid = false;

			item.invalid = !isvalid;

			if (isvalid) {
				t.value =val + '';
				item.value = val;
				item.changed = item.prev !== val;
				el.tclass(cls + '-changed', item.changed);
				config.change && self.EXEC(config.change, item);
				self.modifyval(item);
				self.change(true);
			}

			el.tclass(cls + '-invalid', item.invalid);
			t.$processed = true;
		});

		self.event('keydown', '.pnumber', function(e) {
			var t = this;

			t.$processed = false;

			if (e.which === 38 || e.which === 40) {
				var num = t.value.parseFloat();
				var item = self.finditem(t);
				if (e.which === 38)
					num += item.inc || 1;
				else if (e.which === 40)
					num -= item.inc || 1;
				t.value = num;
				e.preventDefault();
			}

		});
	};
	types.number.render = function(item, next) {
		next('<div class="{0}-number"><input type="text" maxlength="{1}" placeholder="{2}" value="{3}" class="pnumber" /></div>'.format(cls, 20, item.placeholder || '', Thelpers.encode((item.value == null ? '' : item.value) + '')));
	};

	types.date = {};
	types.date.init = function() {

		self.event('blur change', '.pdate', function(e) {

			var t = this;

			if (e.type === 'change')
				SETTER('!datepicker/hide');

			if (t.$processed)
				return;

			var item = self.finditem(t);
			var val = t.value.parseDate(config.dateformat);
			item.value = val;
			item.changed = !item.prev || item.prev.format(config.dateformat) !== val.format(config.dateformat);
			self.findel(t).tclass(cls + '-changed', item.changed);
			config.change && self.EXEC(config.change, item, function(val) {
				t.value = val;
			});
			self.change(true);
			self.modifyval(item);
			t.$processed = true;
		});

		self.event('keydown', '.pdate', function(e) {
			var t = this;
			t.$processed = false;
			if ((e.which === 38 || e.which === 40) && t.value) {
				var val = t.value.parseDate(config.dateformat);
				var item = self.finditem(t);
				val = val.add((e.which === 40 ? '-' : '') + (item.inc || '1 day'));
				t.value = val.format(config.dateformat);
				e.preventDefault();
			}
		});

		self.event('click', '.pdate', function() {
			var t = this;
			var el = $(t);
			var opt = {};
			var item = self.finditem(t);
			opt.element = el;
			opt.value = item.value;
			opt.callback = function(value) {
				t.$processed = false;
				t.value = value.format(config.dateformat);
				el.trigger('change');
			};
			SETTER('datepicker/show', opt);
		});
	};
	types.date.render = function(item, next) {
		next('<div class="{0}-date"><input type="text" maxlength="{1}" placeholder="{2}" value="{3}" class="pdate" /></div>'.format(cls, config.dateformat.length, item.placeholder || '', item.value ? item.value.format(config.dateformat) : ''));
	};

	types.bool = {};
	types.bool.init = function() {
		self.event('click', cls2 + '-booltoggle', function() {
			var t = this;
			var el = $(t);
			el.tclass('checked');
			var item = self.finditem(t);
			item.value = el.hclass('checked');
			item.changed = item.prev !== item.value;
			self.findel(t).tclass(cls + '-changed', item.changed);
			config.change && self.EXEC(config.change, item);
			self.change(true);
			self.modifyval(item);
		});
	};
	types.bool.render = function(item, next) {
		next('<div class="{0}-bool"><span class="{0}-booltoggle{1}"><i class="ti ti-check"></i></span></div>'.format(cls, item.value ? ' checked' : ''));
	};

	types.list = {};
	types.list.init = function() {
		self.event('click', cls2 + '-list', function() {
			var t = this;
			var item = self.finditem(t);
			var opt = {};
			opt.offsetY = -5;
			opt.offsetX = 6;
			opt.element = $(t);
			opt.items = typeof(item.items) === 'string' ? item.items.indexOf('/') === -1 ? GET(item.items) : item.items : item.items;
			opt.custom = item.dircustom;
			opt.minwidth = 80;
			if (item.dirsearch)
				opt.placeholder = item.dirsearch;
			else if (item.dirsearch == false)
				opt.search = false;
			opt.callback = function(value) {

				if (typeof(value) === 'string') {
					opt.element.find('span').text(value);
					item.value = value;
				} else {
					opt.element.find('span').html(value[item.dirkey || 'name']);
					item.value = value[item.dirvalue || 'id'];
				}

				if (item.dircustom && item.dirappend !== false) {
					if (!opt.items)
						opt.items = [];
					if (opt.items.indexOf(item.value) === -1)
						opt.items.push(item.value);
				}

				item.changed = item.prev !== item.value;
				self.findel(t).tclass(cls + '-changed', item.changed);
				config.change && self.EXEC(config.change, item, function(val) {
					opt.element.find('span').text(val);
				});
				self.change(true);
				self.modifyval(item);
			};
			SETTER('directory/show', opt);
		});
	};

	types.list.render = function(item, next) {
		var template = '<div class="{0}-list"><i class="ti ti-caret-down"></i><span>{1}</span></div>';
		if (item.detail) {
			AJAX('GET ' + item.detail.format(encodeURIComponent(item.value)), function(response) {
				next(template.format(cls, response[item.dirkey || 'name'] || item.placeholder || DEF.empty));
			});
		} else {
			var arr = typeof(item.items) === 'string' ? GET(item.items) : item.items;
			var m = (arr || EMPTYARRAY).findValue(item.dirvalue || 'id', item.value, item.dirkey || 'name', item.placeholder || DEF.empty);
			next(template.format(cls, m));
		}
	};

	types.color = {};
	types.color.init = function() {
		self.event('click', cls2 + '-colortoggle', function() {
			var t = this;
			var item = self.finditem(t);
			var opt = {};
			// opt.offsetY = -5;
			// opt.offsetX = 6;
			opt.align = config.modalalign;
			opt.element = $(t);
			opt.callback = function(value) {
				opt.element.find('b').css('background-color', value);
				item.value = value;
				item.changed = item.prev !== item.value;
				self.findel(t).tclass(cls + '-changed', item.changed);
				config.change && self.EXEC(config.change, item, function(val) {
					opt.element.find('b').css('background-color', val);
				});
				self.change(true);
				self.modifyval(item);
			};
			SETTER('colorpicker/show', opt);
		});
	};
	types.color.render = function(item, next) {
		next('<div class="{0}-color"><span class="{0}-colortoggle"><b{1}>&nbsp;</b></span></div>'.format(cls, item.value ? (' style="background-color:' + item.value + '"') : ''));
	};

	types.fontawesome = {};
	types.fontawesome.init = function() {
		self.event('click', cls2 + '-fontawesometoggle', function() {
			var t = this;
			var item = self.finditem(t);
			var opt = {};
			opt.align = config.modalalign;
			opt.element = $(t);
			opt.callback = function(value) {
				opt.element.find('i').rclass().aclass(value);
				item.value = value;
				item.changed = item.prev !== item.value;
				self.findel(t).tclass(cls + '-changed', item.changed);
				config.change && self.EXEC(config.change, item, function(val) {
					opt.element.find('i').rclass().aclass(val);
				});
				self.modifyval(item);
				self.change(true);
			};
			SETTER('faicons/show', opt);
		});
	};
	types.fontawesome.render = function(item, next) {
		next('<div class="{0}-fontawesome"><span class="{0}-fontawesometoggle"><i class="{1}"></i></span></div>'.format(cls, item.value || ''));
	};

	types.emoji = {};
	types.emoji.init = function() {
		self.event('click', cls2 + '-emojitoggle', function() {
			var t = this;
			var item = self.finditem(t);
			var opt = {};
			opt.align = config.modalalign;
			opt.element = $(t);
			opt.callback = function(value) {
				opt.element.html(value);
				item.value = value;
				item.changed = item.prev !== item.value;
				self.findel(t).tclass(cls + '-changed', item.changed);
				config.change && self.EXEC(config.change, item, function(val) {
					opt.element.html(val);
				});
				self.change(true);
				self.modifyval(item);
			};
			SETTER('emoji/show', opt);
		});
	};
	types.emoji.render = function(item, next) {
		next('<div class="{0}-emoji"><span class="{0}-emojitoggle">{1}</span></div>'.format(cls, item.value || DEF.empty));
	};

	types.file = {};
	types.file.init = function() {
		self.event('click', cls2 + '-file', function() {
			// Loads file
			var t = this;
			var item = self.finditem(t);
			var file = $('#propertiesupload');

			if (item.accept)
				file.attr('accept', item.accept);
			else
				file.removeAttr('accept');

			file.off('change').on('change', function() {
				var file = this;
				var data = new FormData();
				data.append('file', file.files[0]);
				SETTER('loading/show');
				UPLOAD(item.url, data, function(response) {
					item.value = response;
					item.changed = item.prev !== item.value;
					self.findel(t).tclass(cls + '-changed', item.changed);
					config.change && self.EXEC(config.change, item, val => self.findel(cls2 + '-filename').text(val));
					SETTER('loading/hide', 1000);
					file.value = '';
					self.change(true);
					self.modifyval(item);
				});
			}).trigger('click');
		});
	};

	types.file.render = function(item, next) {
		next('<div class="{0}-file"><i class="ti ti-folder"></i><span class="{0}-filename">{1}</span></div>'.format(cls, item.filename || item.value || DEF.empty));
	};

	self.readonly();
	self.nocompile();

	self.resize = function() {
		if (self.scrollbar) {
			var h = self.parent(config.parent).height() - config.margin;
			if (prevh !== h) {
				prevh = h;
				scroller.css('height', h);
				self.scrollbar.resize();
			}
		}
		if (!init) {
			init = true;
			self.rclass('invisible hidden');
		}
	};

	self.resize2 = function() {
		setTimeout2(self.ID, self.resize, 500);
	};

	self.destroy = function() {
		$(W).off('resize', self.resize2);
	};

	self.render = function(item, index) {

		var type = types[item.type === 'boolean' ? 'bool' : item.type];
		var c = cls;

		if (item.show) {
			if (!funcs[item.name + '_show'](values))
				c = 'hidden ' + c;
		}

		var el = $('<div class="{2}-item" data-index="{1}"><div class="{0}-key">{{ label }}</div><div class="{0}-value">&nbsp;</div></div>'.format(cls, index, c).arg(item));
		type.render(item, function(html) {
			el.find(cls2 + '-value').html(html);
		});
		return el;
	};

	self.setter = function(value) {

		if (skip) {
			skip = false;
			return;
		}

		if (!value)
			value = EMPTYARRAY;

		container.empty();

		var groups = {};

		values = {};
		funcs = {};

		var arr = predefined ? predefined : value;

		for (var i = 0; i < arr.length; i++) {

			var item = arr[i];
			var g = item.group || 'Default';
			var val = predefined ? value[item.name] : item.value;

			if (predefined)
				item.value = val;

			item.invalid = false;

			if (!groups[g])
				groups[g] = { html: [] };

			switch (item.type) {
				case 'fontawesome':
				case 'string':
					item.prev = val || '';
					break;
				case 'date':
					item.prev = val ? val.format(config.dateformat) : null;
					break;
				// case 'number':
				// case 'bool':
				// case 'boolean':
				// case 'list':
				default:
					item.prev = val;
					break;
			}

			if (item.show)
				funcs[item.name + '_show'] = typeof(item.show) === 'string' ? FN(item.show) : item.show;

			values[item.name] = val;
			groups[g].html.push(self.render(item, i));
		}

		var keys = Object.keys(groups);
		var def = PREF.get(prefkey) || EMPTYOBJECT;
		for (var i = 0; i < keys.length; i++) {
			var key = keys[i];
			var group = groups[key];
			var hash = 'g' + HASH(key, true);
			var el = $('<div class="{0}-group{3}" data-id="{2}"><label><i class="ti"></i>{1}</label><section></section></div>'.format(cls, key, hash, def[hash] ? (' ' + cls + '-hidden') : ''));
			var section = el.find('section');
			for (var j = 0; j < group.html.length; j++)
				section.append(group.html[j]);
			container.append(el);
		}

		self.resize();
	};

});

COMPONENT('radiobuttonexpert', function(self, config, cls) {

	var cls2 = '.' + cls;
	var template;
	var recompile = false;
	var selected;
	var reg = /\$(index|path)/g;

	self.nocompile();

	self.configure = function(key, value, init) {
		if (init)
			return;
		switch (key) {
			case 'disabled':
				self.tclass('ui-disabled', value);
				break;
			case 'required':
				self.find(cls2 + '-label').tclass(cls + '-label-required', value);
				break;
			case 'type':
				self.type = config.type;
				break;
			case 'label':
				self.find(cls2 + '-label').html(value);
				break;
			case 'datasource':
				if (value.indexOf(',') === -1)
					self.datasource(value, self.bind);
				else
					self.bind('', self.parsesource(value));
				break;
		}
	};

	self.make = function() {

		var element = self.find('script');
		if (!element.length && !config.selector)
			return;

		var html;
		if (config.selector) {
			var customselector = $(document).find(config.selector);
			html = customselector.html();
			self.html(html);
		} else {
			html = element.html();
			element.remove();
		}

		html = html.replace('>', ' data-value="{{ {0} }}" data-disabled="{{ {1} }}">'.format(config.value || 'id', config.disabledkey || 'disabled'));
		template = Tangular.compile(html);
		recompile = html.COMPILABLE();

		config.label && self.html('<div class="' + cls + '-label{1}">{0}</div>'.format(config.label, config.required ? (' ' + cls + '-label-required') : ''));
		config.datasource && self.reconfigure('datasource:' + config.datasource);
		config.type && (self.type = config.type);
		config.disabled && self.aclass('ui-disabled');

		self.event('click', '[data-value]', function() {
			var el = $(this);
			if (config.disabled || +el.attrd('disabled'))
				return;
			var value = self.parser(el.attrd('value'));
			self.set(value);
			self.change(true);
		});
	};

	self.validate = function(value) {
		return (config.disabled || !config.required) ? true : !!value;
	};

	self.setter = function(value) {

		selected && selected.rclass('selected');

		if (value == null)
			return;

		var el = self.find('[data-value="' + value + '"]');
		if (el) {
			el.aclass('selected');
			selected = el;
		}
	};

	self.bind = function(path, arr) {

		if (!arr)
			arr = EMPTYARRAY;

		var builder = [];
		var disabledkey = config.disabledkey || 'disabled';

		for (var i = 0; i < arr.length; i++) {
			var item = arr[i];
			item[disabledkey] = +item[disabledkey] || 0;
			builder.push(template(item).replace(reg, function(text) {
				return text.substring(0, 2) === '$i' ? i.toString() : self.path + '[' + i + ']';
			}));
		}

		var render = builder.join('');
		self.find(cls2 + '-container').remove();
		self.append('<div class="{0}-container{1}">{2}</div>'.format(cls, config.class ? ' ' + config.class : '', render));
		self.refresh();
		recompile && self.compile();
	};

});

COMPONENT('search', 'class:hidden;delay:50;attribute:data-search;splitwords:1;delaydatasource:100', function(self, config, cls) {

	self.readonly();

	self.make = function() {
		config.datasource && self.datasource(config.datasource, function() {
			setTimeout(function() {
				self.refresh();
			}, config.delaydatasource);
		});
	};

	self.search = function() {

		var value = self.get();
		var elements = self.find(config.selector);
		var length = elements.length;

		if (!value) {
			elements.rclass(config.class);
			self.rclass2(cls + '-');
			config.exec && self.SEEX(config.exec, { hidden: 0, count: length, total: length, search: '', is: false });
			return;
		}

		var raw = value.trim();
		var search = raw.toSearch();
		var count = 0;
		var hidden = 0;
		var custom = config.custom ? GET(self.makepath(config.custom)) : null;

		if (config.splitwords) {
			search = search.split(' ');
			raw = raw.split(' ');
		}

		self.aclass(cls + '-used');

		for (var i = 0; i < length; i++) {

			var el = elements.eq(i);
			var is = false;

			if (custom) {

				is = !custom(el, search);
				el.tclass(config.class, is);

				if (is)
					hidden++;
				else
					count++;

				continue;
			}

			var val = (el.attr(config.attribute) || '').trim();
			var fuzzy = val.toSearch();

			if (search instanceof Array) {

				for (var j = 0; j < raw.length; j++) {
					if (val.indexOf(raw[j]) === -1) {
						is = true;
						break;
					}
				}

				if (is) {
					is = false;
					for (var j = 0; j < search.length; j++) {
						if (fuzzy.indexOf(search[j]) === -1) {
							is = true;
							break;
						}
					}
				}
			} else
				is = fuzzy.indexOf(search) === -1 && val.indexOf(raw) === -1;

			el.tclass(config.class, is);

			if (is)
				hidden++;
			else
				count++;
		}

		self.tclass(cls + '-empty', !count);
		config.exec && self.SEEX(config.exec, { total: length, hidden: hidden, count: count, search: search, is: true });
	};

	self.setter = function(value) {
		if (!config.selector || !config.attribute || value == null)
			return;
		setTimeout2('search' + self.ID, self.search, config.delay);
	};
});

COMPONENT('searchinput', 'searchicon:ti ti-search;cancelicon:ti ti-times;align:left', function(self, config, cls) {

	var input;
	var icon;
	var prev;
	var prev2;

	self.novalidate();

	self.make = function() {

		self.aclass(cls + ' ' + cls + '-' + config.align);
		self.html('<span><i class="{0}"></i></span><div><input type="text" autocomplete="new-password" maxlength="100" placeholder="{1}" data-jc-bind /></div>'.format(config.searchicon, config.placeholder));
		input = self.find('input')[0];
		icon = self.find('i');

		self.event('click', 'span', function() {
			prev && self.set('');
			prev2 = '';
		});

		config.autofocus && self.autofocus();
	};

	self.focus = function() {
		input && input.focus();
	};

	self.check = function() {
		var is = !!input.value.trim();
		if (is !== prev) {
			icon.rclass().aclass(is ? config.cancelicon : config.searchicon);
			prev = is;
			self.tclass(cls + '-is', is);
		}
	};

	self.clear = function() {
		input.value = '';
		config.exec && self.SEEX(config.exec, input.value, self.element);
		self.check();
	};

	self.setter = function(value, path, type) {

		input.value = value || '';

		if (prev2 !== input.value) {
			prev2 = input.value;
			type && config.exec && self.SEEX(config.exec, input.value, self.element);
		}

		self.check();
	};

});

Thelpers.color = function(value) {
	var hash = HASH(value, true);
	var color = '#';
	for (var i = 0; i < 3; i++) {
		var value = (hash >> (i * 8)) & 0xFF;
		color += ('00' + value.toString(16)).substr(-2);
	}
	return color;
};

Thelpers.jsonformat = function(json, format) {

	var reguid2 = /"{14,}[a-z]{3}[01]{1}|^\d{9,14}[a-z]{2}[01]{1}a|"\d{4,18}[a-z]{2}\d{1}[01]{1}b|"[0-9a-f]{4,18}[a-z]{2}\d{1}[01]{1}c|"[0-9a-z]{4,18}[a-z]{2}\d{1}[01]{1}d/;

	if (typeof(json) === 'object')
		json = JSON.stringify(json, null, '\t');
	else if (json.indexOf('\t') === -1)
		json = JSON.stringify(JSON.parse(json), null, '\t');

	json = json.replace(/<|>/g, function(text) {
		return text === '<' ? '&lt;' : '&gt;';
	});

	return json.replace(/\t.*?:\s/g, function(text) {
		return '<span class="json-key">' + text.encode() + '</span>';
	}).replace(/\/span>(false|true)/g, function(val) {
		val = val.substring(6).encode();
		return '/span><span class="json-boolean json-' + val + '">' + val + '</span>';
	}).replace(/\/span>[\d.]+/g, function(val) {
		return '/span><span class="json-number">' + val.substring(6).encode() + '</span>';
	}).replace(/\/span>"[\d-]+T[\d:.]+Z"/g, function(val) {
		return '/span><span class="json-date">' + new Date(val.substring(7, val.length - 1)).format(format || 'yyyy-MM-dd HH:mm:ss') + '</span>';
	}).replace(/\/span>null/g, function() {
		return '/span><span class="json-null">null</span>';
	}).replace(/\/span>"#[a-f0-9]{6}"/gi, function(val) {
		val = val.substring(7, val.length - 1).encode();
		return '/span>"<span class="json-color" style="color:' + val + '">' + val + '</span>"';
	}).replace(reguid2, function(text) {
		return '<span class="json-uid">' + text.encode() + '</span>';
	});
};

COMPONENT('validate', 'delay:100;flags:visible;changes:0;strictchanges:0', function(self, config, cls) {

	var elements = null;
	var def = 'button[name="submit"]';
	var flags = null;
	var tracked = false;
	var reset = 0;
	var old, track;
	var currentvalue;

	self.readonly();

	self.make = function() {
		elements = self.find(config.selector || def);
	};

	self.configure = function(key, value, init) {
		switch (key) {
			case 'selector':
				if (!init)
					elements = self.find(value || def);
				break;
			case 'flags':
				if (value) {
					flags = value.split(',');
					for (var i = 0; i < flags.length; i++)
						flags[i] = '@' + flags[i];
				} else
					flags = null;
				break;
			case 'track':
				track = value.split(',').trim();
				break;
		}
	};

	var settracked = function() {
		tracked = 0;
	};

	var backup = null;
	var current = null;

	self.setter = function(value, path, type) {

		currentvalue = value;
		var is = path === self.path || path.length < self.path.length;

		if (config.changes) {
			current = STRINGIFY(value, config.strictchanges != true);
			if (is)
				backup = current;
			else
				is = backup === current;
		}

		if (reset !== is) {
			reset = is;
			self.tclass(cls + '-modified', !reset);
		}

		if ((type === 1 || type === 2) && track && track.length) {
			for (var i = 0; i < track.length; i++) {
				if (path.indexOf(track[i]) !== -1) {
					tracked = 1;
					return;
				}
			}
			if (tracked === 1) {
				tracked = 2;
				setTimeout(settracked, config.delay * 3);
			}
		}
	};

	var check = function() {

		var path = self.path.replace(/\.\*$/, '');
		var disabled = tracked || config.validonly ? !VALID(path, flags) : DISABLED(path, flags);

		if (!disabled && config.if)
			disabled = !EVALUATE(path, config.if);

		if (!disabled && config.changes && backup === current)
			disabled = true;

		if (disabled !== old) {
			elements.prop('disabled', disabled);
			self.tclass(cls + '-ok', !disabled);
			self.tclass(cls + '-no', disabled);
			old = disabled;
			if (!old && config.exec)
				self.SEEX(config.exec, currentvalue);
			config.output && self.SEEX(config.output, !disabled);
		}

	};

	self.state = function(type, what) {
		if (type === 3 || what === 3) {
			self.rclass(cls + '-modified');
			tracked = 0;
			backup = current;
		}
		setTimeout2(self.ID, check, config.delay);
	};

});

COMPONENT('viewbox', 'margin:0;scroll:true;delay:100;resizedelay:200;initdelay:250;scrollbar:1;visibleY:1;height:100;invisible:1', function(self, config, cls) {

	var eld, elb;
	var scrollbar;
	var cls2 = '.' + cls;
	var init = false;
	var cache;
	var scrolltoforce;

	self.readonly();

	self.init = function() {

		var resize = function() {
			for (var i = 0; i < M.components.length; i++) {
				var com = M.components[i];
				if (com.name === 'viewbox' && com.dom.offsetParent && com.$ready && !com.$removed)
					com.resizeforce();
			}
		};

		ON('resize2', function() {
			setTimeout2('viewboxresize', resize, 200);
		});
	};

	self.destroy = function() {
		scrollbar && scrollbar.destroy();
	};

	self.configure = function(key, value, init) {
		switch (key) {
			case 'disabled':
				eld.tclass('hidden', !value);
				break;
			case 'minheight':
			case 'margin':
			case 'marginxs':
			case 'marginsm':
			case 'marginmd':
			case 'marginlg':
				!init && self.resizeforce();
				break;
			case 'selector': // backward compatibility
				config.parent = value;
				self.resize();
				break;
		}
	};

	self.scrollbottom = function(val) {
		if (val == null)
			return elb[0].scrollTop;
		elb[0].scrollTop = (elb[0].scrollHeight - self.dom.clientHeight) - (val || 0);
		return elb[0].scrollTop;
	};

	self.scrolltop = function(val) {
		if (val == null)
			return elb[0].scrollTop;
		elb[0].scrollTop = (val || 0);
		return elb[0].scrollTop;
	};

	self.make = function() {

		var centered = '';

		if (config.centered)
			centered = '<div class="{0}-centered-table"><div class="{0}-centered-cell"></div></div>'.format(cls);

		config.invisible && self.aclass('invisible');
		config.scroll && MAIN.version > 17 && self.element.wrapInner('<div class="' + cls + '-body">' + centered + '</div>');

		self.element.prepend('<div class="' + cls + '-disabled hidden"></div>');
		eld = self.find('> .{0}-disabled'.format(cls)).eq(0);
		elb = self.find('> .{0}-body'.format(cls)).eq(0);

		self.aclass('{0} {0}-hidden'.format(cls));

		if (config.scroll) {
			if (config.scrollbar) {
				if (MAIN.version > 17) {
					scrollbar = W.SCROLLBAR(self.find(cls2 + '-body'), { shadow: config.scrollbarshadow, visibleY: config.visibleY, visibleX: config.visibleX, orientation: config.visibleX ? null : 'y', parent: self.element });
					self.scrollbar = scrollbar;
					self.scrolltop = scrollbar.scrollTop;
					self.scrollbottom = scrollbar.scrollBottom;
				} else
					self.aclass(cls + '-scroll');
			} else {
				self.aclass(cls + '-scroll');
				if (M.version < 19)
					self.find(cls2 + '-body').aclass('noscrollbar');
			}
		}

		self.resize();
	};

	self.released = function(is) {
		!is && self.resize();
	};

	var css = {};

	self.resize = function() {
		setTimeout2(self.ID, self.resizeforce, config.resizedelay);
	};

	self.resizeforce = function() {

		var el = self.parent(config.parent);
		var h = el.height();
		var w = el.width();

		var width = WIDTH();
		var mywidth = self.element.width();

		var key = width + 'x' + mywidth + 'x' + w + 'x' + h + 'x' + config.margin;
		if (cache === key) {
			scrollbar && scrollbar.resize();
			if (scrolltoforce) {
				if (scrolltoforce ==='bottom')
					self.scrollbottom(0);
				else
					self.scrolltop(0);
				scrolltoforce = null;
			}
			return;
		}

		cache = key;

		var margin = config.margin;
		var responsivemargin = config['margin' + width];

		if (responsivemargin != null)
			margin = responsivemargin;

		if (margin === 'auto')
			margin = self.element.offset().top;

		if (h === 0 || w === 0) {
			self.$waiting && clearTimeout(self.$waiting);
			self.$waiting = setTimeout(self.resize, 234);
			return;
		}

		h = ((h / 100) * config.height) - margin;

		if (config.minheight && h < config.minheight)
			h = config.minheight;

		if (config.centered)
			elb.find(cls2 + '-centered-table').css('min-height', h);

		css.height = h;
		css.width = mywidth;
		eld.css(css);

		css.width = '';
		self.css(css);
		elb.length && elb.css(css);
		self.element.SETTER('*', 'resize');
		var c = cls + '-hidden';
		self.hclass(c) && self.rclass(c, 100);
		scrollbar && scrollbar.resize();

		if (scrolltoforce) {
			if (scrolltoforce ==='bottom')
				self.scrollbottom(0);
			else
				self.scrolltop(0);
			scrolltoforce = null;
		}

		if (!init) {
			self.rclass('invisible', config.initdelay);
			init = true;
		}
	};

	self.resizescrollbar = function() {
		scrollbar && scrollbar.resize();
	};

	self.setter = function() {
		scrolltoforce = config.scrollto || config.scrolltop;
		if (scrolltoforce) {
			if (scrolltoforce ==='bottom')
				self.scrollbottom(0);
			else
				self.scrolltop(0);
			scrolltoforce = null;
		}
		setTimeout(self.resize, config.delay, scrolltoforce);
	};
});

COMPONENT('windows', 'menuicon:ti ti-navicon;reoffsetresize:0', function(self, config, cls) {

	var cls2 = '.' + cls;
	var cache = {};
	var services = [];
	var events = {};
	var drag = {};
	var prevfocused;
	var serviceid;
	var data = [];
	var lastWW = WW;
	var lastWH = WH;
	var resizer;

	self.make = function() {

		self.aclass(cls);
		self.append('<div class="{0}-resizer hidden"></div>'.format(cls));
		resizer = self.find(cls2 + '-resizer');

		self.event('click', cls2 + '-control', function() {
			var el = $(this);
			var name = el.attrd('name');
			var item = cache[el.closest(cls2 + '-item').attrd('id')];
			switch (name) {
				case 'close':
					item.setcommand('close');
					break;
				case 'minimize':
					item.setcommand('toggleminimize');
					break;
				case 'maximize':
					item.setcommand('togglemaximize');
					break;
				case 'menu':
					item.meta.menu && item.meta.menu.call(item, el);
					break;
				default:
					item.setcommand(name);
					break;
			}
		});

		self.event('mousedown touchstart', cls2 + '-item', function() {
			if (prevfocused) {
				if (prevfocused[0] == this)
					return;
				prevfocused.rclass(cls + '-focused');
			}
			var el = $(this);
			var id = el.attrd('id');
			prevfocused = el.aclass(cls + '-focused');
			var meta = cache[id];
			if (meta && meta.meta.focus)
				meta.meta.focus();

		});

		self.event('mousedown touchstart', cls2 + '-title,' + cls2 + '-resize', events.down);
		self.on('resize2', self.resize2);
		serviceid = setInterval(events.service, 5000);
	};

	self.finditem = function(id) {
		return cache[id];
	};

	self.send = function(type, body) {
		for (var i = 0; i < data.length; i++)
			data[i].meta.data(type, body, data[i].element);
	};

	self.destroy = function() {
		clearInterval(serviceid);
	};

	self.resize2 = function() {
		setTimeout2(self.ID, self.resize, 200);
	};

	self.recompile = function() {
		setTimeout2(self.ID + 'compile', COMPILE, 50);
	};

	self.resizeforce = function() {

		self.element.find(cls2 + '-maximized').each(function() {
			cache[$(this).attrd('id')].setcommand('maximize');
		});

		if (config.reoffsetresize) {
			var diffWW = lastWW - WW;
			var diffWH = lastWH - WH;

			var keys = Object.keys(cache);
			for (var i = 0; i < keys.length; i++) {
				var win = cache[keys[i]];
				win.setoffset(win.x - diffWW, win.y - diffWH);
			}

			lastWW = WW;
			lastWH = WH;
		}
	};

	self.resize = function() {
		setTimeout2(self.ID + 'resize', self.resizeforce, 300);
	};

	events.service = function() {
		for (var i = 0; i < services.length; i++) {
			var tmp = services[i];
			if (tmp.$service)
				tmp.$service++;
			else
				tmp.$service = 1;
			tmp.meta.service && tmp.meta.service.call(tmp, tmp.$service, tmp.element);
		}
	};

	events.down = function(e) {

		var E = e;

		if (e.type === 'touchstart') {
			drag.touch = true;
			e = e.touches[0];
		} else
			drag.touch = false;

		if (e.target.nodeName === 'I')
			return;

		var el = $(this);
		var parent = el.closest(cls2 + '-item');

		if (parent.hclass(cls + '-maximized'))
			return;

		drag.resize = el.hclass(cls + '-resize');
		drag.is = false;

		E.preventDefault();
		$('body').aclass(cls + '-prevent');
		self.aclass(cls + '-moving');

		var myoffset = self.element.position();
		var pos;

		if (drag.resize) {
			var c = el.attr('class');
			drag.el = el.closest(cls2 + '-item');
			drag.dir = c.match(/-(tl|tr|bl|br)/)[0].substring(1);
			pos = drag.el.position();
			var m = self.element.offset();
			drag.body = drag.el.find(cls2 + '-body');
			drag.plus = m;
			drag.x = pos.left;
			drag.y = pos.top;
			drag.width = drag.el.width();
			drag.title = drag.el.find(cls2 + '-title').height();
			drag.height = drag.body.height() + drag.title + 2;
			resizer.css({ left: drag.x, top: drag.y, width: drag.width, height: drag.height }).rclass('hidden');
		} else {
			drag.el = el.closest(cls2 + '-item');
			pos = drag.el.position();
			drag.x = e.pageX - pos.left;
			drag.y = e.pageY - pos.top;
		}

		$('body').aclass(cls + '-block');
		drag.offX = myoffset.left;
		drag.offY = myoffset.top;
		drag.item = cache[drag.el.attrd('id')];

		if (drag.item.meta.actions) {
			if (drag.resize) {
				if (drag.item.meta.actions.resize == false)
					return;
				drag.resize = true;
			} else {
				if (drag.item.meta.actions.move == false)
					return;
			}
		}

		drag.el.aclass(cls + '-dragged');
		$(W).on('mousemove touchmove', events.move).on('mouseup touchend', events.up);
	};

	events.move = function(e) {

		var evt = e;
		if (drag.touch)
			evt = e.touches[0];

		var obj = {};
		drag.is = true;

		if (drag.resize) {

			var x = evt.pageX - drag.offX - drag.plus.left;
			var y = evt.pageY - drag.offY - drag.plus.top;
			var off = drag.item.meta.offset;
			var w;
			var h;

			switch (drag.dir) {

				case 'tl':
					obj.left = x;
					obj.top = y;
					w = drag.width - (x - drag.x);
					h = drag.height - (y - drag.y);

					if ((off.minwidth && w < off.minwidth) || (off.minheight && h < off.minheight) || (off.maxwidth && w > off.maxwidth) || (off.maxheight && h > off.maxheight))
						break;

					if (drag.resize === true || drag.resize === 'width') {
						obj.width = w;
						resizer.css(obj);
					}

					if (drag.resize === true || drag.resize === 'height') {
						obj.height = h;
						delete obj.width;
						delete obj.top;
						resizer.css(obj);
					}
					break;

				case 'tr':
					w = x - drag.x;
					h = drag.height - (y - drag.y);

					if ((off.minwidth && w < off.minwidth) || (off.minheight && h < off.minheight) || (off.maxwidth && w > off.maxwidth) || (off.maxheight && h > off.maxheight))
						break;

					if (drag.resize === true || drag.resize === 'width') {
						obj.width = w;
						obj.top = y;
						resizer.css(obj);
					}

					if (drag.resize === true || drag.resize === 'height') {
						obj.height = h;
						delete obj.width;
						delete obj.top;
						resizer.css(obj);
					}

					break;

				case 'bl':

					w = drag.width - (x - drag.x);
					h = y - drag.y;

					if ((off.minwidth && w < off.minwidth) || (off.minheight && h < off.minheight) || (off.maxwidth && w > off.maxwidth) || (off.maxheight && h > off.maxheight))
						break;

					if (drag.resize === true || drag.resize === 'width') {
						obj.left = x;
						obj.width = w;
						resizer.css(obj);
						delete obj.width;
					}

					if (drag.resize === true || drag.resize === 'height') {
						obj.height = h;
						resizer.css(obj);
					}

					break;

				case 'br':
					w = x - drag.x;
					h = y - drag.y;

					if ((off.minwidth && w < off.minwidth) || (off.minheight && h < off.minheight) || (off.maxwidth && w > off.maxwidth) || (off.maxheight && h > off.maxheight))
						break;

					if (drag.resize === true || drag.resize === 'width') {
						obj.width = w;
						resizer.css(obj);
						delete obj.width;
					}

					if (drag.resize === true || drag.resize === 'height') {
						obj.height = h;
						resizer.css(obj);
					}

					break;
			}

			drag.item.ert && clearTimeout(drag.item.ert);
			drag.item.ert = setTimeout(drag.item.emitresize, 100);

		} else {
			obj.left = evt.pageX - drag.x - drag.offX;
			obj.top = evt.pageY - drag.y - drag.offY;

			if (obj.top < 0)
				obj.top = 0;

			drag.el.css(obj);
		}

		if (!drag.touch)
			e.preventDefault();
	};

	events.up = function() {

		self.rclass(cls + '-moving');
		drag.el.rclass(cls + '-dragged');
		$('body').rclass(cls + '-block');
		$(W).off('mousemove touchmove', events.move).off('mouseup touchend', events.up);
		resizer.aclass('hidden', 1);

		if (!drag.is)
			return;

		var item = drag.item;
		var meta = item.meta;
		var pos = drag.resize ? resizer.position() : drag.el.position();

		drag.is = false;
		drag.x = meta.offset.x = item.x = pos.left;
		drag.y = meta.offset.y = item.y = pos.top;

		if (drag.resize) {
			item.width = meta.offset.width = resizer.width();
			item.height = meta.offset.height = resizer.height() - drag.title;
			drag.el.css({ left: drag.x, top: drag.y, width: item.width });
			drag.body.css({ height: item.height });
			meta.resize && meta.resize.call(item, item.width, item.height, drag.body, item.x, item.y);
			self.element.SETTER('*', 'resize');
		}

		meta.move && meta.move.call(item, item.x, item.y, drag.body);
		self.wsave(item);
		self.change(true);
	};

	var wsavecallback = function(item) {
		var key = 'win_' + item.meta.cachekey;
		var obj = {};
		obj.x = item.x;
		obj.y = item.y;
		obj.width = item.width;
		obj.height = item.height;
		obj.ww = WW;
		obj.wh = WH;
		obj.hidden = item.meta.hidden;
		PREF.set(key, obj, '1 month');
	};

	self.wsave = function(obj) {
		if (obj.meta.actions && obj.meta.actions.autosave)
			setTimeout2(self.ID + '_win_' + obj.meta.cachekey, wsavecallback, 500, null, obj);
	};

	self.wadd = function(item) {

		var hidden = '';
		var ishidden = false;

		if (!item.cachekey)
			item.cachekey = item.id;

		if (item.cachekey)
			item.cachekey += '' + item.offset.width + 'x' + item.offset.height;

		if (item.actions && item.actions.autosave) {
			pos = PREF['win_' + item.cachekey];
			if (pos) {

				var mx = 0;
				var my = 0;

				var keys = Object.keys(cache);
				var plus = 0;

				for (var i = 0; i < keys.length; i++) {
					if (cache[keys[i]].meta.cachekey === item.cachekey)
						plus += 50;
				}

				if (config.reoffsetresize && pos.ww != null && pos.wh != null) {
					mx = pos.ww - WW;
					my = pos.wh - WH;
				}

				item.offset.x = (pos.x - mx) + plus;
				item.offset.y = (pos.y - my) + plus;
				item.offset.width = pos.width;
				item.offset.height = pos.height;

				if (pos.hidden && (item.hidden == null || item.hidden)) {
					ishidden = true;
					item.hidden = true;
				}
			}
		}

		if (!ishidden)
			ishidden = item.hidden;

		hidden = ishidden ? ' hidden' : '';

		var el = $('<div class="{0}-item{2}" data-id="{id}" style="left:{x}px;top:{y}px;width:{width}px"><span class="{0}-resize {0}-resize-tl"></span><span class="{0}-resize {0}-resize-tr"></span><span class="{0}-resize {0}-resize-bl"></span><span class="{0}-resize {0}-resize-br"></span><div class="{0}-title"><i class="ti ti-times {0}-control" data-name="close"></i><i class="ti ti-maximize {0}-control" data-name="maximize"></i><i class="ti ti-underscore {0}-control" data-name="minimize"></i><i class="{1} {0}-control {0}-lastbutton" data-name="menu"></i><span>{{ title }}</span></div><div class="{0}-body" style="height:{height}px"></div></div>'.format(cls, config.menuicon, hidden).arg(item.offset).arg(item));
		var body = el.find(cls2 + '-body');
		var pos;

		body.append(item.html);

		if (typeof(item.html) === 'string' && item.html.COMPILABLE())
			self.recompile();

		if (item.actions) {
			if (item.actions.resize == false)
				el.aclass(cls + '-noresize');
			if (item.actions.move == false)
				el.aclass(cls + '-nomove');

			var noclose = item.actions.close == false;
			if (item.actions.hide)
				noclose = false;

			if (noclose)
				el.aclass(cls + '-noclose');
			if (item.actions.maximize == false)
				el.aclass(cls + '-nomaximize');
			if (item.actions.minimize == false)
				el.aclass(cls + '-nominimize');
			if (!item.actions.menu)
				el.aclass(cls + '-nomenu');
		}

		var obj = cache[item.id] = {};
		obj.main = self;
		obj.meta = item;
		obj.element = body;
		obj.container = el;
		obj.x = item.offset.x;
		obj.y = item.offset.y;
		obj.width = item.offset.width;
		obj.height = item.offset.height;
		item.element = el;

		if (item.buttons) {
			var builder = [];
			for (var i = 0; i < item.buttons.length; i++) {
				var btn = item.buttons[i];
				var icon = self.faicon(btn.icon);
				builder.push('<i class="ti ti-{1} {0}-control" data-name="{2}"></i>'.format(cls, icon, btn.name));
			}
			builder.length && el.find(cls2 + '-lastbutton').before(builder.join(''));
		}

		item.make && item.make.call(cache[item.id], body);

		obj.emitresize = function() {
			obj.ert = null;
			obj.element.SETTER('*', 'resize');
		};

		obj.setsize = function(w, h) {
			var t = this;
			var obj = {};

			if (w) {
				obj.width = t.width = t.meta.offset.width = w;
				t.element.parent().css('width', w);
			}

			if (h) {
				t.element.css('height', h);
				t.height = t.meta.offset.height = h;
			}

			t.ert && clearTimeout(t.ert);
			t.ert = setTimeout(t.emitresize, 100);
			self.wsave(t);
		};

		obj.setcommand = function(type) {

			var el = obj.element.parent();
			var c;

			switch (type) {

				case 'toggle':
					obj.setcommand(obj.meta.hidden ? 'show' : 'hide');
					break;

				case 'show':
					if (obj.meta.hidden) {
						obj.meta.hidden = false;
						obj.element.parent().rclass('hidden');
						self.wsave(obj);
						self.resize2();
					}
					break;

				case 'close':
				case 'hide':

					if (type === 'hide' && obj.meta.hidden)
						return;

					if (obj.meta.close) {
						obj.meta.close(function() {
							self.wrem(obj.meta, true);
							self.resize2();
						});
					} else {
						self.wrem(obj.meta, true);
						self.resize2();
					}
					break;

				case 'maximize':
					if (obj.meta.maximize) {
						obj.meta.maximize();
					} else {
						c = cls + '-maximized';

						if (!el.hclass(c)) {
							obj.prevwidth = obj.width;
							obj.prevheight = obj.height;
							obj.prevx = obj.x;
							obj.prevy = obj.y;
							el.aclass(c);
							obj.setcommand('resetminimize');
						}

						var ww = self.element.width() || WW;
						var wh = self.element.height() || WH;
						obj.setoffset(0, 0);
						obj.setsize(ww, wh - obj.element.position().top);
					}
					break;

				case 'resetmaximize':
					if (obj.meta.maximize) {
						obj.meta.maximize('reset');
					} else {
						c = cls + '-maximized';
						if (el.hclass(c)) {
							obj.setoffset(obj.prevx, obj.prevy);
							obj.setsize(obj.prevwidth, obj.prevheight);
							el.rclass(c);
						}
					}
					break;

				case 'togglemaximize':
					if (obj.meta.maximize) {
						obj.meta.maximize('toggle');
					} else {
						c = cls + '-maximized';
						obj.setcommand(el.hclass(c) ? 'resetmaximize' : 'maximize');
					}
					break;

				case 'minimize':
					if (obj.meta.minimize) {
						obj.meta.minimize();
					} else {
						c = cls + '-minimized';
						if (!el.hclass(c))
							el.aclass(c);
					}
					break;

				case 'resetminimize':
					if (obj.meta.minimize) {
						obj.meta.minimize('reset');
					} else {
						c = cls + '-minimized';
						el.hclass(c) && el.rclass(c);
					}
					break;

				case 'toggleminimize':
					if (obj.meta.minimize) {
						obj.meta.minimize('toggle');
					} else {
						c = cls + '-minimized';
						obj.setcommand(el.hclass(c) ? 'resetminimize' : 'minimize');
					}
					break;

				case 'resize':
					obj.setsize(obj.width, obj.height);
					break;

				case 'move':
					obj.setoffset(obj.x, obj.y);
					break;

				case 'focus':
					obj.setcommand('resetminimize');
					prevfocused && prevfocused.rclass(cls + '-focused');
					prevfocused = obj.element.parent().aclass(cls + '-focused');
					if (obj.meta.focus)
						obj.meta.focus();
					break;
				default:
					if (obj.meta.buttons) {
						var btn = obj.meta.buttons.findItem('name', type);
						if (btn && btn.exec)
							btn.exec.call(obj, obj);
					}
					break;
			}
		};

		obj.setoffset = function(x, y) {
			var t = this;
			var obj = {};

			if (x != null)
				obj.left = t.x = t.meta.offset.x = x;

			if (y != null)
				obj.top = t.y = t.meta.offset.y = y;

			t.element.parent().css(obj);
			self.wsave(t);
		};

		obj.meta.service && services.push(obj);
		obj.meta.data && data.push(obj);

		self.append(el);

		setTimeout(function(obj) {
			obj.setcommand('focus');
		}, 100, obj);
		return obj;
	};

	self.wrem = function(item, notify) {
		var obj = cache[item.id];
		if (obj) {
			var main = obj.element.closest(cls2 + '-item');

			if (obj.meta.actions.hide) {
				obj.meta.hidden = true;
				main.aclass('hidden');
				self.wsave(obj);
			} else {
				obj.meta.destroy && obj.meta.destroy.call(obj);
				main.off('*');
				main.find('*').off('*');
				main.remove();
				delete cache[item.id];

				var index = services.indexOf(obj);
				if (index !== -1)
					services.splice(index, 1);

				index = data.indexOf(obj);
				if (index !== -1)
					data.splice(index, 1);

				var arr = self.get();
				arr.splice(arr.findIndex('id', item.id), 1);
				notify && self.update();
			}
		}
	};

	self.setter = function(value) {

		if (!value)
			value = EMPTYARRAY;

		var updated = {};

		for (var i = 0; i < value.length; i++) {
			var item = value[i];
			if (!cache[item.id])
				cache[item.id] = self.wadd(item);
			updated[item.id] = 1;
		}

		// Remove older windows
		var keys = Object.keys(cache);
		for (var i = 0; i < keys.length; i++) {
			var key = keys[i];
			if (!updated[key])
				self.wrem(cache[key].meta);
		}
	};

	self.toggle = function(id) {
		var item = cache[id];
		item && item.setcommand('toggle');
	};

	self.show = function(id) {
		var item = cache[id];
		item && item.setcommand('show');
	};

	self.focus = function(id) {
		var item = cache[id];
		item && item.setcommand('focus');
	};

	self.hide = function(id) {
		var item = cache[id];
		item && item.setcommand('hide');
	};

	self.close = function(id) {
		var item = cache[id];
		item && item.setcommand('close');
	};

});