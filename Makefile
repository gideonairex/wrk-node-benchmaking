check_env:
 TEMP_DIR=wrk-temp
 ifndef VERSION
  VERSION=4.0.0
 else
  VERSION=$(VERSION)
 endif

install: check_env
	echo "Installing version $(VERSION)"
	curl -LkSs https://github.com/wg/wrk/tarball/$(VERSION) -o $(TEMP_DIR).tar.gz \
		&& mkdir $(TEMP_DIR) \
		&& tar -zxvf $(TEMP_DIR).tar.gz -C $(TEMP_DIR) --strip-components=1 \
		&& cd $(TEMP_DIR) \
		&& make \
		&& mv ./wrk ../src/ \
		&& cd ../ \
		&& rm -Rf $(TEMP_DIR)*
	echo "Installed wrk"

clean:
	rm -Rf src
	mkdir src
	echo "Cleaned up src"
