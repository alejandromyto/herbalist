# coding: utf-8
from sqlalchemy import CHAR, Column, DECIMAL, Date, DateTime, Float, ForeignKey, ForeignKeyConstraint, Index, String, Text
from sqlalchemy.dialects.mysql import BIGINT, BIT, INTEGER, SMALLINT
from sqlalchemy.orm import relationship
from sqlalchemy.ext.declarative import declarative_base

########################################################################################################################
# Classes describing database for SqlAlchemy ORM, initially created by schema introspection.
#
# Alter this file per your database maintenance policy
#    See https://apilogicserver.github.io/Docs/Project-Rebuild/#rebuilding
#
# Created:  February 06, 2025 05:04:20
# Database: mysql+pymysql://root:root@mariadb:3306/herbalistdb
# Dialect:  mysql
#
# mypy: ignore-errors
########################################################################################################################
 
from database.system.SAFRSBaseX import SAFRSBaseX, TestBase
from flask_login import UserMixin
import safrs, flask_sqlalchemy, os
from safrs import jsonapi_attr
from flask_sqlalchemy import SQLAlchemy
from sqlalchemy.orm import relationship
from sqlalchemy.orm import Mapped
from sqlalchemy.sql.sqltypes import NullType
from typing import List

db = SQLAlchemy() 
Base = declarative_base()  # type: flask_sqlalchemy.model.DefaultMeta
metadata = Base.metadata

#NullType = db.String  # datatype fixup
#TIMESTAMP= db.TIMESTAMP

from sqlalchemy.dialects.mysql import *

if os.getenv('APILOGICPROJECT_NO_FLASK') is None or os.getenv('APILOGICPROJECT_NO_FLASK') == 'None':
    Base = SAFRSBaseX   # enables rules to be used outside of Flask, e.g., test data loading
else:
    Base = TestBase     # ensure proper types, so rules work for data loading
    print('*** Models.py Using TestBase ***')



class Cliente(Base):  # type: ignore
    __tablename__ = 'Cliente'
    _s_collection_name = 'Cliente'  # type: ignore

    Tipo = Column(Text)
    FechaAlta = Column(Date)
    TipoCliente = Column(Text)
    DNI_CIF = Column(Text)
    BIC = Column(Text)
    IBAN = Column(Text)
    NCuenta = Column(INTEGER(11), primary_key=True)
    NombreCorto = Column(Text)
    NombreCompleto = Column(Text)
    Calle = Column(Text)
    ExtCalle = Column(Text)
    Localidad = Column(Text)
    Provincia = Column(Text)
    CodPostal = Column(Text)
    Tlf = Column(Text)
    Email = Column(Text)
    Web = Column(Text)
    FPago = Column(Text)
    CC = Column(Text)
    DtoGl = Column(Text)
    NCopFact = Column(Text)
    Contacto = Column(Text)
    Recomendado = Column(Text)
    Comentarios = Column(Text)
    Notific = Column(Text)
    DeBaja = Column(Text)
    FechaBaja = Column(Date)
    CreadorPor = Column(Text)
    SumaVentas : DECIMAL = Column(DECIMAL(11, 2))
    PuntosGenerados = Column(INTEGER(11))
    PuntosUsados = Column(INTEGER(11))
    SaldoParaPuntos : DECIMAL = Column(DECIMAL(11, 2))

    # parent relationships (access parent)

    # child relationships (access children)
    VentasLINList : Mapped[List["VentasLIN"]] = relationship(back_populates="Cliente")



