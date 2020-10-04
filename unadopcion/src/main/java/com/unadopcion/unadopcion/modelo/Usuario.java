package com.unadopcion.unadopcion.modelo;

import javax.persistence.*;

@Entity
public class Usuario {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int usuarioId;
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int logeoId;
    private String usuarioNombre;
    private String usuarioRol;
    private double usuarioPuntos;
    private String usuarioEmail;
    private String usuarioTelefono;
    private String usuarioLugar;
    private String usuarioInfo;



    public Usuario() {}

    public int getUsuarioId() {
        return usuarioId;
    }

    public void setUsuarioId(int usuarioId) {
        this.usuarioId = usuarioId;
    }

    public int getLogeoId() {
        return logeoId;
    }

    public void setLogeoId(int logeoId) {
        this.logeoId = logeoId;
    }

    public String getUsuarioNombre() {
        return usuarioNombre;
    }

    public void setUsuarioNombre(String usuarioNombre) {
        this.usuarioNombre = usuarioNombre;
    }

    public String getUsuarioRol() {
        return usuarioRol;
    }

    public void setUsuarioRol(String usuarioRol) {
        this.usuarioRol = usuarioRol;
    }

    public double getUsuarioPuntos() {
        return usuarioPuntos;
    }

    public void setUsuarioPuntos(double usuarioPuntos) {
        this.usuarioPuntos = usuarioPuntos;
    }

    public String getUsuarioEmail() {
        return usuarioEmail;
    }

    public void setUsuarioEmail(String usuarioEmail) {
        this.usuarioEmail = usuarioEmail;
    }

    public String getUsuarioTelefono() {
        return usuarioTelefono;
    }

    public void setUsuarioTelefono(String usuarioTelefono) {
        this.usuarioTelefono = usuarioTelefono;
    }

    public String getUsuarioLugar() {
        return usuarioLugar;
    }

    public void setUsuarioLugar(String usuarioLugar) {
        this.usuarioLugar = usuarioLugar;
    }

    public String getUsuarioInfo() {
        return usuarioInfo;
    }

    public void setUsuarioInfo(String usuarioInfo) {
        this.usuarioInfo = usuarioInfo;
    }
}
