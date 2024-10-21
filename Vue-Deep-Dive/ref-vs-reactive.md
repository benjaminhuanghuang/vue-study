
# ref vs reactive()

https://www.bilibili.com/video/BV1xS4y1i7z1/?vd_source=b7025abbc1efd8b7631e43fa506ade3a

ref for single value

reactive for a object

reactive use Proxy 
ref use Reflmpl object and get value, set value


如果需要基本类型的响应式数据，必须用ref
如果需要object类型的响应式数据，层级不深，用ref 或 reactive，层级深用reactive
如果需要操作form 用reactive