class Producto(Base):  # type: ignore
    __tablename__ = 'Producto'
    _s_collection_name = 'Producto'  # type: ignore

    Referencia = Column(INTEGER(11), primary_key=True)
    Descripcion = Column(Text)
    DescripcionBreve = Column(Text)
    CodBarras = Column(Text)
    CodGenerico = Column(Text)
    FechaCreacion = Column(Text)
    PVP = Column(Float)
    PrecioCoste = Column(Float)
    Familia = Column(Text)
    SubFam = Column(Text)
    Stock = Column(Float)
    Ubicacion = Column(Text)
    IVA = Column(Text)
    Marca = Column(Text)
    Proveedor = Column(Text)
    Descatalogado = Column(Text)
    PublicarWeb = Column(Text)
    OfertaWeb = Column(Text)
    NovedadWeb = Column(Text)
    tipoIVA = Column(SMALLINT(6))
    FechaUltPVP = Column(DateTime)
    allow_client_generated_ids = True

    # parent relationships (access parent)

    # child relationships (access children)
    StockTiendaList : Mapped[List["StockTienda"]] = relationship(back_populates="Producto1")
    ComprasLINList : Mapped[List["ComprasLIN"]] = relationship(back_populates="Producto")
    TraspasosLINList : Mapped[List["TraspasosLIN"]] = relationship(back_populates="Producto1")
    VentasLINList : Mapped[List["VentasLIN"]] = relationship(back_populates="Producto1")



class Proveedor(Base):  # type: ignore
    __tablename__ = 'Proveedor'
    _s_collection_name = 'Proveedor'  # type: ignore

    DNICIF = Column(Text)
    RSocial = Column(Text)
    TipoProv = Column(Text)
    FPago = Column(Text)
    Facturacion = Column(Text)
    Provincia = Column(Text)
    NoCuenta = Column(INTEGER(11), primary_key=True)
    Calle = Column(Text)
    ExtCalle = Column(Text)
    Localidad = Column(Text)
    CPost = Column(INTEGER(11))
    E_mail = Column('E-mail', Text)
    Web = Column(Text)
    BIC = Column(Text)
    IBAN = Column(Text)
    CC = Column(Text)
    Tlf1 = Column(Text)
    Tlf2 = Column(Text)
    Movil = Column(INTEGER(11))
    Fax = Column(Text)
    Contacto = Column(Text)
    Comentarios = Column(Text)
    Notific = Column(Text)
    Debaja = Column(Text)

    # parent relationships (access parent)

    # child relationships (access children)
    ComprasCABList : Mapped[List["ComprasCAB"]] = relationship(back_populates="Proveedor")
    ComprasLINList : Mapped[List["ComprasLIN"]] = relationship(back_populates="Proveedor")



class Tienda(Base):  # type: ignore
    __tablename__ = 'Tienda'
    _s_collection_name = 'Tienda'  # type: ignore

    idTienda = Column(SMALLINT(6), primary_key=True)
    nombreTienda = Column(String(20))

    # parent relationships (access parent)

    # child relationships (access children)
    ComprasCABList : Mapped[List["ComprasCAB"]] = relationship(back_populates="Tienda1")
    StockTiendaList : Mapped[List["StockTienda"]] = relationship(back_populates="Tienda1")
    ComprasLINList : Mapped[List["ComprasLIN"]] = relationship(back_populates="Tienda1")



class VentasCAB(Base):  # type: ignore
    __tablename__ = 'Ventas_CAB'
    _s_collection_name = 'VentasCAB'  # type: ignore

    Usuario = Column(Text)
    Tienda = Column(Text)
    Serie = Column(Text)
    Numero = Column(INTEGER(11), primary_key=True)
    VentaMostrador = Column(Text)
    FechaVenta = Column(DateTime)
    ImporteTotal = Column(Float)
    PrecioLinea = Column(Float)
    NombreOferta = Column(Text)
    tpcDtoGlobal = Column(Float)
    tpcDtoPP = Column(Float)
    ImporteBruto = Column(Float)
    FacturaSN = Column(Text)
    FechaFactura = Column(Text)
    NombreRazonSocialCliente = Column(Text)
    NombreComercialCliente = Column(Text)
    NCuentaCliente = Column(INTEGER(11), index=True)
    TipoCliente = Column(Text)
    NIFCliente = Column(Text)
    Telefono = Column(Text)
    ImporteIVASuperReducido = Column(Float)
    ImporteIVAReducido = Column(Float)
    ImporteIVAAceitesPastas = Column(Float)
    ImporteIVAGeneral = Column(Float)
    BaseIVACero = Column(Float)
    BaseIVASuperReducido = Column(Float)
    BaseIVAReducido = Column(Float)
    BaseIVAAceitesPastas = Column(Float)
    BaseIVAGeneral = Column(Float)
    NumeroLineas = Column(INTEGER(11))
    TieneValesDto = Column(BIT(1))
    Puntos = Column(INTEGER(11))

    # parent relationships (access parent)

    # child relationships (access children)
    VentasLINList : Mapped[List["VentasLIN"]] = relationship(back_populates="Ventas_CAB")



