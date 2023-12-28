# 使用 Nginx 的官方 Docker 镜像
FROM nginx:alpine

# 拷贝静态网站文件
COPY out/ out/

# 拷贝 Nginx 配置文件
COPY config.conf /etc/nginx/conf.d/

# 暴露 80 端口 (HTTP)
EXPOSE 80

# 启动 Nginx 服务器
CMD ["nginx", "-g", "daemon off;"]
