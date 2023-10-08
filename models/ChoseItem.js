class PhuKien {
    constructor(_idPhuKien, _loaiPhuKien, _tenPhuKien, _mieuTaPhuKien, _hinhPhuKien, _thuPhuKien){
        this.id = _idPhuKien;
        this.type = _loaiPhuKien;
        this.name = _tenPhuKien;
        this.desc = _mieuTaPhuKien;
        this.imgSrc_jpg = _hinhPhuKien;
        this.imgSrc_png = _thuPhuKien;
    }
}
export default PhuKien