class ComprasCAB(Base):  # type: ignore
    __tablename__ = 'Compras_CAB'
    _s_collection_name = 'ComprasCAB'  # type: ignore

    SerieNumero = Column(String(11), unique=True)
    Fecha = Column(DateTime, index=True)
    RazonSocial = Column(Text)
    BaseImponible : DECIMAL = Column(DECIMAL(11, 2))
    ImporteIVA : DECIMAL = Column(DECIMAL(11, 2))
    ImporteRecargoEq : DECIMAL = Column(DECIMAL(11, 2))
    TotalAlbCompra : DECIMAL = Column(DECIMAL(11, 2))
    idCabCompras = Column(INTEGER(11), primary_key=True)
    ImporteIVAReducido : DECIMAL = Column(DECIMAL(11, 2))
    ImporteIVASuperReducido : DECIMAL = Column(DECIMAL(11, 2))
    ImporteIVAAceitesPastas : DECIMAL = Column(DECIMAL(11, 2))
    BaseIVAReducido : DECIMAL = Column(DECIMAL(11, 2))
    BaseIVASuperReducido : DECIMAL = Column(DECIMAL(11, 2))
    BaseIVAAceitesPastas : DECIMAL = Column(DECIMAL(11, 2))
    BaseIVACero : DECIMAL = Column(DECIMAL(11, 2))
    ImporteIVAGeneral : DECIMAL = Column(DECIMAL(11, 2))
    BaseIVAGeneral : DECIMAL = Column(DECIMAL(11, 2))
    TotalAlbCalculado : DECIMAL = Column(DECIMAL(11, 2))
    tpcDtoProntoPago : DECIMAL = Column(DECIMAL(5, 2))
    tpcDtoGlobal : DECIMAL = Column(DECIMAL(5, 2))
    Tienda = Column(Text)
    NoCuentaProveedor = Column(ForeignKey('Proveedor.NoCuenta'), index=True)
    idTienda = Column(ForeignKey('Tienda.idTienda'), index=True)

    # parent relationships (access parent)
    Proveedor : Mapped["Proveedor"] = relationship(back_populates=("ComprasCABList"))
    Tienda1 : Mapped["Tienda"] = relationship(back_populates=("ComprasCABList"))

    # child relationships (access children)
    ComprasLINList : Mapped[List["ComprasLIN"]] = relationship(back_populates="Compras_CAB")



class StockTienda(Base):  # type: ignore
    __tablename__ = 'StockTienda'
    _s_collection_name = 'StockTienda'  # type: ignore

    ID = Column(INTEGER(11), nullable=False, unique=True)
    Tienda = Column(String(20), nullable=False)
    Referencia = Column(ForeignKey('Producto.Referencia'), primary_key=True, nullable=False, index=True)
    Marca = Column(Text)
    Producto = Column(Text)
    UltimaVenta = Column(Date)
    UltimaCompra = Column(Date)
    Unidades = Column(Float)
    PrecioCoste = Column(Float)
    PrecioCosteConIVA = Column(Float)
    PrecioCosteConIVA_Recargo = Column('PrecioCosteConIVA-Recargo', Float)
    PCM = Column(Float)
    PCMconIVA = Column(Float)
    PCMconIVA_Recargo = Column('PCMconIVA-Recargo', Float)
    PVP = Column(Float)
    PVPsinIVA = Column(Float)
    idTienda = Column(ForeignKey('Tienda.idTienda'), primary_key=True, nullable=False)
    StockInicial = Column(INTEGER(11))
    Entradas = Column(INTEGER(11))
    Salidas = Column(INTEGER(11))
    Stock = Column(INTEGER(11))
    FechaInventario = Column(DateTime)
    allow_client_generated_ids = True

    # parent relationships (access parent)
    Producto1 : Mapped["Producto"] = relationship(back_populates=("StockTiendaList"))
    Tienda1 : Mapped["Tienda"] = relationship(back_populates=("StockTiendaList"))

    # child relationships (access children)
    ComprasLINList : Mapped[List["ComprasLIN"]] = relationship(back_populates="StockTienda")
    TraspasosLINList : Mapped[List["TraspasosLIN"]] = relationship(foreign_keys='[TraspasosLIN.Referencia, TraspasosLIN.idDestino]', back_populates="StockTienda")
    TraspasosLINList1 : Mapped[List["TraspasosLIN"]] = relationship(foreign_keys='[TraspasosLIN.Referencia, TraspasosLIN.idOrigen]', back_populates="StockTienda1")
    VentasLINList : Mapped[List["VentasLIN"]] = relationship(back_populates="StockTienda")



