#include<stdio.h>
#include<stdlib.h>
#include<string.h>
#include<sys/types.h>
#include<fcntl.h>
#include<sys/stat.h>
#include<unistd.h>
#include<dirent.h>

void copyfile(const char *iname, const char *oname){
  int idesc = open(iname, O_RDONLY);
  int odesc = open(oname, O_WRONLY|O_CREAT|O_EXCL);
  int *adrs1, *adrs2
  struct stat istat;
  if(fstat(idesc, &istat) == -1){
        errExit("erreur");
    }
  adrs1 = mmap(NULL, istat.st_size, PROT_READ,MAP_SHARED, fd, 0);

  if(ftruncate(odesc, &istat) == -1){
          errExit("erreur");
  }

  adrs2 = mmap(NULL, sb.st_size, PROT_READ | PROT_WRITE,MAP_SHARED, fd1, 0);

  memcpy(adrs1, adrs2, istat.st_size);

}
int main(int argc, char *argv[]){

  copyfile(argv[1],argv[2]);

  return 0;

}
