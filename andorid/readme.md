# andoridstudio自动导包 
[url](https://blog.csdn.net/yanjingtp/article/details/79192287)
File -->Setting-->Editor-->General-->Auto Import  勾选add...和Op

# 样式
app --> mian --> res --> layout --> activity_main.xml
```xml
android:layout_width="match_parent"
android:layout_height="wrap_content"
```
```
match_parent: 充满父容器
wrap_content：容器宽度（wrap:扩展空间）
```

## 长度单位  dp、sp、px、in、pt、mm
- dp: 逻辑长度单位，在 160 dpi 屏幕上，1dp=1px=1/160英寸。随着密度变化，对应的像素数量也变化，但并没有直接的变化比例
- mm（Millimeters ，毫米）：屏幕物理长度单位
- px（Pixels ，像素）：对应屏幕上的实际像素点

## 定义公共样式
在app --> mian --> res --> values 中定义公共样式
```xml
<!-- colors.xml -->
<?xml version="1.0" encoding="utf-8"?>
<resources>
    <color name="colorPrimary">#3F51B5</color>
    <color name="colorPrimaryDark">#303F9F</color>
    <color name="colorAccent">#FF4081</color>
</resources>
```
在activity层中使用直接使用`@colors/colorAccent`即可
## 

## 网络请求
okhttp 