class ComprasLIN(Base):  # type: ignore
    __tablename__ = 'Compras_LIN'
    _s_collection_name = 'ComprasLIN'  # type: ignore
    __table_args__ = (
        ForeignKeyConstraint(['idTienda', 'ReferenciaProducto'], ['StockTienda.idTienda', 'StockTienda.Referencia']),
        Index('Fk_Producto', 'idTienda', 'ReferenciaProducto')
    )

    Tienda = Column(Text)
    NumeroAlbaran = Column(INTEGER(11))
    AlbaranCompra = Column(ForeignKey('Compras_CAB.SerieNumero'), index=True)
    NombreProveedor = Column(Text)
    FechaAlbaran = Column(DateTime)
    ImporteAlbaran : DECIMAL = Column(DECIMAL(11, 2))
    ReferenciaProducto = Column(ForeignKey('Producto.Referencia'), index=True)
    OLDReferenciaProducto = Column(Text)
    DescripciondelProducto = Column(Text)
    CodigodeBarras = Column(BIGINT(20))
    Cantidad = Column(INTEGER(11))
    PVPProducto : DECIMAL = Column(DECIMAL(11, 2))
    PrecioLinea : DECIMAL = Column(DECIMAL(11, 2))
    tpcIVA : DECIMAL = Column(DECIMAL(11, 2))
    tpcDescuento1 : DECIMAL = Column(DECIMAL(5, 2))
    tpcDescuento2 : DECIMAL = Column(DECIMAL(5, 2))
    tpcDescuento3 : DECIMAL = Column(DECIMAL(5, 2))
    tpcDescuento4 : DECIMAL = Column(DECIMAL(5, 2))
    tpcDtoGlobal : DECIMAL = Column(DECIMAL(5, 2))
    tpcDtoProntoPago : DECIMAL = Column(DECIMAL(5, 2))
    id = Column(INTEGER(11), primary_key=True)
    Importe : DECIMAL = Column(DECIMAL(11, 2))
    NoCuentaProveedor = Column(ForeignKey('Proveedor.NoCuenta'), index=True)
    CantidadConCoste = Column(INTEGER(11))
    CantidadGratis = Column(INTEGER(11))
    PrecioCoste : DECIMAL = Column(DECIMAL(11, 2))
    Lote = Column(String(20))
    idTienda = Column(ForeignKey('Tienda.idTienda'))
    FechaInventario = Column(DateTime)

    # parent relationships (access parent)
    Compras_CAB : Mapped["ComprasCAB"] = relationship(back_populates=("ComprasLINList"))
    Proveedor : Mapped["Proveedor"] = relationship(back_populates=("ComprasLINList"))
    Producto : Mapped["Producto"] = relationship(back_populates=("ComprasLINList"))
    StockTienda : Mapped["StockTienda"] = relationship(back_populates=("ComprasLINList"))
    Tienda1 : Mapped["Tienda"] = relationship(back_populates=("ComprasLINList"))

    # child relationships (access children)



