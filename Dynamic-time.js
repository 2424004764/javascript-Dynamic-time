function nowTime(){
                var now_time = new Date();
                var now_nian = now_time.getFullYear();
                var now_yue = now_time.getMonth();
                var now_ri = now_time.getDate();
                var now_xiaoshi = now_time.getHours();
                var now_feizhong = now_time.getMinutes();
                var now_miao = now_time.getSeconds();
                
                var time = now_nian + '-' + now_yue + '-' + now_ri + '   ' + now_xiaoshi + '-' + now_feizhong + '-' + now_miao ;
                return time;
        }