class TraspasosLIN(Base):  # type: ignore
    __tablename__ = 'Traspasos_LIN'
    _s_collection_name = 'TraspasosLIN'  # type: ignore
    __table_args__ = (
        ForeignKeyConstraint(['Referencia', 'idDestino'], ['StockTienda.Referencia', 'StockTienda.idTienda']),
        ForeignKeyConstraint(['Referencia', 'idOrigen'], ['StockTienda.Referencia', 'StockTienda.idTienda']),
        Index('fk_Traspasos_LIN_Origen', 'Referencia', 'idOrigen'),
        Index('fk_Traspasos_LIN_Destino', 'Referencia', 'idDestino')
    )

    Origen = Column(Text)
    Destino = Column(Text)
    Numero = Column(INTEGER(11), primary_key=True, unique=True)
    Producto = Column(Text)
    Cantidad = Column(INTEGER(11))
    FechaTraspaso = Column(DateTime)
    PedidoProveedor = Column(Text)
    Referencia = Column(ForeignKey('Producto.Referencia'))
    idOrigen = Column(SMALLINT(6))
    idDestino = Column(SMALLINT(6))

    # parent relationships (access parent)
    StockTienda : Mapped["StockTienda"] = relationship(foreign_keys='[TraspasosLIN.Referencia, TraspasosLIN.idDestino]', back_populates=("TraspasosLINList"))
    StockTienda1 : Mapped["StockTienda"] = relationship(foreign_keys='[TraspasosLIN.Referencia, TraspasosLIN.idOrigen]', back_populates=("TraspasosLINList1"))
    Producto1 : Mapped["Producto"] = relationship(back_populates=("TraspasosLINList"))

    # child relationships (access children)



class VentasLIN(Base):  # type: ignore
    __tablename__ = 'Ventas_LIN'
    _s_collection_name = 'VentasLIN'  # type: ignore
    __table_args__ = (
        ForeignKeyConstraint(['RefProducto', 'idTienda'], ['StockTienda.Referencia', 'StockTienda.idTienda']),
        Index('fk_Ventas_LIN_RefProducto_Tienda', 'RefProducto', 'idTienda')
    )

    id = Column(INTEGER(11), primary_key=True)
    Usuario = Column(Text)
    Tienda = Column(Text)
    Serie = Column(Text)
    Numero = Column(ForeignKey('Ventas_CAB.Numero'), index=True)
    VentaMostrador = Column(Text)
    FechaVenta = Column(DateTime)
    Producto = Column(Text)
    CodigoBarras = Column(Text)
    RefProducto = Column(ForeignKey('Producto.Referencia'), index=True)
    OLDRefProducto = Column(Text)
    StockCantidad = Column(Float)
    FamiliaComercial = Column(Text)
    SubFamiliaComercial = Column(Text)
    Marca = Column(Text)
    CantidadVendida = Column(Float)
    LoteVendido = Column(Text)
    FechaCaducidad = Column(Text)
    ImporteTotal = Column(Float)
    PrecioLinea = Column(Float)
    tpcIVA = Column(Float)
    NombreOferta = Column(Text)
    tpcDtoLinea = Column(Float)
    tpcDtoGlobal = Column(Float)
    tpcDtoPP = Column(Float)
    ImporteBruto = Column(Float)
    FacturaSN = Column(Text)
    FechaFactura = Column(Text)
    NombreRazonSocialCliente = Column(Text)
    NombreComercialCliente = Column(Text)
    NCuentaCliente = Column(ForeignKey('Cliente.NCuenta'), index=True)
    TipoCliente = Column(Text)
    NIFCliente = Column(Text)
    Telefono = Column(Text)
    idTienda = Column(SMALLINT(6))

    # parent relationships (access parent)
    Cliente : Mapped["Cliente"] = relationship(back_populates=("VentasLINList"))
    Ventas_CAB : Mapped["VentasCAB"] = relationship(back_populates=("VentasLINList"))
    StockTienda : Mapped["StockTienda"] = relationship(back_populates=("VentasLINList"))
    Producto1 : Mapped["Producto"] = relationship(back_populates=("VentasLINList"))

    # child relationships (access children)
